import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import {
  uglify
} from 'rollup-plugin-uglify'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'mytoolkit',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(), // so Rollup can convert `ms` to an ES module
      uglify()
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify 
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external: ['bezier-easing'],
    output: [{
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
    ]
  }
];