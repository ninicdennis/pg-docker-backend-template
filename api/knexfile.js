require('dotenv').config({
  path: '../.env'
})

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: __dirname + "/knexmigrations"
    },
    seeds: {
      directory: __dirname + "/knexseeders"
    }
  },

}