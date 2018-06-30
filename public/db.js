const Sequelize = require('sequelize')

const db = new Sequelize('bookstore', 'bookseller', 'bookpass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})


db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
  
}