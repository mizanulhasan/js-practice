// var teaLine = ['Kalam', 'Salam', 'Balam', 'Talam','Halam'];
// var part = teaLine.slice(2, 4);
// console.log(part);
// console.log(teaLine);
var nameData = ['A', 'B', 'C', 'D', 'E', 'F'];
var nameDataLength = nameData.length;
var avgGrade = 0;
var gradeDate = prompt('Enter your grade to check letter grade');

function getAvg(nameData, gradeDate){
    for (var i = 0; i < nameData.length; i++){
        alert('Your grades are ' + nameData[i] + ',' + gradeDate[i]);
        if (gradeData[i] >= 90){
            alert('Your grades are ' + nameData[i] + 'A');
        } else if (gradeData[i] >= 80){
            alert('Your grades are ' + nameData[i] + 'B');
        } else if (gradeData[i] >= 70){
            alert('Your grades are ' + nameData[i] + 'C');
        } else if (gradeData[i] >= 60){
            alert('Your grades are ' + nameData[i] + 'D');
        } else if (gradeData[i] >= 50){
            alert('Your grades are ' + nameData[i] + 'F');
        } else{
            alert('your grades are ' + gradeData[i] + 'Zero');
        }

    }
}