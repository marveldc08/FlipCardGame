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
    //loop through the array
    for (let i = 0; i < cardArray.length; i++) {
        //create card element.
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', i);

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner'); 
        cardInner.setAttribute('id', i);
        cardInner.addEventListener('click', function(){
            //flip the card and get it's id
            cardInner.classList.toggle('isfliped');
            var cardId = this.getAttribute('id');
            console.log(cardId);
            cardChosen.push(cardArray[cardId].name);
            cardChosenId.push(cardId);
            console.log(cardChosenId);
             setTimeout(selectCard, 300);
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
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 300);
    }
}


function checkForMatch() {
    var cards = document.querySelectorAll('.card');
    var firstChoice = cardChosen[0];
    var firstChoiceId = cardChosenId[0];
    var secondChoice = cardChosen[1];
    var secondChoiceId = cardChosenId[1];
    console.log(firstChoiceId + secondChoiceId);
    if (firstChoice === secondChoice) {
        console.log(cards);
       document.getElementById(firstChoiceId).classList.add("no-display"); 
       document.getElementById(secondChoiceId).classList.add("no-display");
        alert('Correct!.')
        cardsWon.push(cardChosen);
        cardChosen.shift();
        cardChosen.pop();
        cardChosenId.shift();
        cardChosenId.pop();
        setTimeout(selectCard, 200);
    } else {
         console.log(cards);
         document.getElementById(firstChoiceId).classList.add("flip"); 
          document.getElementById(secondChoiceId).classList.add("flip");
        alert('Try again!')
         cardChosen.shift();
         cardChosen.pop();
         cardChosenId.shift();
         cardChosenId.pop();
         setTimeout(selectCard, 200);
    }
    
     

    if (cardsWon.length === cardArray.length/2) {
        alert('Your score is '+ cardsWon.length);
    }
}
createCard();