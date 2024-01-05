let x=document.createElement('p');
let y=document.querySelector('body');
x.innerHTML="Hey, I am Red";
y.append(x);
x.classList.add('red');