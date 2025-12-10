const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    console.log('Flipping cards');
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            console.log('Look We have a match');
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                console.log('Sorry, But this is not a match');
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

// console.log({hasFlippedCard, firstCard});
// console.log({firstCard, secondCard});