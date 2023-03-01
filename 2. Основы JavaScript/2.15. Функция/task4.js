function pow(x, n) {
    
    let result = x ** n;
    if(n > 1) {
        alert(result);
    } else {
        alert("n должно быть > 1")
    }
    
}
let x = prompt("x?", '');
let n = prompt("n?", ''); 
pow(x, n);