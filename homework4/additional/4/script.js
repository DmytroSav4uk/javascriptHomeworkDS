//function l(v){console.log(v);}

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
console.log('_____________________________________________')
let arr = [];
for (let i = 1; i < 10000; i++){

    if ( i % 2 === 0  && arr.length < 50) {
        arr.push(i)
    }
}
console.log(arr)


//     b. заповнити його 50 непарними числами за допомоги циклу.
console.log('_____________________________________________')
let arr2 = [];
for (let i = 1; i < 1000; i++){

    if ( i % 2 !== 0 && arr2.length < 50 ) {
        arr2.push(i)
    }
}
console.log(arr2)



//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
console.log('_____________________________________________')
arr3 = [];
for (let i = 0; i < 50; i++){
    arr3[i] = Math.random();
}
console.log(arr3);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

arr4 = [];
for (let i = 0; i < 50; i++){
    arr4[i] = Math.floor((Math.random()*(732-8))+8);
}
console.log(arr4);

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 2 ; i < arr4.length; i+=3){

        console.log(arr4[i]);

}
console.log('_____________________________________________')
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 2 ; i < arr4.length; i+=3){
    if (arr4[i]%2 === 0){
        console.log(arr4[i]);
    }
}


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив


console.log('_____________________________________________')
let arr4_2 = [];
for (let i = 2 ; i < arr4.length; i+=3){
    if (arr4[i]%2 === 0){
        arr4_2.push(arr4[i]);
    }
}
console.log(arr4_2);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr5 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

// ????????????????????????????????????



// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('_____________________________________________')
let arr6 = [100,250,50,168,120,345,188];
let mid = 0;
for (let i = 0; i < arr6.length; i++){
    mid = mid + arr6[i];
}
console.log(mid);
mid = +mid / arr6.length;
console.log(mid);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('_____________________________________________')
let arr7 = [];
let arr7_2 = []
for (let i = 0; i < 10; i++){
    arr7[i] = Math.floor((Math.random()*(732-8))+8);
    arr7_2.push(arr7[i] * 5)
}
console.log(arr7_2)



// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
console.log('_____________________________________________')
let arr8 = ['fdsfsd',12,'sdfsfs','sdffs','fsds',15,'sdffsd',52,'dsfdfssder','geg43',]
let arr8_2 = []

for (const arr8Element of arr8) {
    if (typeof arr8Element === `number`) {
        arr8_2.push(arr8Element)
    }
}

console.log(arr8_2)
console.log('_____________________________________________')

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', name: 'Portland'},
    {user_id: 1, country: 'Ukraine', name: 'Ternopil'},
    {user_id: 2, country: 'Poland', name: 'Krakow'},
    {user_id: 4, country: 'USA', name: 'Miami'}
];
for (const user  of usersWithId ) {

     for(const city of citiesWithId)   {
      if (user.id === city.user_id ){
          user.city = city;
          break;
      }

     }
    console.log(user);
}







// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log('_____________________________________________')
let numbers = [10,15,12,13,15,19,17,20,546,857]
for (const number of numbers) {
    if (number % 2 ===0){

        console.log(number);

    }
}




//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

console.log('_____________________________________________')
let array = [10,12,15,78,54,666,33,54,94,498];
let array2 = [];

for (let i = 0 ; i < array.length; i++){
    array2[i] = array[i]
}
console.log(array2)



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log('_____________________________________________')
let abc = ['a', 'b', 'c'];
let string ='';
for (let i = 0; i <abc.length; i++ ){
    string = string + abc[i];
}
console.log(string)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log('_____________________________________________')
i = 0;
string= ''
while (i < abc.length){
    string = string + abc[i];
    i++;
}
console.log(string)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
console.log('_____________________________________________')
string= '';
for (const stringElement of abc) {
    string += stringElement
}
console.log(string)