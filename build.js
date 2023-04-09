const fs = require('fs')
const { minify } = require('terser')
const pkg = require('./package.json')

if (!fs.existsSync('dist')) fs.mkdirSync('dist')

function write(file, source) {
  const isModule = !source.startsWith('!function')
  const { code } = minify(source, {
    module: isModule,
    compress: true,
  })

  fs.writeFileSync(file, code)
}

const file = fs.readFileSync('./index.js', 'utf8')

// copy for ESM
write(pkg.module, file)

// transform ESM -> CJS exports
write(
  pkg.main,
  file.replace('export function', 'function').replace(
    'export default classyfier',
    `module.exports = classyfier;
      module.exports.classyfier = classyfier;`
  )
)
