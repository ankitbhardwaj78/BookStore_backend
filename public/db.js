const Sequelize = require('sequelize')
import bcrypt from 'bcrypt-nodejs'

const db = new Sequelize('bookstore', 'bookseller', 'bookpass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})


const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [0, 100],
                msg: 'Number of character should be less than 50'
            }
        }
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Not a valid email'
          },
          isUnique: connection.validateIsUnique(
            'email',
            'Already exists.'
          )
        }
      },
    phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    college: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      instanceMethods: {
        generateHash: function (password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
        },
        validPassword: function (password) {
          return bcrypt.compareSync(password, this.password)
        }
      }
})

const Listing = db.define('listings', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: Sequelize.BLOB('long'),
        allowNull: false
    },
    bookname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
              args: [0, 100],
              msg: 'Number of character should be less than 50'
            }
          }
    },
    authorname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [0, 100],
                msg: 'Number of character should be less than 50'
            }
        }
    },
    condition: {
        type: Sequelize.ENUM,
        values: ['New', 'Almost New', 'Slight damage', 'Worn']
    }
})

Listing.belongsTo(User);

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User, Listing
}