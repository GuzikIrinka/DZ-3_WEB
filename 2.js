const yourname = prompt("Введите ваше имя: ");
sayName(yourname);

// function sayName(yourname) {              //другая запись
//     alert(`Приветствую, ${yourname}`);
// }

function sayName(yourname) {          //еще пример записи
    alert('Приветствую, ' + yourname +'');
}