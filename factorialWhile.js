function funcFactorial(){
    var i = 1;
    var factorial = 1;
    while(i <= 10){
        factorial = factorial * i;
        // console.log(i, factorial);
        i++;
    }
    return factorial;
}
var result = funcFactorial(10);
console.log(result);