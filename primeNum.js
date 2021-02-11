// var n = 97;

// for(i = 2; i < n; i++){
//     if(n % i == 0){
//         console.log('Not a Prime Number');
//         break;
//     }
//     else{
//         console.log('Prime Number');
//         break;
//     }
// }

function isPrime(n){
    for (i = 2; i < n; i++){
        if(n % i == 0){
            return 'Not a prime number';
        }
    }
    return 'Prime Number';
}
var result = isPrime(1367676781);
console.log(result);