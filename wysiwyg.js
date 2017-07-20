/**
 * Created by beelarr on 7/19/17.
 */
let famous_folks = [{
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
    birth: 1747,
        death: 1797
}
}, {
    title: 'Famous Dude',
    name: 'Your Daddy',
    bio: 'Grew up in the sticks',
    image: 'http://www.respectmyplanet.org/publications/wp-content/uploads/2015/06/960x540_jed_clampett.jpg',
    lifespan :{
        birth: 1900,
            death:'never'}
}
];

// famous_folks.forEach((item, index) =>{
//    let iter_of_item = `<div id='${index}'>${item.title} aka ${item.name} </div> `
//    let title = document.createElement('div');
//    title.innerHTML = iter_of_item;
//    document.querySelector('card').appendChild
// });






famous_folks.forEach((item, index) =>{
    let content_block = `<person class="person--${index+1}"><header>${item.title} aka ${item.name}</header>
    <section>${item.bio}<img src="${item.image}"></section><footer>Born in ${item.lifespan.birth}.  Died in ${item.lifespan.death}</footer>
    </person>`;

    let card_div = document.querySelector('#container');
    card_div.innerHTML += content_block;

    // document.querySelector('#container').appendChild(card_div);
    // let content_dom = document.querySelector('#person--${index}');

});

let person = document.querySelectorAll('person');
console.log(person)
person.forEach((e)=>{
    e.addEventListener('click', ()=>{
        e.classList.toggle('dotted')
    })
});

let input = document.querySelector('input')
person.forEach((e)=>{
    e.addEventListener('click', ()=>{
        input.focus()
    })
});


