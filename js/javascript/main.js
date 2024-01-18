let x=[1,2,3,4,5,2,3,2];
for(i=0;i<x.length;i++){
    if(x[i]===2){
        x.splice(i,1);
    }
}
console.log(x);