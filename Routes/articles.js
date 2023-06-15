const express = require('express');
const path=require('path')
const router = express.Router();


router.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, 'contact.html'));
  });
  router.get('/signUp', function(req, res) {
    res.sendFile(path.join(__dirname, 'Adir.html'))})
  router.post('/search', function(req, res) {
    const searchText = req.body.searchText;
  
    // Perform MongoDB query to find matching products
    Product.find({ name: { $regex: searchText, $options: 'i' } }, function(err, products) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.json(products);
      }
    });
  });

module.exports = router;