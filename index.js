let son = Math.floor(Math.random() * 100)

if (son % 3 === 0) {
    console.log("fizz");
} else{
    if (son % 5 === 0) {
        console.log("buzz");
    } else{
        console.log(son)
    } 
}
