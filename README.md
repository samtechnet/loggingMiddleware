this process documents all steps followed to start this project 

    SETTING UP NPM 
    npm init / npm init -y (this setup your package.json file )


ADDING DEPPENDENCIES :

DevDeppendencies:

1. a.) prettier : npm i --save-dev prettier, 
b.) Add a prettier script to your package.json file:  "prettier": "prettier --config prettierrc 'src/**/*.js' --write"
c.) Create a .prettierrc file for any custom configurations.

{
    "extends": ["prettier:prettier/recommended"],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "no-retun-await": "off", 
      "consistente-retun": "off"
    }
  }
d.) Run npm run prettier to run prettier (or whatever you named your script).

2. a.) install Eslint: npm --save-dev eslint
b.) add eslint to script in package.json file : "lint": "eslint"
    
    INSTALLING AND CONFIGURING TYPESCRIPT
3. a.) install Typescript to your devdependency : npm i typescript --save-dev
b.) add the script to package.json file : "build": "npx tsc"
C.) To install the config file, run : npx tsc --init
d.) adjust the tsconfig.json file accordingly.
Helpful configurations to note:
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "lib": ["ES2018", "DOM"], 
    "outDir": "./build",  // This is where typescript to. Usually a main.js file in build                     
    "strict": true,   // This turns on all the strict typing configuration                     
    "noImplicitAny": true, // forces us to not use the Any type in our code.                
  },
  "exclude": ["node_modules", "tests"] // exclude typechecking for node_modules and tests folder
}

e.) install ts-node: npm i @types/node
f.) you can run the project with : npm run build



 INSTALL EXPRESS
4. a.) install express: npm i express, and also the type definition :npm install --save-dev @types/express

5. a.) install nodemone: npm i --save-dev nodemon
b.) add watch to the package.json file : "watch": "nodemon ./src/index.ts"
c.) start your server with : npm run watch


6.    CONFIGURING GIT
a.) use git init to initialize git 
b.) add .gitignore file and insert : node_modules and other files you don't want to track to git hub
c.) create your git repository 