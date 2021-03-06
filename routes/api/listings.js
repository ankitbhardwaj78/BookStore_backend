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
    if (req.session.user) {
        Listing.findAll()
            .then((listings) => {
                res.status(200).send(listings)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive listings"
                })
            })
    }
    else {
        res.status(501).send({

            error: "not logged in"
        })
    }
})

route.post('/search', (req, res) => {
    console.log(req.session.user);
    if (req.session.user) {
        Listing.findAll({
            where: {
                $or: [
                    { 'bookname': { like: '%' + req.body.query + '%' } },
                    { 'authorname': { like: '%' + req.body.query + '%' } }
                ]
            }
        })
            .then((listings) => {
                res.status(200).send(listings)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive listings"
                })
            })
    }
    else {
        res.status(501).send({
            error: "not logged in"
        })
    }
})


route.post('/filterByCondition', (req, res) => {
    console.log(req.session.user);
    console.log(req.body.from, req.body.to);

    if (req.session.user) {
        Listing.findAll({
            where: {
                condition:
                {
                    $eq: req.body.condition
                }
            }
        })
            .then((listings) => {
                res.status(200).send(listings)
            })
            .catch((err) => {
                console.log(err);

                res.status(500).send({
                    error: "Could not retrive listings"
                })
            })
    }
    else {
        res.status(501).send({
            error: "not logged in"
        })
    }
})


route.post('/filterByprice', (req, res) => {
    console.log(req.session.user);
    console.log(req.body.from, req.body.to);

    if (req.session.user) {
        if (isNaN(req.body.from) || isNaN(req.body.to) || req.body.from == '' || req.body.to == '') {
            return res.status(501).send({
                error: "Not a valid price range"
            })
        }
        Listing.findAll({
            where: {
                price: {
                    $between: [parseInt(req.body.from), parseInt(req.body.to)]
                }
            }
        })
            .then((listings) => {
                res.status(200).send(listings)
            })
            .catch((err) => {
                console.log(err);

                res.status(500).send({
                    error: "Could not retrive listings"
                })
            })
    }
    else {
        res.status(501).send({
            error: "not logged in"
        })
    }
})


var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'ankitbookstore', 
  api_key: '449478132974621', 
  api_secret: 'TphNWDqq5_bA_HNbKKn7hIGlcJY'
});

route.post('/add', upload.single('bookimage'), (req, res) => {
    console.log("in add");
    if (req.session.user) {
        if (isNaN(req.body.price)) {
            return res.status(501).send({
                error: "Not A valid Price"
            })
        }
        cloudinary.uploader.upload(req.file.path, function(result) {
            // add cloudinary url for the image to the campground object under image property
            Listing.create({
                bookname: req.body.bookname,
                authorname: req.body.authorname,
                image: result.secure_url,
                condition: req.body.condition,
                price: req.body.price,
                sellerName: req.session.user.name,
                userId: parseInt(req.session.user.id)
            }).then((listing) => {
                res.status(201).send(listing)
            }).catch((err) => {
                console.log(err);
    
                res.status(501).send({
    
                    error: err
                })
            })
          });
    }
    else {
        res.status(501).send({

            error: "not logged in"
        })
    }
})


route.get('/:id', (req, res) => {
    console.log("in req");
    
    Listing.findOne({
        where: {
            id: req.params.id
        }
    })
        .then((listing) => {
            res.status(201).send(listing)
        }).catch((err) => {
            console.log(err);
            res.status(501).send({
                error: err
            })
        })

})


exports = module.exports = route