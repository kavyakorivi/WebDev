const express = require('express');
const {getAllusers, login, register, editUser, deleteUser} = require('../models/user');
//const user = require('../models/user');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const users = await getAllusers();
      res.send(users);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/login', async (req, res) => {
    try {
      let user = await login(req.body);
       //console.log(req);
      res.send({...user, psw: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/register', async (req, res) => {
    try {
      //console.log(req);
      let user = await register(req.body);
      res.send({...user, psw: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .put('/edit', async (req, res) => {
    try {
      let user = await editUser(req.body);
      res.send({...user, psw: undefined});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      deleteUser(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
 module.exports = router;

