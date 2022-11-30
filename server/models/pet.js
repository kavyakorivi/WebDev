const pets = [
    {
        petid: "pet123",
        userid:"rapunzel1",
        pettype: "dog",
        petage: "3 years",
    },
    {
        petid: "pet456",
        userid:"ariel2",
        pettype: "dog",
        petage: "3 months",
    },
    {
        petid: "pet789",
        userid:"cindrella3",
        pettype: "dog",
        petage: "4 years",      
    },
    ];
    
    
    

    function getAllpets(){
        return pets.map(pet=>pet.petid);
    }
    
    function login(pet) { 
        let cPet = pets.filter( p => p.petid === pet.petid);
        
        if(!cPet[0]) throw Error("note not found");
        if(cPet[0].psw !== user.psw) throw Error("Password incorrect");
      
        return cPet[0];
      }
    
    module.exports = { getAllpets,login} ;
