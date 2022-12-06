const express = require('express');
const Blog = require('../schemas/blogs');
const multer = require('multer');
const bodyParser = require('body-parser');
const { result } = require('lodash');
const router = express.Router();
const app=express();

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
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static('public'));



router.post('/', upload.single('image'), (req, res) => {

  const blog = new Blog(req.body)

  blog.save()
      .then((result) => {
       res.status(200).send(result);
       console.log(result);
       console.log("Blog has been added successfully....");
      })
      .catch((err) => {
       console.log(err);
      })
   
});

router.get('/', (req,res) => {

    Blog.find()
      .then((result) => {
        res.send(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

      console.log("Getting all blogs from database..");
})

router.get('/:id', (req,res) => {

  const id= req.params.id

    Blog.findById(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      })

      console.log("Getting the specific blog from the database...");

});


module.exports = router