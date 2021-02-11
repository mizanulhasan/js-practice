function funcFibonacci(n){
    if(n == 0){
        return 0;
    }
    if( n == 1){
        return 1;
    }
    else{
        return funcFibonacci(n-1) + funcFibonacci(n - 2);
    }
}
var result = funcFibonacci(10);
console.log(result);