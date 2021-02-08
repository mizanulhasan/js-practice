var student = {id: 121, phone: 1745, name:"Abir"};
var student1 = {id: 131, phone: 457, name:"mahi"};

var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];

// console.log(phoneNo1);
// console.log(phoneNo2);
// console.log(phoneNo3);
// console.log(phonePropName);

student1.phone = 547854;
student1["phone"] = 666666;
console.log(student1);
student1[phonePropName] = 7777;
console.log(student1);

student1.cinema = "Ogni 2";
console.log(student1);

student1["cinema"] = "Smart Girl";
console.log(student1);


var arr= [1,2,3,4,5];
var rra = arr.indexOf(0);
console.log(rra);