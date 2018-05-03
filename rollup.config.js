import babel from 'rollup-plugin-babel'

export default {
  input: 'index.js',
  output: {
    file: 'mytoolkit.js',
    format: 'es'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}