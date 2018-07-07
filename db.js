const Sequelize = require('sequelize')
const bcrypt =require('bcrypt-nodejs')

const db = new Sequelize('heroku_b056f6f62e4a083', 'b237aa20fa2ef4', 'dcd3f4f7', {
    host: 'us-cdbr-iron-east-04.cleardb.net',
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
    sellerName:{
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
    },
    image:{
        type: Sequelize.STRING,
        allowNull:false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    bookname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    authorname:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
Wishlist.belongsTo(User);


const Message = db.define('messages',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    receiverName:{
        type: Sequelize.STRING,
        allowNull:false
    },
    senderName:{
        type: Sequelize.STRING,
        allowNull:false
    },
    message:{
        type:Sequelize.STRING,
        allowNull:false
    },
    receiverId:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User, Listing ,Wishlist,Message
}