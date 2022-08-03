// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


let arr1 = [1, 2 ,3 ,4 ,5 ];
console.log(arr1)

let  arr2 = ['gergeghrsfh','geger','egerge','fewfwef','ada',];
console.log(arr2)

let arr3 = ['afhq',21, false , true, 456785];
console.log(arr3)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = [];
arr4[0] = 15;
arr4[1] = 45;
arr4[2] = '+-=';
arr4[3] = true;
arr4[4] = false;
arr4[5] = 'okten';
console.log(arr4)


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let numbers = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;

while ( i < numbers.length ){
    console.log(numbers[i]);
    i++;
}
console.log('-------------------------')

for ( i = 0; i < numbers.length; i++) {
    console.log(numbers[i])

}
console.log('-------------------------')

i = 0;
while (i < numbers.length){
    if (i%2 !== 0){
        console.log(numbers[i]);

    }
    i++
}

console.log('-------------------------')

i = 0;
while (i < numbers.length){
    if (i%2 === 0){
        console.log(numbers[i]);

    }
    i++
}

console.log('-------------------------')

for (i = 0; i < numbers.length; i++){
    if (i%2 !== 0){
        console.log(numbers[i])
    }

}

console.log('-------------------------')

for (i = 0; i < numbers.length; i++){
    if (i%2 === 0){
        console.log(numbers[i])
    }

}
console.log('-------------------------')

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr5 = [12,344,56,321,6565,6565,65,5,6565,15]

for (const arr5Key of arr5) {
    console.log(arr5Key)

}
console.log('-------------------------')
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr6 = ['gdgd','drgh','sef','lsdkfjoisdj','sfoisdio','gdf','rdgdf','rgd','nuyf','sdgoi',]
for (const arr6Key of arr6) {
    console.log(arr6Key)

}
console.log('-------------------------')
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr7 = [123, true, false, 'hello', 'goodbye', 156, true, true,false, -10]
for (const arr7Key of arr7) {
    console.log(arr7Key)
}
console.log('-------------------------')
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr8 = [123, true, false, 'hello', 'goodbye', 156, true, true,false, -10]
for (const arr8Key of arr8) {
    if (typeof arr8Key === "boolean"){
        console.log(arr8Key)
    }
}
console.log('-------------------------')


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr9 = [123, true, false, 'hello', 'goodbye', 156, true, true,false, -10]
for (const arr9Key of arr9) {
    if (typeof arr9Key === "number"){
        console.log(arr9Key)
    }
}
console.log('-------------------------')

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr10 = [123, true, false, 'hello', 'goodbye', 156, true, true,false, -10]
for (const arr10Key of arr10) {
    if (typeof arr10Key === "string"){
        console.log(arr10Key)
    }
}
console.log('-------------------------')
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr11 =[];
arr11[0] = 1231561651;
arr11[1] = true;
arr11[2] = false;
arr11[3] = 'babay';
arr11[4] = 'goofsdfs    dbye';
arr11[5] = 1560;
arr11[6] = true;
arr11[7] = true;
arr11[8] = false;
arr11[9] = -10;


for (i = 0; i < arr11.length; i++){
        console.log(arr11[i])
    }



console.log('-------------------------')

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++){
    console.log(i)
    document.write(`${i}<br>`)
}
document.write(`----------------------------------------------------------<br>`)
console.log('-------------------------')
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++){
    console.log(i)
    document.write(`${i}<br>`)
}

document.write(`----------------------------------------------------------<br>`)
console.log('-------------------------')

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write


for (let i = 0; i < 100; i+=2){
    console.log(i)
    document.write(`${i}<br>`)
}

document.write(`----------------------------------------------------------<br>`)
console.log('-------------------------')


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


for (let i = 0; i < 100; i++){
    if (i % 2 === 0){
    console.log(i)
    document.write(`${i}<br>`)
    }
}

document.write(`----------------------------------------------------------<br>`)
console.log('-------------------------')



// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


for (let i = 0; i < 100; i++){
    if (i % 2 !== 0){
        console.log(i)
        document.write(`${i}<br>`)
    }
}

document.write(`----------------------------------------------------------<br>`)
console.log('-------------------------')


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

let books = [
    {
        title: 'Dune',
        pageCount: 755,
        genre: 'Science-Fiction',
        author: [
            {name: 'Frank Herbert', age: 66}
        ]
    },
    {
        title: 'Toreadors from Vasyukivka',
        pageCount: 544,
        genre: ['Adventures','For Children'],
        author: [
            {name: 'Vsevolod Nestayko', age: 84}
        ]
    },
    {
        title: 'Lord of the Rings',
        pageCount: 5000,
        genre: 'Fantasy',
        author: [
            {name: 'John R. R. Tolkien', age: 81}
        ]
    }
]

console.log(Math.max(books[0].pageCount, books[1].pageCount, books[2].pageCount))







