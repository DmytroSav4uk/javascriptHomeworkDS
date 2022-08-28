//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let url = new URL(location.href);
let id = url.searchParams.get('id');
let post = +url.searchParams.get('post');
//console.log(post);


(fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    .then(uPosts => uPosts.json())
    .then(post => {


        let father = document.getElementById('father1');
        let div = document.createElement('div');
        div.classList.add('post');
        let title = document.createElement('h1');
        let body = document.createElement('p');
        title.innerText = post.title;
        body.innerText=post.body;

        title.classList.add('title');
        body.classList.add('text')


        document.body.appendChild(father);
        father.appendChild(div);
        div.appendChild(title);
        div.appendChild(body);


        let button = document.createElement('button')
        button.innerText = 'Show comments'
        div.appendChild(button);







        button.onclick = () =>{
            (fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

                .then(pComments => pComments.json())
                .then(comments => {


                    let commentsDiv = document.createElement('div')
                    div.appendChild(commentsDiv)
                    commentsDiv.classList.add('comment')

                    for (const comment of comments) {


                        let innerDiv = document.createElement('div');
                        commentsDiv.appendChild(innerDiv)
                        innerDiv.classList.add('innerEle')

                        let userName = document.createElement('p');
                        userName.innerText = 'Username: ' + comment.name + '|email: ' + comment.email;
                        innerDiv.appendChild(userName);

                        let userComment = document.createElement('p');
                        userComment.innerText = comment.body;
                        innerDiv.appendChild(userComment);

                    }

                    window.setTimeout( () =>{commentsDiv.className = 'commentsFull';}, 50);
        }))



    }}))

