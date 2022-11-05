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
    let notes = document.getElementById("text-area").value;
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





















