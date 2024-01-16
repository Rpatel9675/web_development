// console.log("hello");
//let x= prompt("Enter your name");



let z=document.getElementById("submit");
z.addEventListener('click', function(){
    let input=document.getElementById("input");
    let nameP= document.getElementById("name");
    nameP.innerText=input.value;
    input.value="";

    
});

