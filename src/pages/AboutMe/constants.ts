type TStack = {
  title: string;
  items: string[];
};
export const stackTech: TStack[] = [
  {
    title: 'UI',
    items: [
      'React.js',
      'Next.js',
      'typescript',
      'graphql',
      'apollo client',
      'react-query',
      'react-hook-form',
      'react-router',
      'material-ui',
    ],
  },
  {
    title: 'Styling',
    items: [
      'css',
      'sass',
      'tailwindcss',
      'css modules',
      'postcss',
      'styled-component',
      'emotion',
    ],
  },
  {
    title: 'Testing',
    items: ['jest', 'react testing library', 'cypress'],
  },
  {
    title: 'Web performance',
    items: [
      'calibreapp.com',
      'webpagetest.org',
      'web.dev',
      'webpack-bundle-analyzer',
      'lighthouse extension',
      'web-vitals',
      'whybundled',
      'why-did-you-render',
      'react-lazyload',
      '@researchgate/react-intersection-observer',
      'bundlephobia',
      'Import Cost',
    ],
  },
  {
    title: 'Javascript Tooling',
    items: [
      'webpack',
      'webpack-merge',
      'parallel-webpack',
      'custom babel configurations for web and libraries',
      'custom babel presets',
      'custom eslint plugins',
      'husky',
      'lint-staged',
      'lerna',
      'shelljs',
      'inquirer',
      'minimist',
      'chalk',
      'ora',
      'fs & fs-extra',
      'fs child_process exec & spawn apis',
      'apollo-tooling',
      '@graphql-codegen',
      'nodemon',
    ],
  },
  {
    title: 'CI/CD',
    items: [
      'npm registry',
      'github actions',
      'bitbucket pipelines',
      'gitlab pipelines',
      'circle ci',
      'vercel',
      'netlify',
    ],
  },
  {
    title: 'Server side',
    items: ['nodejs', 'express', 'primsa orm', 'typeorm', 'graphql'],
  },
];
