//console.log("working");
let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data.fact);
    return fetch(url);
})
.then((res)=>{
    // console.log(res);
    return res.json();
})
.then((data2)=>{
    console.log(data2.fact);
})
.catch((err)=>{
    console.log("Error", err)
});