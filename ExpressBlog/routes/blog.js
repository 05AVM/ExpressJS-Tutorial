const express = require('express');
const router = express.Router();
const path = require('path');//Require the path module
const blogs = require('../data/blogs.js'); // Import the blogs data

router.get('/', (req, res) => {
   // res.sendFile(path.join(__dirname,'..', 'templates', 'index.html'));//Provide the correct path to the HTML file

   res.render('../home')
});

router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'templates', 'blogHome.html'));//Provide the correct path to the HTML file
});

router.get('/blogpost/:slug', (req, res) => {
    console.log(req.params.slug)
    myBlog=blogs.filter((item) => {
        return item.slug==req.params.slug
    })
    console.log(myBlog)
    //aisa element return kare is function se jo is function ke liye true ho..

    res.sendFile(path.join(__dirname, '..', 'templates', 'blogPage.html'));
});


module.exports = router;
