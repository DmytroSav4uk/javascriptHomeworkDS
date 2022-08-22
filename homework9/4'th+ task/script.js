// - Є масив:
 let arr = ['Main','Products','About us','Contacts'];
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.

let ul = document.getElementsByClassName('menu')[0];
for (const element of arr) {
    let li = document.createElement('li');
    li.innerText = element;
    ul.append(li)
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// for (const element of coursesAndDurationArray){
//     let div = document.createElement('div');
//     document.body.append(div)
//     let text = document.createElement('h1');
//     text.innerText ='Title:'+ element.title + '|Month Duration: ' + element.monthDuration;
//     div.appendChild(text);
// }

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const element of coursesAndDurationArray){
    let div = document.createElement('div');
    div.classList.add('item') ;
    document.body.append(div);

     let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText ='Title:'+ element.title;
     div.appendChild(h1);
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = 'Month Duration: ' + element.monthDuration;
    div.appendChild(p);
}
// -----------
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let a = document.createElement('h1');
a.innerText = 'Text that will disappear';
a.id = 'text'
document.body.appendChild(a);
let button = document.createElement('button');
button.innerText = 'Click me to remove the text above';
document.body.appendChild(button);
button.onclick = function() {
    document.getElementById('text').remove();
    button.innerText ='Ta-da,it is gone!';
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.createElement('input');
input.id = 'age';
let button1 = document.createElement('button');
button1.innerText = 'send';
input.placeholder = 'enter your age';
document.body.appendChild(input);
document.body.appendChild(button1);
button1.onclick = function (){
   // console.log(document.getElementById('age').value);
if (document.getElementById('age').value >= 18){
    alert('you are big guy!')}
    else{
        alert('you are kleiner Kinder');
    }
};

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let inputHeight = document.createElement('input');
let inputWidth = document.createElement('input');
let inputContent = document.createElement('input');
let buttonTable = document.createElement('button');
inputHeight.placeholder = 'enter row value';
inputWidth.placeholder = 'enter column value';
inputContent.placeholder = 'enter content';
buttonTable.innerText = 'Send info';
document.body.appendChild(inputHeight);
document.body.appendChild(inputWidth);
document.body.appendChild(inputContent);
document.body.appendChild(buttonTable);


buttonTable.onclick = function CreateTable() {
    let myTableDiv = document.getElementById("table");
    let table = document.createElement('TABLE');
    table.border = '10';
    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (let i = 0; i < inputHeight.value; i++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (let j = 0; j < inputWidth.value; j++) {
            let td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode( `${inputContent.value}`+' '+ i + "," + j));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}
