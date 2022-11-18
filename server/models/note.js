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
    
    
    let getNotes = () => notes;
    
    module.exports = { getNotes };