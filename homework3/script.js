//Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

console.log('First task')

let o = +prompt('Enter a number');
if (o !== 0) {
    console.log('true')
} else {
    console.log('false')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log('second task')

let time = +prompt('Enter a number from 0 to 59 ');
if (time >= 0 && time <= 15) {
    console.log('first quarter')
} else if (time >= 15 && time <= 30) {
    console.log('second quarter')
} else if (time >= 30 && time <= 45) {
    console.log('third quarter')
} else if (time >= 45 && time <= 59) {
    console.log('fourth quarter')
} else {
    alert('error')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
console.log('third task')

let day = +prompt('Enter a number from 1 to 31')
if (day >= 1 && day <= 10) {
    console.log('first decade')
} else if (day >= 11 && day <= 20) {
    console.log('second decade')
} else if (day >= 21 && day <= 31) {
    console.log('third decade')
} else {
    alert('error')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
console.log('fourth task')

let weekDay = +prompt('Enter a number of the day of the week')
let plan1 = {
    1: 'feed a cat', 2: 'go for a walk', 3: 'complete homework'
}
let plan2 = {
    1: 'work', 2: 'study', 3: 'relax'
}
switch (weekDay) {

    case 1:
        console.log(plan1)
        break;
    case 2:
        console.log(plan2)
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;

    default:
        console.log('error')
}


//     - Користувач вводить або має два числа.
//       Потрібно знайти та вивести максимальне число з тих двох .
//       Також потрібно врахувати коли введені рівні числа.
console.log('fifth task')

let a = +prompt('Enter a number');
let b = +prompt('Enter a number');
let isGreater = ' Is greater'

if (a > b) {
    console.log(a + isGreater)
} else if (a === b) {
    console.log('numbers are equal')
} else {
    console.log(b + isGreater)
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
console.log('sixth task')

let x = prompt('Enter something') || 'default';
console.log(x)
