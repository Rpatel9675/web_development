
    console.log("working");
    
    let h1 = document.querySelector("h1");

    function colorchange(color, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                h1.style.color = color;
                resolve();
            }, delay);
        });
    }

    colorchange("red", 1000)
        .then(() => {
            console.log(1);
            return colorchange("blue", 1000);
        })
        .then(() => {
            console.log(2);
            return colorchange("green", 1000);
        })
        .then(() => {
            console.log(3);
            return colorchange("orange", 1000);
        });
