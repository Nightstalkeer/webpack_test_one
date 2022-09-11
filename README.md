npm init -y
npm i -D webpack // i for install, D for Dev  mode
npm i -D webpack-cli // for installing the webpack command line integration

//babel setup command
npm i -D babel-loader @babel/core @babel/preset-env webpack  // babel loader
npm i -D @babel/plugin-proposal-class-properties // babel plugin


// Css setup {you need to import the css or scss file to index.js file}
npm i -D css-loader  // css loader
npm i -D mini-css-extract-plugin    // css plugin.
npm i -D sass-loader sass  // sass loader for scss files

// HTML setup
npm i -D html-loader  // html loader
npm i -D html-loader  // html plugin

// lastly need to run and build 
npm run build


{// If you want to use dev-server
npm i -D webpack-dev-server // this command will install the dev server 

// Then lastly 
npm start 
}


