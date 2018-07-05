const Sequelize = require('sequelize')
const bcrypt =require('bcrypt-nodejs')

const db = new Sequelize('bookstoredb', 'bookseller', 'bookpass', {
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
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
            validate: {
                len: {
                    args: [6, 128],
                    msg: "Email address must be between 6 and 128 characters in length"
                },
                isEmail: {
                    msg: "Email address must be valid"
                }
            }
      },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: {
                args: [10,10],
                msg: "Number must be valid"
            }
        }
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
        allowNull: false,
        validate: {
            len: {
                args: 6
            }
        }
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
        type: Sequelize.STRING,
        allowNull: false
    },
    bookname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
              args: [0, 100],
              msg: 'Number of character should be less than 100'
            }
          }
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    authorname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [0, 100],
                msg: 'Number of character should be less than 100'
            }
        }
    },
    condition: {
        type: Sequelize.STRING,
        allowNull:false
    }
})

Listing.belongsTo(User);

const Wishlist = db.define('wishlists',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})
Wishlist.belongsTo(User);
Wishlist.belongsTo(Listing);

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User, Listing ,Wishlist
}