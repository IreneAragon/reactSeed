# This is a React Seed to start working on personal projects

For this React seed I'm using Webpack as bundler, you'll be able to work with SASS as well.
Please watch that this seed it doesn't have typescript installed, you can do it if you want or download my React and Typescript Seed that will come soon.

## Prerequisites

You'll need to have nodejs installed in your computer, to know if you already have installed nodejs you can run on your terminal/console `node -v`. If you have not installed you can do it [`here`](https://nodejs.org/en/).

## Start working!

- Navigate to the folder where you download the repository and run `npm start`.

```
npm start
```

## You can start using the seed or you can build it by yourself following these steps, dare you?

#### 1.- Create a folder on your computer
#### 2.- Install nodejs and npm 

```
npm install 
```
```
npm init -y
```

#### 3.- Install Webpack and Webpack cli
```
npm install webpack webpack-cli --save-dev
```
Add this into "scripts" 
_package.json_

```diff
"scripts": {
+    "start": "webpack --mode development"
  },   
```

#### 4.- Install Babel and Babel loaders
```
npm install @babel/cli @babel/core @babel/preset-env --save-dev
```
```
npm install babel-loader --save-dev
```

Now let's configure babel by creating a new file:  `.babelrc` 
- Add this into the new file 

_.babelrc_
```diff
+ {
+   "presets": ["@babel/preset-env"]
+ }
```

#### 5.- Configuring Webpack 
Create `index.js` file for testing and put into some ES6 code, for example: 

_index.js_
```diff
+ const myname = "Irene";
+ const surname = "Aragón";
+ const user = `User: ${myname} ${surname}`;
+ document.write(user);
```

Create `index.html` for testing 

_index.html_
```diff
+ <!DOCTYPE html>
+ <html lang="en">
+    <head>
+        <meta charset="utf-8" />
+        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
+        <meta name="viewport" content="width=device-width, initial-scale=1" />
+        <title>Webpack by sample</title>
+    </head>
+    <body>
+        Hello Webpack!
+        <script src="./dist/main.js"></script>
+    </body>
+ </html>
```
Create a src folder, keep your app files into and put the configuration files outside 

Example:
```
> dist
> node_modules
> src   
    - index.html
    - index.js
    - styles.scss
- .babelrc
- package.json
- webpack.config.js
- ... 
``` 

Now it's time to create `webpack.config.js` and follow this steps

_webpack.config.js_

- Add at the beginning of the file 
```diff
+ const basePath = __dirname;
```

- Set entry point 
```diff
+ module.exports = {
+   context: path.join(basePath, 'src'),
+    entry: ["./index.js"],
+ };
```

- Set rules into `module.exports`
```diff
+ module: {
+     rules: [
+        {
+        test: /\.js$/,
+        exclude: /node_modules/,
+        loader: 'babel-loader',
+        },
+    ],
+ },
``` 

- Add an output

```diff
+ output: {
+     path: path.resolve(__dirname, "dist"),
+ },
``` 

#### 6.- Install Webpack Server and add some settings to `package.json`
```
npm install webpack-dev-server --save-dev
```

_package.json_

```diff
"scripts": {
-   "start": "webpack --mode development"
+   "start": "webpack serve --mode development",
+   "build": "webpack --mode development"
},
```

#### 7.- Install HTML Webpack Plugin and add some setting to `webpack.config.js`
```
npm install html-webpack-plugin --save-dev
```

_webpack.config.js_

- Add at the beginning of the file
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

- Add inside `module.exports`
```diff
+ plugins: [
+   new HtmlWebpackPlugin({
+     filename: 'index.html', //Name of file in ./dist/
+     template: 'index.html', //Name of template in ./src
+     scriptLoading:'blocking',
+    }),
+ ],
```

#### 8.- Install CSS loaders and add some settings to  `webpack.config.js`
```
npm install style-loader css-loader --save-dev
``` 
_webpack.config.js_

- Update the entry point 
```diff
-  entry: ['./index.js'],
+ entry: ['../index.js', './mystyles.css'],
```

- Add this settings inside `module: {rules[ add here ]}`
```diff
+     {
+       test: /\.css$/,
+       exclude: /node_modules/,
+       use: [
+         {
+           loader: 'style-loader',
+         },
+         {
+           loader: 'css-loader',
+         },
+       ],
+     },
``` 

- Add configuration to the entry point, `module.exports`
```diff
+  entry: {
+    app: './index.js',
+    appStyles: [
+      './mystyles.css',
+    ],
+  },
```

- Add into output 
```diff
+ output: {
    ...
+   filename: '[name].[chunkhash].js',
+ },
```

#### 9.- Install Clean Webpack Plugin to remove/clean the build folder automatically and add some settings into `webpack.config.js`. 
```
npm install clean-webpack-plugin --save-dev
```

_webpack.config.js_

- Add at the beginning of the file
```diff
+ const {CleanWebpackPlugin} = require('clean-webpack-plugin')
+ const path = require('path')
``` 

- Add inside output
```diff
+ path: path.resolve(process.cwd(), 'dist'),
``` 

- Add inside plugins
```diff
+ new CleanWebpackPlugin(),
```

#### 10.- Install `MiniCssExtractPlugin` to keep separate the css files and add some settings into `webpack.config.js`. 
```
npm install mini-css-extract-plugin --save-dev
``` 

_webpack.config.js_

- Replace the "use" array of the css rules with MiniCssExtractPlugin configuration
```diff
-        use: [
-          {
-            loader: 'style-loader',
-          },
-          {
-            loader: 'css-loader',
-          },
-         ],
+       use: [
+          MiniCssExtractPlugin.loader,
+         "css-loader"
+        ]
```

- Add the plugin object into plugins
```diff
+   new MiniCssExtractPlugin({
+     filename: "[name].css",
+     chunkFilename: "[id].css"
+   }),
```

#### 11.- Installing SASS
- Install SASS 
```
npm install sass sass-loader --save-dev
```
- Create some sass elements into css files for testing
- Change the .css extension to .scss and update `webpack.config.js`

_webpack.config.js_

- Update `appStyles` 
```diff
appStyles: [
-     './mystyles.css',
+     './mystyles.scss',
```

- Add a new entry point for sass files into rules 
```diff
+     {
+       test: /\.scss$/,
+       exclude: /node_modules/,
+       use: [
+         MiniCssExtractPlugin.loader,
+         "css-loader",
+         {
+           loader: "sass-loader",
+           options: {
+             implementation: require("sass")
+           }
+         },
+       ]
+     },
```

#### 12.- Install RIMRAF to delete and create automatically the dist folder when run `npm run build` 
```
npm i rimraf --save-dev
``` 

- Let's configure the `package.json` by adding a build script 

```diff
"scripts": {  
    "start": "webpack serve --mode development",
-   "build": "webpack --mode development"
+   "build": "rimraf ./dist && webpack --mode development"      
},
```

#### 13.- Manage Images 
- Add into index.html an image container for testing 
```
<div id="imgContainer"></div>
```
- Create new 'content' folder into src and save one image
- Import the images from `index.js`

_index.js_
```diff
+ import logoImg from "./content/react2.png";

+ const img = document.createElement('img');
+ img.src = logoImg;
+ document.getElementById('imgContainer').appendChild(img);
```

- Add some setting to `webpack.config.js`
_webpack.config.js_
```diff
+     {
+       test: /\.(png|jpg)$/,
+       type: 'asset/resource',
+     },
```

- Add css styles if is necesary
```diff
+ img {
+   display: block;
+   width: 200px;
+ }
```

#### 14.- Install React
```
npm install react react-dom --save
```

- Add a new container for react into index.html
```
<div id="root"></div>
```

- Change the .js extensions to .jsx 
- Import React and React DOM into `index.jsx`
```diff
+ import React from "react";
+ import ReactDOM from "react-dom";
```

- Create a test component 
```diff
+ ReactDOM.render(
+   <h1>Hello, world!</h1>,
+   document.getElementById('root')
+ );
```

- Install babel preset for react, update `.babelrc` and add some settings to `webpack.config.js`
```
npm install @babel/preset-react --save-dev
```

_.babelrc_
```diff
- "presets": ["@babel/preset-env"]
+ "presets": ["@babel/preset-env", "@babel/preset-react"]
```

_webpack.config.js_
- Add the jsx extension to resolve
```diff
+   resolve: {
+     extensions: ['.js', '.jsx'],
+   },
```

- Modify the entry point
```diff
-     app: ['./index.js'],
+     app: ['./index.jsx'],
```

- Modify the babel loader
```diff
-     test: /\.js$/,
+     test: /\.jsx?$/,
```

#### 15.- Server configuration (optional)
If you want to change the output port or open the browser automatically you can add more settings 
_webpack.config.js _
```diff
+ devServer: {
+   port: 8081,
+   open: true,
+ },
```

#### 16.- That's all! now you can run `npm run build` or `npm start` 
```
npm run build
```
```
npm start
```
## Let start working with react! I hope you find this useful and enjoy coding. 

