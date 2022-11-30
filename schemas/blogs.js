
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const express = require('express');

const BlogSchema = new Schema ({
    img: {
        type: File,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },  
    title: {
        type: String,
        required: true    
    },
    description: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;


//Blog routes


// app.get('/', (req,res) => {

//   req.sendFile("./views/home.html", {root: __dirname});
//   console.log("Home page..");

// });

// app.get('/addBlog', (req,res) => {

//     const blog = new Blog({
//         title: "New Blog 6",
//         snippets: "This is a snipped from the new blog",
//         body: "This is an example for the body of the new blog"
//     })

//     blog.save()
//        .then((result) => {
//         res.send(result);
//        })
//        .catch((err) => {
//         console.log(err);
//        });

//     console.log("Blog added successfully...");
// });

// app.get('/all-blogs', (req,res) => {

//     Blog.find()
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//       console.log("Getting all blogs from database..");
// })

// app.get('/single-Blog', (req,res) => {

//     Blog.findById("63806d0976ae1220465b7af3")
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       })

//       console.log("Getting the specific blog from the database...");

// });