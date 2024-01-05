let btn= document.querySelector('button');
let tab=document.getElementById('rocky')

console.log(tab);

let input=document.querySelector('input');
btn.addEventListener('click', function(){
    let newtr=document.createElement('tr');
    let newth1=document.createElement('th');
    let newth2=document.createElement('th');
    let del= document.createElement('button');
    del.innerText="Delete";
    newtr.classList.add("delete");

    
    newth1.innerText=input.value;
    newth2.appendChild(del);
    newtr.appendChild(newth1);
    newtr.appendChild(newth2);
    tab.appendChild(newtr);
    console.dir(newtr.innerText);
    console.log("working");
    input.value="";
    let check=document.querySelectorAll('tr');
for(x=0;x<check.length;x++) {
    console.log(check[x]);
}
    
});
let rem=document.querySelectorAll('.delete');
for(rm of rem){
    rm.addEventListener('click', function(){
       let parentrm=this;
       parentrm.remove();


    });
       

}
tab.addEventListener('click', function(event){
    if(event.target.nodeName=='BUTTON'){
        let x= event.target.parentElement;
        let y=x.parentElement;
        console.log("-------------------------");

        console.log(y);
        y.remove();
    }
    
    console.log(event.target);
});




// ul.addEventListener('click', function(event){
//     if(event.target.nodeName=='BUTTON'){
//         let x=event.target.parentElement;
//         x.remove();
//     }
//     console.log(event.target);
//     console.dir(event.target.nodeName);
// });
``
// // ul.addEventListener('click', function(event){
// //     if(event.target.nodeName=='button'){
// //         let listitem=event.target.parentElement;
// //         listitem.remove();
// //         console.log(event.target);
// //     }
    
    
// // });