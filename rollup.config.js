import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'index.js',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
    },
    {
      dir: 'lib',
      format: 'es',
    },
    {
      dir: 'lib',
      format: 'umd',
      name: 'classyfier',
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs(), terser()],
}
