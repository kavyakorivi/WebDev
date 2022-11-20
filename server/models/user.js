const users = [
{
    userid: "rapunzel1",
    firstname: "rapunzel",
    lastname: "one",
    email: "one@gmail.com",
    psw: "psw11"
},
{
    userid: "ariel2",
    firstname: "ariel",
    lastname: "two",
    email: "two@gmail.com",
    psw: "psw22"
},
{
    userid: "cinderella3",
    firstname: "cinderella",
    lastname: "three",
    email: "three@gmail.com",
    psw: "psw33"
},
];


function getAllusers(){
    return users.map(user=>user.userid);
}

function login(user) { 
    let cUser = users.filter( u => u.userid === user.userid);
    
    if(!cUser[0]) throw Error("Username not found");
    if(cUser[0].psw !== user.psw) throw Error("Password incorrect");
  
    return cUser[0];
  }

module.exports = { getAllusers,login} ;
