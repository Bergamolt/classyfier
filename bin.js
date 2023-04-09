// @ts-check
const fs = require('fs')
const zlib = require('zlib')
const { minify } = require('terser')
const pkg = require('./package.json')

if (!fs.existsSync('dist')) fs.mkdirSync('dist')

/**
 * @param {string} file
 * @param {string} source
 */
function write(file, source) {
  let isModule = !source.startsWith('!function')
  let result = minify(source, {
    module: isModule,
    compress: true,
  })

  fs.writeFileSync(file, result.code)
  console.log('~> "%s" (%d b)', file, zlib.gzipSync(result.code).byteLength)
}

let input = fs.readFileSync('./index.js', 'utf8')

// copy for ESM
write(pkg.module, input)

// transform ESM -> CJS exports
write(
  pkg.main,
  input
    .replace('export function', 'function')
    .replace(
      'export default classyfier',
      'module.exports = classyfier;\n' + 'module.exports.classyfier = classyfier;'
    )
)
