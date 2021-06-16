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

            

