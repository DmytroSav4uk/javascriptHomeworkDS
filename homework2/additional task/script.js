// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
//  let arr = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]
//
//  if (arr.length <= 3 ){
//  console.log('Малий масив')
//  }
//  else {
//      console.log('Великий масив');
//  }
//
//  - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//      Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//
//  let a = +prompt("a:");
//  let b = +prompt("b:");
// /let c = +prompt("c:");
//  if((b<a && a<c) || (c<a && a<b)) alert(a);
//  if((a<b && b<c) || (c<b && b<a)) alert(b);
//  if((a<c && c<b) || (b<c && c<a)) alert(c);
//
//
//
//
//  - Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//      result = 'Мало';
//  } else {
//      result = 'Багато';
//  }
//
//  let result;
//  let a = +prompt('Введіть число');
//  let b = +prompt('Введіть число');
//
//  (a + b < 4)? result = 'Мало' : result = 'Багато';
//
//  console.log(result)
//
//
//  - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
//  напишіть це тернарним оператором
//
//
//  let posOrNeg;
//  let num = +prompt('Введіть число');
//  (num < 0 )? posOrNeg = 'number is negative': (num === 0)? posOrNeg = 'Zero': posOrNeg = 'number is positive'
//  console.log(posOrNeg)
//
//
//  - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//      Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
//  let test = true;
//  let test = false;
//  (test === true)? console.log('Вірно'): console.log('невірно');
//
//  - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//  Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
//  let question = prompt('Яка «офіційна» назва JavaScript?')
//
//  if (question === 'ECMAScript') {
//      alert('Правильно!')
//  }
//  else {
//      alert('Не знаєте? ECMAScript!')
//  }
//
//
//      - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
//  Користувач вводить номер квартири просто в змінні або через prompt('') .
//      Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
//  let b1 = +prompt('Введіть номер квартири');
//  if (b1 <= 20 && b1 >= 1 ){
//      alert('1')
//  }
//  else if (b1 > 20 && b1 <= 48){
//      alert('2')
//  }
//  else if ( b1 > 48 && b1 <= 90){
//      alert('3')
//  }
//  else {
//      alert('error')
//     }
//
//
//
//
//
// // - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// let number = +prompt('Enter number 10')
//
// if (number === 10 ){
//     alert('well done')
// }
// else {
//     alert('it is not a 10')
// }
//
//
// // - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// //     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// //     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let t = +prompt('enter a tempreture')
//
// if (t >= 10 && t <=22){
//     alert('let s go for a walk')
// }
// else {
//     alert('weather is' + t+'*'+'stay home')
// }
// let prize = +prompt();
//
//
// switch (prize){
//     case 1: console.log('hello');
//     break;
//     case 2: console.log('bye')
//         break;
//     default: console.log('what')
// }
