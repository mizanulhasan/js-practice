// var student = {id: 121, phone: 1745, name:"Abir"};
// var student1 = {id: 131, phone: 457, name:"mahi"};

// var phonePropName = "phone";
// var phoneNo1 = student.phone;
// var phoneNo2 = student["phone"];
// var phoneNo3 = student[phonePropName];

// // console.log(phoneNo1);
// // console.log(phoneNo2);
// // console.log(phoneNo3);
// // console.log(phonePropName);

// student1.phone = 547854;
// student1["phone"] = 666666;
// console.log(student1);
// student1[phonePropName] = 7777;
// console.log(student1);

// student1.cinema = "Ogni 2";
// console.log(student1);

// student1["cinema"] = "Smart Girl";
// console.log(student1);


// var arr= [1,2,3,4,5];
// var rra = arr.indexOf(0);
// console.log(rra);

//student details

//learning constructor

// function Student(name, age, cgpa, lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
//     this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);
//     }
// }

// var student1 = new Student("Marufa Mobashir Anne",27,3.92,["Bengali", "Hindi", "English"]);

// var student2 = new Student("Marufa Mobashir",26,3.33,["Bengali", "Hindi"]);

// var student3 = new Student("Marufa",25,2.92,["Bengali", "English"]);

// student1.display();
// student2.display();
// student3.display();

function Friend(name,work,interest,bike,job,salary){
    this.name = name;
    this.work = work;
    this.interest = interest;
    this.bike = bike;
    this.job = job;
    this.salary = salary;
    this.displayFunc = function(){
        console.log('Name: ',this.name);
        console.log('Work: ',this.work);
        console.log('Interest: ',this.interest);
        console.log('Bike: ',this.bike);
        console.log('Job: ',this.job);
        console.log('Salary: ',this.salary);
    }
}

var friend1 = new Friend('Asad','Student','Hujur',false,'No',20000);
var friend2 = new Friend('Dhol', 'Jobless', 'Voboghure', true, 'No', 10000);
var friend3 = new Friend('Duyti', 'Job Holder', 'Unsocial', false, true, 30000);
// friend1.displayFunc();
// console.log('========================');
// friend2.displayFunc();
// console.log('==============================');
// friend3.displayFunc();

var check = Friend.bike;
console.log(check);