// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let id = url.searchParams.get('id');

(fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    .then(response => response.json())
    .then(user => {
        let father = document.getElementById('father1');
        let userDiv = document.createElement('div');
        userDiv.classList.add('user1');
        document.body.appendChild(father);
        father.appendChild(userDiv);


        let detailsDiv = document.createElement('div');
        detailsDiv.classList.add('innerDiv');
        userDiv.appendChild(detailsDiv);

        let addressDiv = document.createElement('div');
        addressDiv.classList.add('innerDiv');
        userDiv.appendChild(addressDiv);

        let geoDiv = document.createElement('div');
        geoDiv.classList.add('innerDiv');
        userDiv.appendChild(geoDiv);

        let companyDiv = document.createElement('div');
        companyDiv.classList.add('innerDiv');
        userDiv.appendChild(companyDiv);


        let details = document.createElement('h2');
        details.innerText = 'Details';
        detailsDiv.appendChild(details);

        let name = document.createElement('h3');
        name.innerText = 'Name: ' + user.name;
        detailsDiv.appendChild(name);

        let userName = document.createElement('h3');
        userName.innerText = 'Username: ' + user.username;
        detailsDiv.appendChild(userName);

        let email = document.createElement('h3');
        email.innerText = 'email: ' + user.email;
        detailsDiv.appendChild(email);

        let address = document.createElement('h2');
        address.innerText = 'Address';
        addressDiv.appendChild(address);


        let street = document.createElement('h3');
        street.innerText = 'street: ' + user.address.street;
        addressDiv.appendChild(street);

        let suite = document.createElement('h3');
        suite.innerText = 'suite: ' + user.address.suite;
        addressDiv.appendChild(suite);

        let city = document.createElement('h3');
        city.innerText = 'city: ' + user.address.city;
        addressDiv.appendChild(city);

        let zipcode = document.createElement('h3');
        zipcode.innerText = 'zipcode: ' + user.address.zipcode;
        addressDiv.appendChild(zipcode);

        let geo = document.createElement('h2');
        geo.innerText = 'Geo';
        geoDiv.appendChild(geo);

        let geoDetails = document.createElement('h3');
        geoDetails.innerText = 'lng: ' + user.address.geo.lng + ' | ' + 'lat: ' + user.address.geo.lat;
        geoDiv.appendChild(geoDetails);
        // console.log(geoDetails)

        let phone = document.createElement('h3');
        phone.innerText = 'Phone: ' + user.phone;
        geoDiv.appendChild(phone);

        let website = document.createElement('h3');
        website.innerText = 'Website: ' + user.website;
        geoDiv.appendChild(website);

        let companyT = document.createElement('h2');
        companyT.innerText = 'Company info';
        companyDiv.appendChild(companyT);

        let companyName = document.createElement('h3');
        companyName.innerText = 'name: ' + user.company.name;
        companyDiv.appendChild(companyName);

        let catchPhrase = document.createElement('h3');
        catchPhrase.innerText = 'Catch phrase: ' + user.company.catchPhrase;
        companyDiv.appendChild(catchPhrase);

        let bs = document.createElement('h3');
        bs.innerText = 'bs: ' + user.company.bs;
        companyDiv.appendChild(bs);

        let button = document.createElement("button");
        button.innerText = 'posts of current user';
        button.classList.add('postOfUser')
        userDiv.appendChild(button)

        button.onclick = () => {


            (fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let ul = document.createElement('ul');
                    let ulDiv = document.createElement('div');
                    ulDiv.id = 'posts';
                    for (const post of posts) {
                        let li = document.createElement('li');
                        li.innerText = post.title;
                        let postButton = document.createElement('button')
                        postButton.innerText = ' more';
                        postButton.id = 'postButton'
                        postButton.onclick = () => {
                            location.href = `post-details.html?id=${user.id}&post = ${post.id}`
                        }

                        li.appendChild(postButton)
                        ul.appendChild(li)
                    }
                    userDiv.appendChild(ulDiv);
                    ulDiv.appendChild(ul);

                    window.setTimeout( () =>{ulDiv.id = 'postsFull';}, 100);
                }))
            button.onclick = () =>
                this.disabled = 'disabled';
        }
    }))