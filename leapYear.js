// const year = 3996;
// const remainder = year % 4;
// if (remainder == 0){
//     console.log('Your year is leap Year');
// }else{
//     console.log('Is not a leapyaar');
// }

function isLeapYear(year){
    const remainder = year;
    if ((remainder % 4 ==  0) && (remainder % 100 !== 0) || (remainder % 400 ==0)){
        return true;
    }else{
        return false;
    }

}

const check2000 = isLeapYear(1700);
console.log(check2000);