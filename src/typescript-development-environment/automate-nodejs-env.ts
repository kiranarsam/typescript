/**
 * How to automate the development workflow for using TypeScript in a Node.js project.
 *
 * you have the 'node.js' and 'tsc' module installed on your system.
 *
 * Configure the typescript compiler.
 *  TO create the 'tsconfig.json' file run the below command.
 *
 *      tsc --init
 *
 * Output:
 *  Created a new tsconfig.json with:

  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


  You can learn more at https://aka.ms/tsconfig


 * Open tsconfig.json file, do below steps
  1. rootdir – specifies the root directory of the TypeScript input files.
  2. outdir -stores the JavaScript output files.

*
*/

console.log('Automated TypeScript in NodeJs');

/**
 * 'nodemon' module allows you to automatically restart the application when you change the
 * JavaScript source code.
 *
 * The concurrently module runs multiple commands concurrently.
 * First, execute the npm init command from the root directory of the project:
 *
 *  npm init --yes
 *
 * Next, install the nodemon and concurrently module:
 *
 *  npm install --g nodemon concurrently
 *
 * Note that the -g flag will instruct npm to install these two modules globally.
 * This allows you to use them in other projects.
 *
 * Then, open the package.json file, and you’ll something like this in the scripts option
 * After that, change the scripts option to the following:
 * ...
 * "scripts": {
 *     "start:build": "tsc -w",
 *     "start:run": "nodemon build/app.js",
 *     "start": "concurrently npm:start:*"
 * },
 * ...
 *
 * This "start:build": "tsc -w" will watch for changes in the ./src directory and
 * compile them automatically.
 *
 * This "start:run": "nodemon build/app.js" will automatically run the app.js in
 *  the ./build directory whenever the new file is generated.
 *
 * This "start": "concurrently npm:start:*" runs all the commands that start with
 *  npm:start:*, which executes both start:build and start:run commands above.
 *
 * Since the app.js will be the entry point for the Node.js program,
 * you also need to change the following option in the package.json file to app.js
 *
 * Default launch:
 *  "main": "app.js"
 *
 * Finally, execute the following command:
 *
 * npm start
 */