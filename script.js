const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
console.log ('Flipping cards');
this.classList.toggle('flip');
if (!hasFlippedCard) {
    hasFlippedCard = true;
        firstCard = this}
        else{hasFlippedCard= false;
            secondCard = this;
            console.log(firstCard.dataset.framework);
            console.log(secondCard.dataset.framework);
        }
}

cards.forEach(card => card.addEventListener('click',flipCard));

    // console.log({hasFlippedCard, firstCard});
    // console.log({firstCard, secondCard});