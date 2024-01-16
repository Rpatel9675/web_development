// console.log("Working");
// function savetodata(data, resolve, reject){
//     let x= Math.floor(Math.random()*10+1);
//     if(x>4) {
//         resolve();
//     }
//     else{
//         reject();
//     }


// }
// savetodata("Rocky", ()=>{
//     console.log("Data updated successfully");
//     savetodata("Rohit", ()=>{
//         console.log("Data updated successfully");
//     }, ()=>{
//         console.log("Poor connection 2");
//     });
// }, ()=>{
//     console.log("poor Internet connection");
// });
//.....................................................
//use of promise
// function savetodata(data){
//     return new Promise((resolve, reject)=>{
//         let x= Math.floor(Math.random()*10+1);
//         if(x>4) {
//             resolve("Data was saved");
//         }
//         else{
//             reject("Failured: weak connection");
//         }
//     });
// }
// savetodata("rocky");
//...........................................................
//use of then and catch
// function savetodata(data){
//     return new Promise((resolve, reject)=>{
//         let x= Math.floor(Math.random()*10+1);
//         if(x>4) {
//             resolve("Data was saved");
//         }
//         else{
//             reject("Failured: weak connection");
//         }
//     });
// }
// let request=savetodata("rocky");
// request.then(()=>{
//     console.log("data updated successfully");
// })
// .catch(()=>{
//     console.log("failured");
// });
//....................................................
// function savetodata(data){
//     return new Promise((resolve, reject)=>{
//         let x= Math.floor(Math.random()*10+1);
//         if(x>4) {
//             resolve();
//         }
//         else{
//             reject();
//         }
//     });
// }
// savetodata("rocky")
// .then(()=>{
//     console.log("data updated successfully");
//     savetodata("rohit").then(()=>{
//         console.log("data 2 updated");
//         savetodata("Rinki").then(()=>{
//             console.log("data 3 updated");
//         })
//     })
// })
// .catch(()=>{
//     console.log("failured");
// });
//................Or...................
function savetodata(data){
    return new Promise((resolve, reject)=>{
        let x = Math.floor(Math.random()*10+1);
        if (x > 4) {
            resolve();
        } else {
            reject();
        }
    });
}

savetodata("rocky")
    .then(() => {
        console.log("data updated successfully");
        return savetodata("rohit");
    })
    .then(() => {
        console.log("data 2 updated");
    })
    .catch(() => {
        console.log("failure");
    });
