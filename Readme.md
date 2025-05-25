This chapter show how to create a setup a node js project and start our first expres.js application.

## Step 1 : Setup new nodejs project
Setup a node.js project and creates a project metadata file (package.json)

**command `npm init -y`**
This command will set up a new Node.js project in our project directory and create a package.json file, which will represent our project metadata file.

## Step 2 : Configure package.json with start script
Open and configure package.json file based on our project requirement.

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

_addwwr_


