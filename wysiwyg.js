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
                    },
                    {
                        title: 'Famous Dude',
                        name: 'Your Daddy',
                        bio: 'Grew up in the sticks',
                        image: 'http://www.respectmyplanet.org/publications/wp-content/uploads/2015/06/960x540_jed_clampett.jpg',
                        lifespan :{
                            birth: 1900,
                            death:'never'}
                    },
    {
        title: 'Famous Dude',
        name: 'Your Daddy',
        bio: 'Grew up in the sticks',
        image: 'http://www.respectmyplanet.org/publications/wp-content/uploads/2015/06/960x540_jed_clampett.jpg',
        lifespan :{
            birth: 1900,
            death:'never'}
    }
                    ];

let card_div = document.querySelector('#container');




famous_folks.forEach((item, index) => {

    let content_block = `<header>${item.title} aka ${item.name}</header>
    <section>${item.bio}</section><img src="${item.image}"><footer>Born in ${item.lifespan.birth}.  Died in ${item.lifespan.death}</footer>
    `;

    let personEL = document.createElement('person');
    personEL.innerHTML += content_block;
    personEL.classList.add(`person--${index}`);
    card_div.appendChild(personEL);
    personEL.addEventListener('click', () => {
        personEL.classList.toggle('dotted');

    let section = document.querySelector('section');
    let input = document.querySelector('input');
    let bio = document.querySelector('section');
    personEL.addEventListener('click', (e) => {
            input.focus();
            let current_card = e.currentTarget;
        input.addEventListener('keyup', input_handler());

        function input_handler() {
            bio = current_card.querySelector('section');
            console.log(bio);
            bio.innerText = input.value

            }
        });
    })
});

