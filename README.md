# Eat-Da-Burger

A Node.js and MySQL - based demonstration application intended to run on Heroku.  


## Getting Started

To use, just clone down the repo, install the NPM modules, start the server, and enjoy.

### Prerequisites

Eat-Da-Burger was built and tested with MySQL 5.7.20 and the following nodeJS NPM packages:

| NPM Package     | Version |
| --------------- | ------- |
| express         | 4.16.2  |
| dotenv          | 5.0.1   |
| express-handlebars | 3.0.0  |
| mysql           | 1.18.2  |
| body-parser     | 1.18.2  |
| body-parser     | 1.18.2  |

You will need to install mySQL (preferably V5.7 or later).  You will want to set a password when you install it.


### Installing

1. Clone the repo to your system.

1. Run `npm install`

1. Two files are provided to intialize your mySQL database.  Use schema.sql to create the database and tables.  Use seed.sql to populate the tables with test data.  

1. Create a file named `.env`, add the following to it, replacing the values with your MySQL credentials (no quotes)  This will prevent you from inadvertently loading your credentials into the repo:

```js
# SQL Credentials

SQL_USER=root
SQL_PASSWORD=zyxxyplugh

```

### Starting the Server

From within the root of the project, type: `node server.js`

By default, the sever will start listening on port 3000.  If PORT is present in the environment, it will honor that port number.  This is typical when running within cloud servers like Heroku, Azure, Amazon, and so forth.

If you want the server to listen on a different port, pass the port number when starting the server like so: `PORT=9999 node server.js` 

### Usage

Launch a browser (preferably, Chrome) and direct it to your server and port (by default, `localhost:3000`).

The user is greeted by the home screen:

![Welcome Screen](screenshots/home.png "Welcome Screen")

On the left, you see a bucket-list of your dream-burgers.  On the right, the burgers you have munched.  

You can add to your bucket-list by entering a burger name and pressing the "Add a Burger" button.

When you press the "Eat Me!"" button, the burger gets transfered from right to left.


## Technologies

This service was built to demonstrate use of Model-View-Controller (MVC) architecture.  

It includes a homemade Object Relational Model (ORM).


## Authors

* **Paul Rowe** - *Initial work* - [zrowe](https://github.com/zrowe)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* UC Berkeley Coding BootCamp
* Trilogy
