// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
       for (const user of users) {
            let father = document.getElementById('father')
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            let userText = document.createElement('h1');
            userText.innerText = `${user.id}  ${user.name}`;
            userDiv.appendChild(userText);
            document.body.append(userDiv);
            let button = document.createElement("button");
            button.onclick = () => {
                 location.href = `user-details.html?id=${user.id}&data=${JSON.stringify(user)}`;
            };
            button.innerText = 'Click for more info';
            userDiv.appendChild(button);
            father.appendChild(userDiv)
        }
    })


// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)