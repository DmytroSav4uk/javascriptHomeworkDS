function partition() {
    console.log('____________________')
}

partition();
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let uArr = [
    new User(10, 'Dmytro', 'Savchuk', 'fds', 89498),
    new User(3, 'Petro', 'Savchuk', 'fds', 89498),
    new User(2, 'Valera', 'Savchuk', 'fds', 89498),
    new User(4, 'George', 'Savchuk', 'fds', 89498),
    new User(7, 'Valerie', 'Savchuk', 'fds', 89498),
    new User(6, 'Vincent', 'Savchuk', 'fds', 89498),
    new User(5, 'AlEg', 'Savchuk', 'fds', 89498),
    new User(9, 'Bob', 'Savchuk', 'fds', 89498),
    new User(8, 'Boba', 'Savchuk', 'fds', 89498),
    new User(1, 'Bombaster', 'Savchuk', 'fds', 89498)
];
console.log(uArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let uFiltered = uArr.filter(value =>  value.id % 2 === 0);
console.log(uFiltered);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let uSorted = uArr.sort((id1, id2) => id1.id - id2.id );
console.log(uSorted);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    id;
    name;
    surname;
    email;
    phone;
    order;

    constructor(id,name,surname, email,phone,order) {
this.id = id;
this.name = name;
this.surname = surname;
this.email = email;
this.phone = phone;
this.order = order;
    }
}


let cArr = [new Client( 1,'name1','surname1','email1','phone1',['Juice','Meat','Cheese']),
    new Client( 2,'name2','surname2','email2','phone2',['Juice','Cheese']),
    new Client( 3,'name3','surname3','email3','phone3',['Cheese']),
    new Client( 4,'name4','surname4','email4','phone4',['Juice','Meat','Cheese']),
    new Client( 5,'name5','surname5','email5','phone5',['Meat','Cheese']),
    new Client( 6,'name6','surname6','email6','phone6',['Juice','Cheese']),
    new Client( 7,'name7','surname7','email7','phone7',['Juice','Meat','Cheese']),
    new Client( 8,'name8','surname8','email8','phone8',[]),
    new Client( 9,'name9','surname9','email9','phone9',['Juice']),
    new Client( 10,'name10','surname10','email10','phone10',['Juice','Meat','Cheese'])];

console.log(cArr)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let cSorted = cArr.sort((value1,value2) => value1.order.length -value2.order.length);
console.log(cSorted);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, producer, release, maxSpeed,engineVolume){
    this.model = model;
    this.producer = producer;
    this.release = release;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
}
function Drive(model, producer, release, maxSpeed,engineVolume,drive){
    Car.apply(this,arguments)
    this.drive = `їдемо зі швидкістю ${maxSpeed}км на годину`;
}

function NewSpeed(model, producer, release, maxSpeed,engineVolume,newSpeed){
    Car.apply(this,arguments);
    this.newSpeed = newSpeed + maxSpeed;
}

function ChangeYear(model, producer, release, maxSpeed,engineVolume,newRelease){
    Car.apply(this,arguments)
    this.newRelease= newRelease;
    //release = NewRelease;
}



let a = new Car('Vitara','Suzuki',2001,200,600000)
let b = new ChangeYear('Vitara','Suzuki',2001,200,600000,2002)
console.log(a);
console.log(b);




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку