const express = require('express');
const User = require('../models/user');
const router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', async(req, res) => {
  const user = User({
     name: req.body.name,
     password: req.body.password
  })
  try {
    const u1 = await user.save();
    res.json(u1);
  } catch (error) {
    res.send(error);
  }
})
module.exports = router;
