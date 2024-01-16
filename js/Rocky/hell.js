
//console.log("working");
// let h1=document.querySelector("h1");
// function changecolor(color){
//     setTimeout(()=>{
//         h1.style.color=color;
//     }, 1000);
// }
// setTimeout(()=>{
//     h1.style.color="red";
// }, 1000);
// setTimeout(()=>{
//     h1.style.color="blue"
// }, 2000);
// setTimeout(()=>{
//     h1.style.color="orange";
// },3000);
// hell
let h1=document.querySelector("h1");
function changecolor(color, delay, nextcolor){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolor) nextcolor();

    }, delay);
}
changecolor("red", 1000, ()=>{
    changecolor("blue", 1000, ()=>{
        changecolor("pink", 1000);
    });
});
//...........................................
//promise
 