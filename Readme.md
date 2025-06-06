This chapter show how to create a setup a node js project and start our first expres.js application.

## Step 1 : Setup new nodejs project
_Setup a node.js project and creates a project metadata file (package.json)_

**command `npm init -y`**
This command will set up a new Node.js project in our project directory and create a package.json file, which will represent our project metadata file.

## Step 2 : Configure package.json with start script
_Open and configure package.json file based on our project requirement._

```
// package.json
{
  "name": "express_project_name",
  "version": "1.0.0",
  "description": "A sample express app.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
```
* `"start": "nodemon index.js"` this line will help use to create a program start script, after adding this line, we can start our program using command `npm start`.
* using nodemon in our start script will help us to automatically restarts our Node.js application when file changes are detected.
* Nodemon should be installed using command `npm i nodemon -g`, then only the start script will work
* `"type" : "module"` to use es6 javascript environment or `"type" : "commonjs"` to use nodejs default javascript mode before introducing javascript es6.

## Step 3 : Creating our first web spplication using express.js framework on top of node.js
1. _Install the Express.js library to our project using command `npm i express`_ 

2. _Create a file called **index.js**, this file will be the main file of our express app. Every other modules will run through only this file. (filename should match the start script and "main" inside package.json)_

```
import express from 'express';
const app = express();

// Start the server and listen on port 3000
app.listen(3000, () => {
    // This callback runs once the server is up and running
    console.log("Server running on port 3000");
});
```

* `import express from 'express';` : Imports the Express module (using ES6 modules syntax)
* `const app = express();` : Give all the power of the Express library to the 'app' variable by creating an Express application instance
* `app.listen(3000, ()=>{....})` : Start the server on port 3000 and log a message when it’s running

## Step 4 : Test to see if express application is running.

Open any internet browser (eg: Google chrome, edge, mozilla etc..) and type `http://localhost:3000`

If we can see `Cannot GET /` inside the browser this means express app is succesfully running.


