const express = require('express');
const pet = require('../models/pet');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const pets = await pet.getAllpets();
      res.send(pets);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/login', async (req, res) => {
    try {
      let pet = await pet.login(req.body);
      res.send({...pet, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  
module.exports = router;