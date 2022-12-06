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

  .post('/note', async (req, res) => {
    try {
      let note = await note.note(req.body);
      res.send({...note, psw: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  

  .put('/edit', async (req, res) => {
    try {
      let note = await note.editNote(req.body);
      res.send({...note, psw: undefined});
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

  


  module.exports = router;
