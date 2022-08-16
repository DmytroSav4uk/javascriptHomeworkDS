function partition() {
    console.log('_______________________________')
}


// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


function stringLength(string) {
    console.log(string.length)
}

stringLength('hello world');
stringLength('lorem ipsum');
stringLength('javascript is cool');
partition()
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

function stringUpperCase(string) {
    let upperCase = string.toUpperCase();
    console.log(upperCase)
}

stringUpperCase('hello world');
stringUpperCase('lorem ipsum');
stringUpperCase('javascript is cool');
partition()
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

function stringLowerCase(string) {
    let lowerCase = string.toLowerCase();
    console.log(lowerCase);
}

stringLowerCase('HELLO WORLD');
stringLowerCase('LOREM IPSUM');
stringLowerCase('JAVASCRIPT IS COOL');


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
let clean = str.trim()
console.log(clean)
partition()

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strSplit = 'Ревуть воли як ясла повні';
let strSplitArr = strSplit.split(' ');
console.log(strSplitArr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrNumToStr = arrNum.toString();
console.log(arrNumToStr)
partition()

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let sort =  nums.sort((num1,num2) => num1 - num2);

function sortNums(arr, direction) {

    if (direction === 'ascending') {
        let sort = arr.sort((num1, num2) => num1 - num2);
        console.log(sort)
    }
    if (direction === 'descending') {
        let sort = arr.sort((num1, num2) => num2 - num1);
        console.log(sort)
    }
}

sortNums(nums, 'ascending');
sortNums(nums, 'descending');

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
partition()

function sortArrByMonthDuration(arr) {
    let sort = arr.sort((num1, num2) => num2.monthDuration - num1.monthDuration);
    console.log(sort)
}

sortArrByMonthDuration(coursesAndDurationArray);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

function filter(arr) {
    let res = [];
    for (let a of arr) {
        if (a.monthDuration > 5)
            res.push(a);
    }
    return res;
}

let fArr = filter(coursesAndDurationArray);
console.log(fArr);
partition()


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let cards = [
    {cardSuit: 'clubs', value: 'Ace', color: 'black'},
    {cardSuit: 'clubs', value: 2, color: 'black'},
    {cardSuit: 'clubs', value: 3, color: 'black'},
    {cardSuit: 'clubs', value: 4, color: 'black'},
    {cardSuit: 'clubs', value: 5, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'Jack', color: 'black'},
    {cardSuit: 'clubs', value: 'Queen', color: 'black'},
    {cardSuit: 'clubs', value: 'King', color: 'black'},

    {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
    {cardSuit: 'diamonds', value: 2, color: 'red'},
    {cardSuit: 'diamonds', value: 3, color: 'red'},
    {cardSuit: 'diamonds', value: 4, color: 'red'},
    {cardSuit: 'diamonds', value: 5, color: 'red'},
    {cardSuit: 'diamonds', value: 6, color: 'red'},
    {cardSuit: 'diamonds', value: 7, color: 'red'},
    {cardSuit: 'diamonds', value: 8, color: 'red'},
    {cardSuit: 'diamonds', value: 9, color: 'red'},
    {cardSuit: 'diamonds', value: 10, color: 'red'},
    {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'King', color: 'red'},

    {cardSuit: 'hearts', value: 'Ace', color: 'red'},
    {cardSuit: 'hearts', value: 2, color: 'red'},
    {cardSuit: 'hearts', value: 3, color: 'red'},
    {cardSuit: 'hearts', value: 4, color: 'red'},
    {cardSuit: 'hearts', value: 5, color: 'red'},
    {cardSuit: 'hearts', value: 6, color: 'red'},
    {cardSuit: 'hearts', value: 7, color: 'red'},
    {cardSuit: 'hearts', value: 8, color: 'red'},
    {cardSuit: 'hearts', value: 9, color: 'red'},
    {cardSuit: 'hearts', value: 10, color: 'red'},
    {cardSuit: 'hearts', value: 'Jack', color: 'red'},
    {cardSuit: 'hearts', value: 'Queen', color: 'red'},
    {cardSuit: 'hearts', value: 'King', color: 'red'},
    {value: 'Joker', color: 'red'},

    {cardSuit: 'spades', value: 'Ace', color: 'black'},
    {cardSuit: 'spades', value: 2, color: 'black'},
    {cardSuit: 'spades', value: 3, color: 'black'},
    {cardSuit: 'spades', value: 4, color: 'black'},
    {cardSuit: 'spades', value: 5, color: 'black'},
    {cardSuit: 'spades', value: 6, color: 'black'},
    {cardSuit: 'spades', value: 7, color: 'black'},
    {cardSuit: 'spades', value: 8, color: 'black'},
    {cardSuit: 'spades', value: 9, color: 'black'},
    {cardSuit: 'spades', value: 10, color: 'black'},
    {cardSuit: 'spades', value: 'Jack', color: 'black'},
    {cardSuit: 'spades', value: 'Queen', color: 'black'},
    {cardSuit: 'spades', value: 'King', color: 'black'},
    {value: 'Joker', color: 'black'},

];

// let find =  cards.find(value => value.cardSuit === 'spades' )
// console.log(find)
function fAce(arr) {
    for (let card of arr) {
        if (card.value === 'Ace' && card.color === 'black' && card.cardSuit === 'spades') {
            return card;
        }
    }
}

console.log(fAce(cards))
partition()

function fSix(arr) {
    for (let card of arr) {
        if (card.value === 6) {
            console.log(card)
        }
    }
}

fSix(cards);
partition()

function fRed(arr) {

    for (let card of arr) {
        if (card.color === 'red') {
            console.log(card)
        }
    }
}

fRed(cards)
partition()

function fDiamonds(arr) {
    for (let card of arr) {
        if (card.cardSuit === 'diamonds') {
            console.log(card)
        }
    }
}

fDiamonds(cards)
partition()
partition()

function fNineAndMore(arr) {
    for (let card of arr) {
        if (card.value < 9) {

            } else {
                console.log(card)
           // ???????????????????????
        }
    }
}
fNineAndMore(cards)
partition()

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
partition()
let reduce = cards.reduce(function (accumulator, card) {
    if (card.cardSuit === 'spades') {
        accumulator.spades.push(card)
    }
    if (card.cardSuit === 'diamonds') {
        accumulator.diamonds.push(card)
    }
    if (card.cardSuit === 'hearts') {
        accumulator.hearts.push(card)

    }
    if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card)
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduce)