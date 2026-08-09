// We’ll first need to make a new directory for our practice app, 
// then create a package.json file in it for npm to record information about packages we 
// use (like Webpack). Run the following in your terminal:

mkdir webpack-practice &&
cd webpack-practice &&
npm init -y --init-type=module
// This should create a package.json file inside the webpack-practice directory you just made and entered. Now we can install Webpack:

npm install --save-dev webpack webpack-cli

// Note that we included the --save-dev flag (you can also use -D as a shortcut), 
// which tells npm to record our two packages as development dependencies. 
// We will only be using Webpack during development. The actual code that makes Webpack 
// run will not be part of the code that the browser will run.

// Also notice that when these finished installing, npm created a node_modules directory and a package-lock.json file for us. 
// node_modules is where Webpack’s actual code (and a whole bunch of other stuff) lives, 
// and package-lock.json is just another file npm uses to track more specific package information.

// have two very important directories: src (short for “source”) and dist (short for “distribution”).

// Keep that in mind! Work inside src, build into dist, then deploy from there!

// Now that we’ve installed Webpack in our project directory, 
// let’s create a src directory with two JavaScript files inside it: index.js and greeting.js.

mkdir src && touch src/index.js src/greeting.js
// Inside our two JavaScript files, we’ll have the following:

// index.js
import { greeting } from "./greeting.js";

console.log(greeting);
// greeting.js
export const greeting = "Hello, Odinite!";

// In order to bundle this, we’ll also want a Webpack configuration file,

// Back in your project root (so outside of src), create a webpack.config.js file that contains the following:

// webpack.config.js
import path from "node:path";

export default {
  mode: "development",   // it can be development and  production 
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),   // path: The path to the output directory, in this case, dist. If this directory doesn’t already exist when we run Webpack, it will automatically create it for us as well. Don’t worry too much about why we have the path.resolve part - this is just the way Webpack recommends we specify the output directory.
    clean: true,        // every time when we run webpack it will clean the dist over and over for new upcoming code
  },
};

npx webpack  // run command   this will create main.js in dist where  a lot of code but dont worry now, just run

 // If you go ahead and run this file with 
node dist/main.js
  // you should see 
    Hello, Odinite!
      // logged in the terminal.

// Congratulations! You’ve just made your first bundle with Webpack!

// NOw its time to handle |HTML | in project its not a js file so we need a package to install ccalled  "HtmlWebPackplugin"

npm install --save-dev html-webpack-plugin

// We should also create a template.html inside src (you can name this file whatever you want) and 
// fill that with the usual HTML boilerplate. We do not need to put a script tag in 
// this file! HtmlWebpackPlugin will automatically add our output bundle as a script tag.

// well! Inside our webpack.config.js, we can add a few little bits.

// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({        // HtmlWebpackPlugin constructor
      template: "./src/template.html",
    }),
  ],
};
// when we run npx webpack again, you’ll notice our dist directory not only contains a main.js file 
  // but an index.html file as well (it can’t combine them into one file).

// You’ll also notice that HtmlWebpackPlugin has automatically added a deferred script tag to our "index.html" file - 
// what a darling! If you open this file in the browser and check the browser console, you should see our lovely "Hello, Odinite!" string logged.


