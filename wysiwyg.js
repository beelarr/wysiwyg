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







for (let item of famous_folks){
    document.querySelector('#card').innerHTML += `<h3>${item.title} aka ${item.name}</h3>`;
    document.querySelector('#card').innerHTML += `<h4>${item.bio}<img src="${item.image}"></h4>`;
    document.querySelector('#card').innerHTML += `<h4>Born in ${item.lifespan.birth}</h4><div>Died in ${item.lifespan.death}</div>`

    }



