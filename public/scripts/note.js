
// note class
class Note {
  constructor(notecontent) {
    this.notecontent= notecontent;
  }

  getnotecontent() {
    return this.notecontent;
  }
}





let noteForm = document.getElementById("note-form");
if(noteForm) noteForm.addEventListener('submit', note);

function note(e) {
  e.preventDefault();

  let notecontent = document.getElementById("notecontent").value;
   let note = new note(notecontent);

  fetchData("/notes/note", note, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "thankyou.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}