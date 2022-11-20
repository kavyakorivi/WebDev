const register = document.getElementById("register-page");
if(register)register.addEventListener('submit',displayRegister);

function displayRegister(e){
    e.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let userid = document.getElementById("userid").value;
    let password = document.getElementById("psw").value;
    console.log(`Firstname = ${firstname}`);
    console.log(`Lastname= ${lastname}`);
    console.log(`Email = ${email}`);
    console.log(`User Id = ${userid}`);
    console.log(`Password = ${password}`);
    
    
}

const login = document.getElementById("login-page");
if(login)login.addEventListener('submit',displayLogin);

function displayLogin(e){
    e.preventDefault();
    let userid = document.getElementById("userid").value;
    let password = document.getElementById("psw").value;
    console.log(`User Id = ${userid}`);
    console.log(`Password = ${password}`);
    
}


const form = document.getElementById("note-form");
if(form)form.addEventListener('submit',displayNote);

function displayNote(e){
    e.preventDefault();
    let notes = document.getElementById("notecontent").value;
    console.log(`Note = ${notes}`);
    
}


class User{
    constructor (firstname, lastname, email, userid, psw) {
    this.UserFisrtname = firstname;
    this.UserLastname = lastname;
    this.UserEmail = email;
    this.UserId = userid;
    this.UserPassword = psw;
    }
    
    getUserFirstname() {
     return this.UserFirstname;
    }
    getUserLastname() {
     return this.UserLastname;
    }
    getUserEmail() {
     return this.UserEmail;
    }
    getUserId() {
     return this.UserId;
    }
    getUserPasssword() {
     return this.UserPassword;
    }

    setUserFirstname(firstname) {
    this.userFirstname = firstname;
    }
    setUserLastname(lastname) {
    this.userLastname = lastname;
    }
    setUserEmail(email) {
    this.userEmail= email;
    }
    setUserId(userid) {
    this.UserId = userid;
    }
    setUserPassword(psw) {
    this.userPassword = psw;
    }
    
}


class Note{
    constructor ( userid, noteid, petid, notecontent  ) {
    this.NoteUserId = userid;
    this.NoteNoteId = noteid;
    this.NotePetId = petid;
    this.NoteNoteContent = notecontent;
    }
    getNoteUserId() {
        return this.NoteUserId;
    }
    getNoteNoteId() {
        return this.NoteNodeId;
    }
    getNotePetId() {
        return this.NotePetId;
    }
    getNoteNoteContent() {
        return this.NoteNoteContent;
    }
    setNoteUserId(userid) {
        this.NoteUserId = userid;
    }
    setNoteNoteId(noteid) {
        this.NoteNodeId = noteid;
    }
    setNotePetId(petid) {
        this.NotePetId = petid;
    }
    setNoteNoteContent(notecontent) {
        this.NoteNoteContent = notecontent;
    }
}

class Pet{
    constructor ( userid, petid, pettype, petage ) {
    this.PetUserId = userid;
    this.PetPetId = petid;
    this.PetPettype= pettype;
    this.PetPetage = petage;
    }
    getPetUserId () {
        return this.PetUserId ;
    }
    getPetPetId () {
        return this.PetPetId ;
    }
    getPetPettype() {
        return this.PetPettype;
    }
    getPetPetage() {
        return this.PetPetage;
    }
    setPetUserId(userid) {
        this.PetUserId = userid;
    }
    setPetPetId(petid) {
        this.PetPetId = petid;
    }
    setPetPettype(pettype) {
        this.PetPettype = pettype;
    }
    setPetPetage(petage) {
        this.PetPetage = petage;
    }
}

const usersBtn =document.getElementById("users-btn");
usersBtn.addEventListener('click',getUsers);

function getUsers(){
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data1) => 
                console.log(data1))
    .catch((err) => 
                console.log(err))
}


const notesBtn =document.getElementById("notes-btn");
notesBtn.addEventListener('click',getNotes);

function getNotes(){
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data2) => 
                console.log(data2))
    .catch((err) => 
                console.log(err))
}
/*

const petsBtn =document.getElementById("pets-btn");
petsBtn.addEventListener('click',getPets);

function getPets(){
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data3) => 
                console.log(data3))
    .catch((err) => 
                console.log(err))
}
*/