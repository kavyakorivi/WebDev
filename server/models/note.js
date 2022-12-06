/*const notes = [
    {
        userid: "1",
        noteid: "11111",
        petid: "olivia1",
        notecontent: "I want to know more about this pet"
    },
    {
        userid: "2",
        noteid: "22222",
        petid: "sophia2",
        notecontent: "Is this a trained pet ?"
        
    },
    {
        userid: "3",
        noteid: "33333",
        petid: "emma3",
        notecontent: "let me know if this is available"
        
    },
    ];
*/
    
    
    

const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    noteid INT NOT NULL AUTO_INCREMENT,
    notecontent VARCHAR(255),
    userid INT NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteid),
    CONSTRAINT noteFK FOREIGN KEY(noteid) references users(userid)
  ); `
  await con.query(sql);
}
createTable();

// grabbing all notes in database
async function getAllnotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  console.log(notes)
}

// Create  Note - Adding to Notes
async function note(note) {
  let cNote = await getNote(note);
  if(cNote.length > 0) throw Error("note already in use");

  const sql = `INSERT INTO notes (notecontent)
    VALUES ("${note.notecontent}");
  `
  await con.query(sql);
  return await note(note);
}

// Read Note -- notecontent reading
async function note(note) { // {userName: "sda", password: "gsdhjsga"}
  let cNote = await getUser(note); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cNote[0]) throw Error("note not found");
  
  return cNote[0];
}

// Update Note function
async function editNote(note) {
  let sql = `UPDATE notes 
    SET notecontent = "${note.notecontent}"
    WHERE noteid = ${note.noteid}
  `;

  await con.query(sql);
  let updatedNote = await getNote(note);
  return updatedNote[0];
}

// Delete Note function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE noteid = ${note.noteid}
  `
  await con.query(sql);
}

// Useful Functions
async function getNote(note) {
  let sql;

  if(note.noteid) {
    sql = `
      SELECT * FROM notes
       WHERE noteid = ${note.noteid}
    `
  } else {
    sql = `
    SELECT * FROM notes
      WHERE notecontent = "${note.notecontent}"
  `;
  }
  return await con.query(sql);      
}



module.exports = { getAllnotes, note, editNote, deleteNote};

