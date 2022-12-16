let getNotes = () => notes;

    module.exports = { getNotes }

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
async function create(note) {
  let sql=`INSERT INTO notes (notecontent,userid) VALUES ("${note.notecontent}","${note.userid}");`;
      
       await con.query(sql);
      return {message:" notes has been added"};
      
}

// Read Note -- notecontent reading
async function read(note){
  let cNote = await getNote(note);
  let sql = `SELECT users.username, notes.notecontent
FROM users,notes 

WHERE users.userid=notes.userid;
`;
  if(!cNote[0]) throw Error("Note not found");
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

  if(note.userid) {
    sql = `
      SELECT * FROM notes
       WHERE userid = ${note.userid}
    `
  } else {
    sql = `
    SELECT * FROM notes
      WHERE noteid = "${note.noteid}"
  `;
  }
  return await con.query(sql);      
}



module.exports = { getAllnotes, read, editNote, deleteNote, getNote, create};

