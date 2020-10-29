export default {
  lang: 'en',
  files: '**/*.mdx',
  ignore: ['./*.md'],
  title: 'Developer Portal',
  description: 'Developer Portal',
  base: '/',
  menu: [
    'Introduction',
    'Installation',
    { name: 'Config', menu: [] },
    { name: 'Deploy', menu: [] },
  ],
  menuDisplayName: {
    //UI: 'User Interface',
    //Main: 'Main Container',
  },
  groups: {
    //'': [],
    //API: ['Components', 'UI'],
  },
  apis: 'https://www.google.com',
  repository: 'https://github.com/',
  themeConfig: {
    search: true,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    header: {
      icons: 'minimal',
      fixed: false,
    },
    footer: {
      navigation: true,
    },
    logo: {
      // src: '/public/assets/logo.svg' // use this line if you want one logo for both color modes
      src: {
        light: '/public/assets/logo.svg',
        dark: '/public/assets/logo.svg'
      },
      width: 200,
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
  },
  docgenConfig: {
    searchPatterns: [
      '**/*.{ts,tsx,js,jsx,mjs}',
      'gatsby-theme-docz-custom/src/gatsby-theme-docz/custom-components/**/*.{ts,tsx,js,jsx,mjs}',
      '!**/node_modules',
      '!../**/node_modules',
      '!**/doczrc.js',
      '!../**/doczrc.js',
    ],
  },
  filterComponents: (files) =>
    files.filter((filepath) => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};