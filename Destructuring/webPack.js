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


// Loading CSS
// We don’t just need one new package for CSS, we need two. Gosh, what a greedy little thing… Let’s install them.

npm install --save-dev style-loader css-loader

// css-loader: will read any CSS files we import in a JavaScript file and store the result in a string. 
// style-loader: then takes that string and actually adds the JavaScript code that will apply those styles to the page. 
// Therefore, we need both.


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
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

// All this does is tell Webpack that if it encounters an imported file ending with .css, 
// it should use the listed loaders to process that CSS file.

// Loader order matters for CSS!
// Notice how we put css-loader at the end of the array. We must set this order and not the reverse.

// lets add some style to src/styles.css

/* styles.css */
body {
  background-color: rebeccapurple;
}

// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

// Once again, bundle with Webpack using npx webpack, then open dist/index.html and enjoy the beautiful purple screen!


// IMAGES OPTIMIZED WAYS ACORDING TO BUNDLER WEBPACK


npm install --save-dev html-loader
// Image files we reference in our HTML template, e.g. as the src of an <img>
// We need to install and tell Webpack to use something called html-loader, which will detect image file paths in our HTML template and load the right image files for us.

if
  // Image files used in our CSS inside url()
// Lucky us! css-loader already handles this for us, so there’s nothing extra to do for image paths in CSS!


// Then, add the following object to the module.rules array within webpack.config.js:

// webpack.config.js
{
  test: /\.html$/i,
  use: ["html-loader"],
}


// Images we use in our JavaScript, where we will need to import the files

// If we need to use a local image file in our JavaScript 
// (such as when manipulating the DOM to create or edit img elements and set their src attribute), 
// we need to import the images into our JavaScript module. Since images aren’t JavaScript, 

// we need to tell Webpack that these files will be assets by adding an asset/resource rule. 
// No need to install anything here. Just add the following object to the module.rules array within webpack.config.js:

// webpack.config.js
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
}

// You can always edit the regex in the test property to remove any file extensions you don’t need or add any extensions you do need.

// src/index.js
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);


// After all that, if we added both html-loader and the image asset/resource rule, 
// our webpack.config.js would look something like this:

// webpack.config.js
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
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

// ? *********
// Webpack dev server

// During this lesson, did you get a bit annoyed with having to run npx webpack to rebundle with every change? 
// Fortunately, there are multiple solutions for this, and we will focus on what we think 
// is the most useful option: webpack-dev-server. Install it as follows:
npm install --save-dev webpack-dev-server

// in vs code live run can see before saving changes 

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
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

// Firstly, we add a source map by setting eval-source-map as a devtool option. 
// If we don’t do this, any error messages we get won’t necessarily match up to the correct files 
// and line numbers from our development code. In the devtools “Sources” tab, 
// we also won’t be able to find our original untouched code, making the Chrome debugger harder to use. 
// Adding this source map will solve both of these problems for us.

// Once set up, we can start up the dev server using the following command:
npx webpack serve

npm install --save-dev webpack-dev-server
