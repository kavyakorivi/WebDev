let numbers= [3, 27,26, 9,10,11,1, 2]
console.log(numbers)
let count=0
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]%3==0)
    {
        count++
        numbers.splice(i,1)
        i--;
    }
}
console.log(numbers)


let form = document.getElementById("noteForm");
form.addEventListener('submit',addNote);

function addNote(e){
    e.preventDefault();
}

<button type="submit" id="submit" class="loginbtn"><a href="happytailswebpage.html" TARGET="_blank">Login</a></button>