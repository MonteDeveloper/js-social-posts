const posts = [
    {
        "id": 1,
        "content": "Le intelligenze artificiali DOMINERANNO IL MONDO!",
        "media": "https://i.ytimg.com/vi/-0MRt14Z3_Q/maxresdefault.jpg",
        "author": {
            "name": "Giovanni Tech42",
            "image": "https://media.istockphoto.com/id/480651173/photo/man-with-hi-tech-circuit-theme.jpg?s=612x612&w=0&k=20&c=T6edxqT6H_m6saz8kqozStwTqULxmBRTQl3PjmTpJUY="
        },
        "likes": 2,
        "created": "2023-04-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let postLikedIDsList = [];

populatePostListsContainer();

function populatePostListsContainer(){
    const elPostListContainer = document.getElementById("container");

    posts.forEach((post, index) => {
        if(post.author.image){
            elPostListContainer.innerHTML += `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.author.name}</div>
                            <div class="post-meta__time">${convertDateToItalianFormat(post.created)}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${post.content}</div>
                <div class="post__image">
                    <img src="${post.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button js-like-button" data-postid="${index}" onclick="likeButtonClicked(${index}, this)">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${index}" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
            `;
        }else{
            elPostListContainer.innerHTML += `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <div class="profile-pic">
                                ${post.author.name.split(" ")[0].charAt(0)}
                                ${post.author.name.split(" ")[1].charAt(0)}
                            </div>                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.author.name}</div>
                            <div class="post-meta__time">${convertDateToItalianFormat(post.created)}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${post.content}</div>
                <div class="post__image">
                    <img src="${post.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button js-like-button" data-postid="${index}" onclick="likeButtonClicked(${index}, this)">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${index}" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
            `;
        }
    })
}

function convertDateToItalianFormat(dateString){
    let date = new Date(dateString);
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function likeButtonClicked(id, button){
    let nLikes = parseInt(document.getElementById(`like-counter-${id}`).innerText);

    if(postLikedIDsList.includes(id)){
        document.getElementById(`like-counter-${id}`).innerText = nLikes - 1;
        button.style.color = "#404040";
        postLikedIDsList.splice(postLikedIDsList.indexOf(id), 1);
    }else{
        postLikedIDsList.push(id);
        document.getElementById(`like-counter-${id}`).innerText = nLikes + 1;
        button.style.color = "#0696df";
    }
}


