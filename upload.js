const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

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

app.get("/upload", (req,res) => {
    res.sendFile('Images', { root: __dirname});
    console.log("Log is being made but cannot GET is the response in POSTMAN");
});

app.post("/upload", upload.single('image') , (req,res) => {
    res.send("Uploaded successfully..");
});

app.listen(3001);
console.log("Listening...");