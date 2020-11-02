# Developer Portal
This is a boilerplate in order to start a Developer Portal based on DoczJS and markdown files. The project provides a custom theme (in a shadowing mode, as Gatsby provides) in order to customize the Docz layout.

## Features
- This project looks recursively into the src direcotry and then creates the documentation pages based on the .mdx files.
- You can add some configuration inside the doczrc.js file as for example: menu groups, github repo, dark mode or a static link for an API external viewer.

## Dependencies
- Install `node`
    - Use NVM (https://github.com/nvm-sh/nvm)
    - Alternatively you can download and install it manually: https://nodejs.org/en/download/
- Install `yarn ^1.10.1`
    - Use brew (https://brew.sh/)
    - Alternatively you can download and install it manually: https://classic.yarnpkg.com/en/docs/install

## Usage
- Install dependencies: `yarn install` or `npm install`
- Run application (port 3000): `yarn docz dev` or `npm run dev`
- Build application: `yarn docz build` or `npm run build`

## Useful links
- Docz guide: https://www.docz.site/
- Gatsby guide: https://www.gatsbyjs.com/