// function doubleIt(num){
//     var result = num * 2;
//     return result;
// }
// var first = doubleIt(5);
// var second = doubleIt(50);
// var total = first + second;
// // console.log(total);

// function add(num1, num2){
//     var result = num1 + num2;
//     return result;
// }
// var sum = add(15, 17);
// console.log(sum);
var marks = [89, 97, 89, 68, 94, 86, 79];

// for (var i = 0; i <marks.length; i++){
//     var element = marks[i];
//     console.log(element);
// }

// function add(num1, num2){
//     var total = num1 + num2;
//     return total;
// }

// var result1 = add(65, 89);
// console.log(result1);
// console.log("Not adding params");
// console.log('Added params');
// var result2 = add(144, 568);
// console.log(result2);


function largestNumber(numbers){
    var larger = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
var output = largestNumber(marks);
console.log('output: ', output);