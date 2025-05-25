This chapter show how to create a setup a node js project and start our first expres.js application.

## Step 1 : Setup new nodejs project
Setup a node.js project and creates a project metadata file (package.json)

**command `npm init -y`**
This command will set up a new Node.js project in our project directory and create a package.json file, which will represent our project metadata file.

## Step 2 : Configure package.json with start script
Open and configure package.json file based on our project requirement.

```
{
  "name": "express_project_name",
  "version": "1.0.0",
  "description": "This is a sample express app where it shows how an express project can be created.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "<span title="should install nodemo using command : npm i nodemon -g">nodemon<span> <span title="index.js is the main file">index.js<span>"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
```





