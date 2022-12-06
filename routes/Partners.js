const express = require('express');
const Partner = require('../schemas/partners');
const { result } = require('lodash');
const router = express.Router();
const app = express();

router.use(express.json());

router.get("/", (req,res) => {

    Partner.find()
        .then((result) => {
            res.status(200).send(result);
            console.log(result);
            console.log("Displaying Partners we are associated with....");
        })
        .catch((err) => {
            res.status(404).send(err);
            console.log("Error has occured");
        })
});


router.post('/', (req, res) => {
  
    const partner = new Partner(req.body)
 
    partner.save()
        .then((result) => {
         res.status(200).send(result);
         console.log(result);
         console.log("Partner has been added successfully....");
        })
        .catch((err) => {
         console.log(err);
        })
     
});

router.get("/:id", (req,res) => {

    const id = req.params.id;

    Partner.findById(id)
        .then((result) => {
            res.status(200).send(result);
            console.log(result);
            console.log("Specific Partner has been selected....");
        })
        .catch((err) => {
            res.status(404).send();
            console.log("Error has occured...");
        })
});

module.exports = router;