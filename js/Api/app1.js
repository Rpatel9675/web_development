console.log("working");
// let url="https://catfact.ninja/fact";
// async function rocky(){
//     try{
//         let res= await fetch(url);
//         let data= await res.json();
//         console.log(data.fact);
//     }
//     catch (e){
//         console.log("Error: 404", e)
//     }
    
//     //return res.json();
// }
// rocky();
// //fetch(url)
//......................... use of axios.........................
let url="https://catfact.ninja/fact";
let p= document.querySelector("p");
let button=document.querySelector("button");
button.addEventListener("click", async()=>{
    let fact= await rocky();
    p.innerText=fact;
    
});
async function rocky(){
    try{
        let data= await axios.get (url);
        return data.data.fact;
        
    }catch(e){
        return "No result found";
    }
}

