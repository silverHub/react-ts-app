# React-Vite-TailwindCSS Starter 😎

Opinionated project starter built on 
- Vite bundler v2.1.0
- React  v17.0.1
- TypeScript v4.2.3
- TailwindCSS (JIT) v2.0.3
 
**Tested with Win10.**

## Features 🎁
- Deployment to Github Pages preconfigured - every commit to master will trigger a build and commit to gh-pages branch
- Relative asset urls - host prod build under arbitrary domain and path
- TailwindCSS JIT - enables arbitrary values

## Config 🔧
To use the deployment workflow you should configure and access token as a secret for you GitHub repo and you should enable Github Pages with gh-pages branch.
See details and additional config [here](https://github.com/JamesIves/github-pages-deploy-action).

## Usage 🚀

First time, install dependencies with:

```sh
npm install
```

Start development server with hot module reloading:

```sh
npm start  // [localhost:3000](localhost:3000)
```

Create a production build:

```sh
npm run build   // assets will be generated in ./build folder
```

Preview prod build
```sh
npm run serve
```

## Credits
MIT license
Made with 💗




