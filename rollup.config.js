import {nodeResolve} from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';
import litcss from 'rollup-plugin-lit-css';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

import Sass from 'sass';

// Static assets will vary depending on the application
const copyConfig = {
  targets: [
    { src: 'src/img', dest: 'dist' },
    { src: 'src/Demo.js', dest: 'dist' },
    { src: 'src/index.html', dest: 'dist' },
  ],
};

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = [
  {
    input: './src/CreditCard.js',
    output: {
      dir: 'dist',
      format: 'es',
    },
    plugins: [
      nodeResolve(),
      minifyHTML(),
      litcss({
        include: '/**/*.scss',
        uglify: true,
        transform: (data, { filePath }) =>
          Sass.renderSync({ data, file: filePath })
            .css.toString(),
      }),
    ],
    preserveEntrySignatures: false,
  },
  {
    input: './src/Demo.js',
    output: {
      dir: 'dist',
      format: 'es',
    },
    plugins: [
      nodeResolve(),
      minifyHTML(),
      commonjs({transformMixedEsModules:true}),
      copy(copyConfig),
      litcss({
        include: [ '/**/*.scss', '/**/*.css'],
        transform: (data, { filePath }) =>
          Sass.renderSync({ data, file: filePath })
            .css.toString(),
      }),
    ],
    preserveEntrySignatures: false,
  },
]


if (process.env.NODE_ENV !== 'development') {
  config[0].plugins.push(terser());
} else {
  config[1].plugins.push(serve({
    open: true,
    contentBase: 'dist',
    port: 3000
  }))
  config[1].plugins.push(livereload('dist'))
}

export default config;