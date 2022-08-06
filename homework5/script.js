function partition(){
    console.log('_________________________________')
}


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б




function rectangleArea(a,b){
    return  a * b;
}

console.log( 'rectangle area is:' + rectangleArea(4, 6))
partition()

// - створити функцію яка обчислює та повертає площу кола з радіусом r


function circleArea(r){

    return Math.PI * r * r ;
}
console.log('circle area is:' +circleArea(12))

partition()
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder( h, r){

    return  Math.PI  * 2 * ( h * r);
}
console.log('cylinder area is:' + cylinder(12,5) )
partition()


// - створити функцію яка приймає масив та виводить кожен його елемент


// let arr1 = [1,2,33,45,5494,6,7,8,9] ;

function arrayElement(arr){
    for (const arrElement of arr ){
    console.log(arrElement)
    }
}
arrayElement([1,4,5,8,4,5,3,2,1])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text(text){
    console.log(`${text}`)
}

text('Hallo , wie geht es ?')

partition()



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//
// function liText (text){
//
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//         </ul>`)
// }
//
// liText('Hallo, ist alles gut?')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function liTextAndNumber (text , amountOfNumbers){
    document.write(`<ul>`)
    for (let i = 0; i < amountOfNumbers; i++ ) {
                  document.write(`<li>${text}</li>`)
        }
      document.write(`</ul>`)
}
liTextAndNumber('Hallo, ist alles gut?' , 50)
partition()
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = ['hello', 'okten',123,true, false, -10];

function arrayList(array){
    for (const arrayElement of array) {
        console.log(arrayElement)
        // document.write(`${arrayElement} <br>`)
    }
}
arrayList(array)

partition()
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let usersList = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

function usersOutput(userArray){
    for (const userArrayElement of userArray) {
        document.write(`<div>${userArrayElement.id}:${userArrayElement.name} ${userArrayElement.age}</div>`)
        console.log(userArrayElement)
    }
}

usersOutput(usersList);



// - створити функцію яка повертає найменьше число з масиву

let arrayLowestNumber = [1,2,54,6,9,7,5,3,5];

function lowestNumber(array){
    for (const arrayElement of array) {
    if (arrayElement < array.length ){




    }
    }
}

lowestNumber(arrayLowestNumber)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13