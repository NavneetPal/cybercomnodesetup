# Nodejs Setup with sequelize as an orm model

## Version 1.0.0

## Usage

```bash
$ npm install
```

```bash
$ npm start
# Or run with Nodemon
$ npm run dev


# Visit http://localhost:5000
```

Create a `.env` file

```
NODE_ENV = Specifify wheteher working in development/production
PORT = Specify the PORT NO here 
SECRET = ANY string comes here 
```

The folder structure of the setup will looks like these

* api
* config
* core
* cron
* db
* functions
* Middleware
* uploads
* .env
* .gitignore
* .sequelizerc
* app.js
* package.json

Now lets talk about each folder and its functionality

### api folder
 The api folder can contain many folder for different apis and each folder will contain `controller`folder,`middleware` folder,`services` folder and `routes.json` file. The `controller` folder will contain controller file in which controller function are there.Same goes for `middleware` and `services` folder.The `routes.json` file contains the `endpoint` information.


### config folder
 The config folder contains `database.json` and `config.json` file. The `database.json` file contains the information about the database and `config.json` files contains the information for the configuration of morgan and logging.

### core folder
The core folder contains many files such as
    
* connection.js
* cron.js
* ExpressError.js
* function.js
* migration.js
* models.js
* multer.js
* routes.js
* services.js

In `connection.js` we create a sequelize object using `config/database.json` and handle the logging of the sequelize cmd by using the variable specified in `config/config.json` and store the sequelize object in our global variable called `setup` for futher use in the program.

In `cron.js` file we are creating an array of cron from the folder `cron` and then requiring it in the `app.js` so that we can run all the cron specified in the `cron folder` files.

In `ExpressError.js` we are creating an error class ao that we can throw an error by using that class and add statusCode and message to it.

In `function.js` we are adding all the functions specified in the function folder with the help of `setup` global variable.

In `migration.js` file we are creating an `umzug` object and requiring it in the `app.js` to check whether migration is pending or not.

In `models.js` file we are getting all the models available in the `db` folder and then creating a object of all the models and then adding the models object to the `setup` global variable so that we can easily access it using `setup.models.user`.

In `multer.js` we are creating an object of fileUpload so that we can use it in the controller files functions.

In `routes.js` we are taking all the `routes.json` files of every folder of the api and then constructing the  routes array of every `endpoint` and then exporting it and we are requiring it in `app.js` and creating a routes for every `endpoint`

In `services.js` we are creaing a service object so that we can easily access the service file of every pi using `setup` global variable.


### cron folder
The folder conatins cron files.


 ### db folder
 The `db` folder contains three folder `migrations`,`models` and `seeders`.The `migration` folder contains the migration file that talk to our mtysql database.The `models` folder contains model file.

 ### function folder
 The function folder can contains many folder and file inside it .

 ### Middleware folder
 The middleware folder contains the file that contains global middlewares.

 ### uploads folder
 The folder will contains the uploaded files of the user.

 ### .sequelizerc
 The sequelizerc file esatblishes the connection between folder and database.json file.

 ## app.js
 The core logic part of the application comes in `app.js` file.


 ***

 ## cli command for the setup

 >For working fast in this setup we have customclicmd that you can visit on [CustomCmd](https://github.com/NavneetPal/customclicommand)

 The above setup provides you with the basics command like:
 framework init : To setup the project
 framework create-module : To  create a new api module in api folder along with controller,middleware,services and routes.json file.
 framework create-api : to create a new `endpoint`
 