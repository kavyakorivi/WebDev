const express = require('express');
const {getAllnotes, read, editNote, deleteNote, getNote, create} = require('../models/note');
//const user = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await getAllnotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/getnote', async (req, res) => {
    try {
      console.log(req.body)
      let note = await getNote(req.body);
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  

  .put('/edit', async (req, res) => {
    try {
      let note = await editNote(req.body);
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      deleteNote(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .post('/create', async (req, res) => {
    try {
      console.log(req.body)
      let note = await create(req.body);
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/read', async (req, res) => {
    try {
      let note = await read(req.body);
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  


  module.exports = router;
