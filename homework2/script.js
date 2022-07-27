// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


let arr = ['hello' ,12, 12.5, true, false, 'okten','Benjamin',546,-999,'JavaScript']
console.log('First Task')
console.log(arr);
console.log(arr.length);


console.log(arr [0]);
console.log(arr [1]);
console.log(arr [2]);
console.log(arr [3]);
console.log(arr [4]);
console.log(arr [5]);
console.log(arr [6]);
console.log(arr [7]);
console.log(arr [8]);
console.log(arr [9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


let books = [
    book1 ={
        title:'Dune',
        pageCount:755,
        genre:'Science-Fiction'},
    book2 = {
        title:'Toreadors from Vasyukivka',
        pageCount:544,
        genre:'Adventures'} ,
    book3 = {
        title:'Lord of the Rings',
        pageCount:5000,
        genre:'Fantasy'}
]
console.log('Second Task')
console.log(books)
// console.log(books[1])
// console.log(book1)
// console.log(book2)
// console.log(book3)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let books2 = [
    book1 ={
        title:'Dune',
        pageCount:755,
        genre:'Science-Fiction',
        author:[
            {name:'Frank Herbert' , age:66 }
        ]
    },
    book2 = {
        title:'Toreadors from Vasyukivka',
        pageCount:544,
        genre:'Adventures',
        author:[
            {name:'Vsevolod Nestayko' , age:84}
        ]} ,
    book3 = {
        title:'Lord of the Rings',
        pageCount:5000,
        genre:'Fantasy',
        author:[
            {name:'John R. R. Tolkien' , age:81}
        ]}
]
console.log('Third Task')
console.log(books2)

// console.log(book3.author[0].name)
// console.log(book3.author[0].age)
// console.log(book1.genre)
// console.log(books2[1].pageCount)
// console.log(books2[2].title)


// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {name: 'Vasya',username:'Vasiaan221', password:'nkjn24g32jk423'},
    {name: 'Petya',username:'Petyan2131', password:'sdjkfjs23k4234hier'},
    {name: 'Anya',username:'Anutka', password:'sjnn3iot3oiji'},
    {name: 'Anton',username:'Antony', password:'gv387r783cg3'},
    {name: 'Orest',username:'Forest', password:'1953v535v5311'},
    {name: 'Maria',username:'JulieTta', password:'dfgdg'},
    {name: 'Vasya',username:'Vasiaan2341', password:'39t739ut349t39g39'},
    {name: 'Vasya',username:'Vasan2461', password:'u3h9gh49guih3ig%%%%'},
    {name: 'Gregory',username:'King267', password:'#$@$U@(@R*TJT@'},
    {name: 'Veronika',username:'Nikusia', password:'K&#KKN#^#@IFDSOMCD(S*#)#'}
]
console.log('Fourth Task')
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)