import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const config = {
  input: './src/index.ts',
  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'es',
  }],
  external: Object.keys(pkg.peerDependencies),
  plugins: [
    typescript(),
    terser(),
    nodeResolve({
      jsnext: true,
      main: true,
    }),
    commonjs({
      include: /node_modules/,
      sourceMap: false,
    }),
  ],
};

export default config;
