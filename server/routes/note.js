const express = require('express');
const user = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await user.getAllnotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/getnote', async (req, res) => {
    try {
      console.log(req.body)
      let note = await Note.getNote(req.body);
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  

  .put('/edit', async (req, res) => {
    try {
      let note = await Note.editNote(req.body);
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      Note.deleteNote(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .post('/create', async (req, res) => {
    try {
      console.log(req.body)
      let note = await Note.create(req.body);
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/read', async (req, res) => {
    try {
      let note = await Note.read(req.body);
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  


  module.exports = router;
