let btn=document.getElementById("rocky");

btn.addEventListener('click', function(){
    console.log("Hey I am working")
    let h3=document.querySelector('h3');
    let colourreturn =getRandomcolour();
    h3.innerText=colourreturn;
    let div=document.querySelector('div');
    div.style.backgroundColor=colourreturn;
});
function getRandomcolour(){
    let x=Math.floor(Math.random()*255);
    let y=Math.floor(Math.random()*255);
    let z=Math.floor(Math.random()*255);
    let colour= `rgb(${x}, ${y}, ${z})`;
    return colour;
}