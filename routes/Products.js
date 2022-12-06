const Product = require('../schemas/product');
const express = require('express');
const { result }= require('lodash');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const app = express();

router.use(express.json());

router.get('/', (req,res) => {

    Product.find()
        .then((result) => {
          res.send(result);
          console.log(result);
          console.log("Getting all products.....");
        })
        .catch((err) => {
          console.log("Error page not found...");
        })
  
});
  


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

router.post('/',  (req, res) => {
     const product = new Product(req.body)
  
     product.save()
         .then((result) => {
          res.status(200).send(result);
          console.log(result);
          console.log("Product has been added successfully....");
         })
         .catch((err) => {
          console.log(err);
         })
      
});
  
  
// router.get("/", (req,res) => {
  
//     Product.findById("63844ea07cef172b95c14aaa")
//         .then((result) => {
//           res.send(result);
//           console.log(result,"Featured Product being displayed....");
//         })
//         .catch((err) => {
//           console.log("Error!!!....");
//         })
  
// });
  
router.get("/:id", (req,res) => {
    
    const id = req.params.id
    
    Product.findById(id)
        .then((result) => {
          res.send(result);
          console.log(result);
          console.log("Selected Product is being displayed....");
        })
        .catch((err) => {
          console.log("Error!!!....");
        })
});

module.exports = router