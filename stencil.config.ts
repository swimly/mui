import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'mui',
  enableCache: false,
  hashFileNames: false,
  buildEs5: false,
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/variables.scss',
        'src/globals/mixins.scss'
      ]
    }),
    nodePolyfills(),
    inlineSvg()
  ],
  outputTargets: [
    {
      type: 'dist',
      empty: true,
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: '*Built with swimly!*'
    },
    {
      type: 'www',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png}'
        ]
      } // disable service workers
    }
  ]
};
