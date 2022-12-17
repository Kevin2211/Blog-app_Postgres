require('dotenv').config()

module.exports = 
{
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASSWORD,
    "database":  process.env.DBUSER,
    "host": process.env.DBHOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
