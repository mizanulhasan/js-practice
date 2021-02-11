// [0,1,1,2,3,5,8,13,21];
function funcFibonacci(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
       //calculate array nth element
       var fibo = funcFibonacci(n-1);
       var nextElement = fibo[n-1] + fibo[n-2];
       fibo.push(nextElement);
       return fibo;
    }
}
var result = funcFibonacci(15);
console.log(result);