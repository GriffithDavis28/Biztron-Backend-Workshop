const express = require('express');
const Brand = require('../schemas/brands');
const { result } = require('lodash');
const multer = require('multer');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'Images', cb)
    },
    filename: (req, file, cb) =>{
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({storage: storage})

router.use(express.json());

router.get("/", (req,res) => {

    Brand.find()
        .then((result) => {
            res.status(200).send(result);
            console.log(result);
            console.log("Displaying Brands we are associated with....");
        })
        .catch((err) => {
            res.status(404).send(err);
            console.log("Error has occured");
        })
});


router.post('/', (req, res) => {
  
    const brand = new Brand(req.body)
 
    brand.save()
        .then((result) => {
         res.status(200).send(result);
         console.log(result);
         console.log("Brand has been added successfully....");
        })
        .catch((err) => {
         console.log(err);
        })
     
});

router.get("/:id", (req,res) => {

    const id = req.params.id;

    Brand.findById(id)
        .then((result) => {
            res.status(200).send(result);
            console.log(result);
            console.log("Specific Brand has been selected....");
        })
        .catch((err) => {
            res.status(404).send();
            console.log("Error has occured...");
        })
});

module.exports = router;