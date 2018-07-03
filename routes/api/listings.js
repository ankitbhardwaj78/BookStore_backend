const route = require('express').Router()
const Listing = require('../../db').Listing
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

route.get('/', (req, res) => {   
    console.log(req.session.user); 
    Listing.findAll()
        .then((listings) => {
            res.status(200).send(listings)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive listings"
            })
        })
})

route.post('/add', upload.single('bookimage'), (req, res) => {
    console.log("in add");
    if (req.session.user) {
        Listing.create({
            bookname: req.body.bookname,
            authorname: req.body.authorname,
            image: req.file.path,
            condition: req.body.condition,
            price: req.body.price,
            userId: parseInt(req.session.user.id)
        }).then((listing) => {
            res.status(201).send(listing)
        }).catch((err) => {
            console.log(err);

            res.status(501).send({

                error: err
            })
        })

    }
    else{
        res.status(501).send({

            error: "not logged in"
        })
    }
})


exports = module.exports = route