import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(username, psw, email) {
    this.username = username;
    this.psw = psw;
    this.email = email;
  }

  getUsername() {
    return this.username;
  }
}

// login functionality
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
    window.location.href = "note.html";
  })
  .catch((err) => {
   let p = document.querySelector('.error');
   p.innerHTML - err.message;
  }) 
}
 
// register functionality
let regForm = document.getElementById("register-page");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let psw = document.getElementById("psw").value;
  let firstname = document.getElementById("firstname").value;
  let lastname= document.getElementById("lastname").value;
  let email= document.getElementById("email").value;
  let user = new User(username, psw, firstname, lastname, email);

 
  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "login.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}


