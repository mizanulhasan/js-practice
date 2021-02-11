function funcfactorial(n){
    var factorial = 1;
    for (var i =1; i <= n; i++){
        factorial = factorial * i;
        
    }
    return factorial;
}
var result = funcfactorial(0);
console.log(result);