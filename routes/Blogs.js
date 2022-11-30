const express = require('express');
const Blog = require('../schemas/blogs');
const { result } = require('lodash');
const router = express.Router();
const app=express();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(express.static('public'));

app.set('view engine', 'ejs');


router.post('/', (req, res) => {

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
      })
      .catch((err) => {
        console.log(err);
      });

      console.log("Getting all blogs from database..");
})

router.get('/:id', (req,res) => {

    Blog.findById("63806d0976ae1220465b7af3")
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      })

      console.log("Getting the specific blog from the database...");

});


module.exports = router