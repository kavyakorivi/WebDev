const users = [
{
    userid: "1",
    firstname: "rapunzel",
    lastname: "one",
    email: "one@gmail.com",
    username:"rapunzel1",
    psw: "psw11"
},
{
    userid: "2",
    firstname: "ariel",
    lastname: "two",
    email: "two@gmail.com",
    username: "ariel2",
    psw: "psw22"
},
{
    userid: "3",
    firstname: "cinderella",
    lastname: "three",
    email: "three@gmail.com",
    username: "cinderella3",
    psw: "psw33"
},
];


function getAllusers(){
    return users.map(user=>user.username);
}

function login(user) { 
    let cUser = users.filter( u => u.username === user.username);
    
    if(!cUser[0]) throw Error("user not found");
    if(cUser[0].psw !== user.psw) throw Error("Password incorrect");
  
    return cUser[0];
  }

module.exports = { getAllusers,login} ;
