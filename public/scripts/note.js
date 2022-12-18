import { fetchData } from './main.js'

// note class
class Note {
  constructor(notecontent) {
    this.notecontent= notecontent;
  }

  getNotes() {
    return this.notecontent;
  }
}




let user=getCurrentUser();
let noteForm = document.getElementById("note-form");
if(noteForm) noteForm.addEventListener('submit', note);

function note(e) {
  e.preventDefault();

  let notecontent = document.getElementById("notecontent").value;
   let note = new Note(notecontent);
   note.userid = user.userid;

  fetchData("/notes/create", note, "POST")
  .then((data) => {
    //setCurrentUser(data);
    alert("success!! note added.")
    window.location.href = "note.html";
  })
  .catch((err) => {
    console.log(err);
  }) 
  document.getElementById("note-form").reset();
}




if(user && note) 
    getsnotes();

function getsnotes(){
    let notes =document.getElementById('notecontent');
    fetchData("/notes/getNote",user,"POST")
    .then((data)=>{
     console.log(data);
    for(let i=0;i<data.length;i++){
      notes.value+=data[i].notecontent;
    }
})
}
