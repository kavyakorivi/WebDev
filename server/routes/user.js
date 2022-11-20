const express = require('express');
const user = require('../models/user');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const users = await user.getAllusers();
      res.send(users);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/login', async (req, res) => {
    try {
      let user = await user.login(req.body);
      res.send({...user, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  
module.exports = router;

