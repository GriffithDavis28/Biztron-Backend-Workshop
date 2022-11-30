const express = require('express');
const Service = require('../schemas/services');
const { result } = require('lodash');
const router = express.Router();

router.use(express.json());

router.get("/", (req,res) => {

     Service.find()
        .then((result) => {
            res.status(200).send(result);
            console.log(result);
            console.log("Displaying services provided....");
        })
        .catch((err) => {
            res.status(404).send(err);
            console.log("Error has occured");
        })
});


router.post('/', (req, res) => {
  
    const service = new Service(req.body)
 
    service.save()
        .then((result) => {
         res.status(200).send(result);
         console.log(result);
         console.log("Service has been added successfully....");
        })
        .catch((err) => {
         console.log(err);
        })
     
});

router.get("/:id", (req,res) => {

    const id = req.params.id;

    Service.findById(id)
        .then((result) => {
            res.status(200).send(result);
            console.log(result);
            console.log("Specfiv Service has been selected....");
        })
        .catch((err) => {
            res.status(404).send();
            console.log("Error has occured...");
        })
});

module.exports = router;