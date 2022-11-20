const notes = [
    {
        userid: "rapunzel1",
        noteid: "11111",
        petid: "olivia1",
        notecontent: "I want to know more about this pet"
    },
    {
        userid: "ariel2",
        noteid: "22222",
        petid: "sophia2",
        notecontent: "Is this a trained pet ?"
        
    },
    {
        userid: "cinderella3",
        noteid: "33333",
        petid: "emma3",
        notecontent: "let me know if this is available"
        
    },
    ];
    
    
    function getAllnotes(){
        return notes.map(note=>note.notecontent);
    }
    
    function login(note) { 
        let cNote = notes.filter( n => n.notecontent === note.notecontent);
        
        if(!cNote[0]) throw Error("note not found");
        if(cNote[0].password !== user.password) throw Error("Password incorrect");
      
        return cNote[0];
      }
    
    module.exports = { getAllnotes,login} ;