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
      res.send({...user, psw: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/register', async (req, res) => {
    try {
      let user = await user.register(req.body);
      res.send({...user, psw: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .put('/edit', async (req, res) => {
    try {
      let user = await user.editUser(req.body);
      res.send({...user, psw: undefined});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      User.deleteUser(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  


  module.exports = router;

