//Task 1
let a = enterIntNumber();
let b = enterIntNumber();
let res;
if (a > b) {
    res = a + b / 2 * 4
}
else if (a < b) {
    res = a - b + 2 / b * 4
}
else {
    res = 400;
}

alert(`Res  = ${res}`);
//Task 2   в работе )

//Task 3
let x= prompt('Видите день недели  !', '');

switch (x) {
    case "понедельник":
        alert("понедельник");
        break;
    case "вторник":
        alert("вторник");
        break;
    case "среда":
        alert("среда");
        break;
    case "четверг":
        alert("четверг");
        break;
    case "пятница":
        alert("пятница");
        break;
    case "суббота":
        alert("суббота");
        break;
    case "воскресенье":
        alert("воскресенье");
        break;
    default:
        alert(" Такого дня недели не существует!)
}
//Task 4 and 5 
const NumberOne = +prompt('Введите первое число');
const NumberTwo = +prompt('Введите второе число'); 

if (NumberOne > NumberTwo) { 
    alert(NumberOne)
}
else if (NumberTwo > NumberOne)  {
    alert(NumberTwo)  
}
else { 
    alert ('=')
}
//Task 6

const x = +prompt('Видите номер квартиры','');
if (x <= 20 && x > 0 ){
    alert ('Это первый подьезд  ')
}else if (x >= 21 && x <= 48 ) {
    alert ('Это второй подьезд  ')
} else if (x >= 49 && x <= 90) {
    alert ('Это третий  подьезд  ')
}
else  {
    alert ('обратитесь в техподдержку ')

}
//Task 8
let year = +prompt('Видите год рождения','');
let age = 2019 - year;
if ( age >= 16) {
    alert('Добро пожалывать');
} else {
    alert('«вход воспрещен».');
}
//Task  9 
let experience = +prompt('вводит стаж работы:');
if (experience >= 0 && experience < 3) {
    alert('надбавка  0% ');
} else if (experience >= 3 && experience < 10) {
    alert('надбавка 10%');
} else if (experience >= 10 && experience < 20) {
    alert('надбавка  20%');
} else if (experience >= 20) {
    alert('надбавка 25%');
}else {
    alert('обратитесь в техподдержку');
}
//  все что успел  (((