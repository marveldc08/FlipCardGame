const cardArray = [
    {
        name: 'food1',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food1.jpg"
    },
    {
        name: 'food1',
        img:"C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food1.jpg"
    },
    {
        name: 'food2',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food2.jpg"
    },
    {
        name: 'food2',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food2.jpg"
    },
    {
        name: 'food3',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food3.jpg"
    },
    {
        name: 'food3',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food3.jpg"
    },
    {
        name: 'food4',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food4.jpg"
    },
    {
        name: 'food4',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food4.jpg"
    },
    {
        name: 'food5',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food5.jpg"
    },
    {
        name: 'food5',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food5.jpg"
    },
    {
        name: 'food6',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food6.jpg"
    },
    {
        name: 'food6',
        img: "C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/MemoryGame/images/food6.jpg"
    },
]
cardArray.sort(()=>0.5-Math.random())
const grid = document.querySelector('.grid');
var cardChosen = [];
var cardChosenId =[];
var cardsWon= [];
function createCard(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner'); 
        cardInner.addEventListener('click', function(){
        cardInner.classList.toggle('isfliped');
        var cardId = this.getAttribute('id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardArray[cardId]);
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
        });

        const cardFront = document.createElement('div');
        cardFront.classList.add('card_face','card-front');

        const header = document.createElement('h2')
        header.textContent = 'Developer Card'

        const cardBack = document.createElement('div');
        cardBack.classList.add('card_face','card-back');

        const content = document.createElement('div');
        content.classList.add('content');

        const image = document.createElement('img');
        image.setAttribute('src', cardArray[i].img);
        image.setAttribute('id', i);
        image.classList.add('pro');

        content.append(image);
        cardBack.append(content);
        cardFront.append(header);
        cardInner.append(cardFront);
        cardInner.append(cardBack);
        card.append(cardInner);
        grid.append(card);
    }
    
}

function selectCard(){
   
}


function checkForMatch() {
    var cards = document.querySelectorAll('.card');
    var firstChoice = cardChosen[0];
    var secondChoice = cardChosen[1];

    if (firstChoice === secondChoice) {
        cards.classList.add('no-display');
        cards.classList.add('no-display');
        alert('Correct!.')
    } else {
        cards.classList.add('isfliped');
        cards.classList.add('isfliped');
        alert('Try again!')
    }
    cardsWon.push(cardChosen);

    if (cardsWon.length === cardArray.length/2) {
        alert('Your score is '+ cardsWon);
    }
}
createCard();