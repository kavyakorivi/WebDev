const pets = [
    {
        petid: "pet123",
        userid:"1",
        pettype: "dog",
        petage: "3 years",
    },
    {
        petid: "pet456",
        userid:"2",
        pettype: "dog",
        petage: "3 months",
    },
    {
        petid: "pet789",
        userid:"3",
        pettype: "dog",
        petage: "4 years",      
    },
    ];
    
    
    

    function getAllpets(){
        return pets.map(pet=>pet.petid);
    }
    
    function login(pet) { 
        let cPet = pets.filter( p => p.petid === pet.petid);
        
        if(!cPet[0]) throw Error("pet not found");
        if(cPet[0].psw !== user.psw) throw Error("Password incorrect");
      
        return cPet[0];
      }
    
    module.exports = { getAllpets,login} ;
