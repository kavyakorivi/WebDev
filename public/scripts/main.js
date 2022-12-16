export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }


// logout event listener
let logout = document.getElementById("logout-btn");
if(logout) logout.addEventListener('click', removeCurrentUser)

// stateful mechanism for user
// logging in a user
export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// getting current user function
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

// logout function for current user
export function removeCurrentUser() {
  localStorage.removeItem('user');
  window.location.href = "login.html";
}


  /*
  
  // user class
  class User {
    constructor(username, psw, firstname, lastname, email) {
      this.username = username;
      this.psw = psw;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
    }
  
    getusername() {
      return this.username;
    }
    getpsw() {
        return this.psw;
      }
      getfirstname() {
        return this.firstname;
      }
      getlastname() {
        return this.lastname;
      }
      getemail() {
        return this.email;
      }
  }
  
  
   
  
  
  // logout event listener
  let logout = document.getElementById("logout-btn");
  if(logout) logout.addEventListener('click', removeCurrentUser)
  
  // stateful mechanism for user
  // logging in a user
  function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  // getting current user function
  // FIX this next class
  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  
  // logout function for current user
  function removeCurrentUser() {
    localStorage.removeItem('user')
  }
*/

/*
const register = document.getElementById("register-page");
if(register)register.addEventListener('submit',displayRegister);

function displayRegister(e){
    e.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("psw").value;
    console.log(`Firstname = ${firstname}`);
    console.log(`Lastname= ${lastname}`);
    console.log(`Email = ${email}`);
    console.log(`User Name = ${username}`);
    console.log(`Password = ${password}`);
    
    
}

const login = document.getElementById("login-page");
if(login)login.addEventListener('submit',displayLogin);

function displayLogin(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("psw").value;
    console.log(`User Name = ${username}`);
    console.log(`Password = ${password}`);
    
}


const form = document.getElementById("note-form");
if(form)form.addEventListener('submit',displayNote);

function displayNote(e){
    e.preventDefault();
    let notes = document.getElementById("notecontent").value;
    console.log(`Note = ${notes}`);
    
}

*/

/*


class User{
    constructor (firstname, lastname, email, username, psw) {
   
    this.fisrtname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.username = username;
    this.psw = psw;
    }
    
    getfirstname() {
     return this.firstname;
    }
    getlastname() {
     return this.lastname;
    }
    getemail() {
     return this.email;
    }
    getusername() {
     return this.username;
    }
    getpsw() {
     return this.psw;
    }
    
    
    setfirstname(firstname) {
    this.firstname = firstname;
    }
    setlastname(lastname) {
    this.lastname = lastname;
    }
    setemail(email) {
    this.email= email;
    }
    setusername(username) {
    this.username = username;
    }
    setpsw(psw) {
    this.psw = psw;
    }
    
    
}
let loginForm = document.getElementById("login-page");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let psw = document.getElementById("psw").value;
  let user = new User(username, psw);

  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "happytailswebpage.html";
  })
  .catch((err) => {
    console.log(`Error!!! ${err.message}`)
  }) 
}

const usersBtn =document.getElementById("users-btn");
if(usersBtn) usersBtn.addEventListener('click',getUsers);

function getUsers(){
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data1) => 
                console.log(data1))
    .catch((err) => 
                console.log(err))
}


class Note{
    constructor ( userid, noteid, notecontent  ) {
    this.userid = userid;
    this.noteid = noteid;
    this.notecontent = notecontent;
    }
    getuserid() {
        return this.userid;
    }
    getnoteid() {
        return this.noteid;
    }
    getnotecontent() {
        return this.notecontent;
    }
    setuserid(userid) {
        this.userid = userid;
    }
    setnoteid(noteid) {
        this.noteid = noteid;
    }
    setnotecontent(notecontent) {
        this.notecontent = notecontent;
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
    console.log(`Error!!! ${err.message}`)
  }) 
}
const notesBtn =document.getElementById("notes-btn");
if(notesBtn) notesBtn.addEventListener('click',getNotes);

function getNotes(){
    fetch("http://localhost:3000/notes")
    .then((res) => res.json())
    .then((data2) => 
                console.log(data2))
    .catch((err) => 
                console.log(err))
}

*/



/*
class Pet{
    constructor ( userid, petid, pettype, petage ) {
    this.userid = userid;
    this.petid = petid;
    this.pettype= pettype;
    this.petage = petage;
    }
    getuserid () {
        return this.userid ;
    }
    getpetid () {
        return this.petid ;
    }
    getpettype() {
        return this.pettype;
    }
    getpetage() {
        return this.petage;
    }
    setuserid(userid) {
        this.userid = userid;
    }
    setpetid(petid) {
        this.petid = petid;
    }
    setpettype(pettype) {
        this.pettype = pettype;
    }
    setpetage(petage) {
        this.petage = petage;
    }
}
const petsBtn =document.getElementById("pets-btn");
if(petsBtn) petsBtn.addEventListener('click',getPets);

function getPets(){
    fetch("http://localhost:3000/pets")
    .then((res) => res.json())
    .then((data3) => 
                console.log(data3))
    .catch((err) => 
                console.log(err))
}
*/

















