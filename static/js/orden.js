const deckOrder = ["8C", "10T", "7P", "QP", "4D", "3C", "10P", "6C", "AD", "8T", "9D", "4C", "7C", "3T", "4T", "JD", "9C", "JP", "AT", "6D", "2T", "QT", "5T", "9P", "5C", "2P", "10D", "2D","AC", "5P", "QC", "5D", "9T", "KP", "7D", "10C", "4P", "8D", "3P", "8P", "2C", "AP", "KT", "JC", "7T", "KD", "JT", "3D", "6T", "KC", "QD", "6P"];
console.log(deckOrder);
let finalDeckOrder;

// This function retrieves the input value for the bottom card, and creates a copy of the deckOrder array
function showKnightPositions() {
    const bottomCard = document.getElementById("bottomCardInput").value.toUpperCase();
    const deck = deckOrder.slice();
    
    // If the bottom card is found in the deck, it reorders the deck so that the bottom card is at the bottom
    const bottomCardIndex = deck.indexOf(bottomCard);
    cartaCorte = bottomCardIndex + 1;
    document.getElementById("corte").textContent = "La posición de la carta cortada es: " + cartaCorte;
    //Las cartas contadaas van a bottom

    let newDeckOrder = [];
    if (bottomCardIndex !== -1) {
      newDeckOrder = deck.slice(0, bottomCardIndex + 1).reverse();
      deck.splice(0, bottomCardIndex + 1);
      deck.push(...newDeckOrder);
    }
    
    

  
    // This loop looks for all the knight cards in the deck and saves their positions
    const knightPositions = [];
    for (let i = 0; i < deck.length; i++) {
      if (deck[i].includes("K")) {
        knightPositions.push(i + 1);
      }
    }
  
    // If there are knights in the deck, it creates a new deck order where the cards before the last knight are reversed

    if (knightPositions.length > 0) {
      const lastKnightPosition = knightPositions[knightPositions.length - 1];
      newDeckOrder = deck.slice(0, lastKnightPosition).reverse();
    }
  
    // Removes all knights from the new deck order
    newDeckOrder = newDeckOrder.filter(card => !card.includes("K"));

    // Creates a new array with the remaining cards in the deck after the last knight position, and appends them to the new deck order
    const remainingCards = deck.slice(knightPositions[knightPositions.length - 1]);
    newDeckOrder = newDeckOrder.concat(remainingCards);
    //Las cartas contadas van a top
  
    // Finds the position of the first ace in the new deck order, and if found, it saves the next 5 cards in a variable
    const firstAcePosition = newDeckOrder.findIndex(card => card.includes("A"));
    let fiveCardsAfterAce = "";
    if (firstAcePosition !== -1 && firstAcePosition + 5 < newDeckOrder.length) {
      fiveCardsAfterAce = newDeckOrder.slice(firstAcePosition + 1, firstAcePosition + 6).join(", ");
    }
    
    // If there is an ace in the deck, it creates a new deck order where the cards before the ace are reversed, then remove the ace and the 5 cards after the ace,
    // Creates a new array with the remaining cards in the deck after the ace position, and appends them to the new deck order called finalDeckOrder
    finalDeckOrder = [];
    if (firstAcePosition !== -1) {
      const reversedCardsBeforeAce = newDeckOrder.slice(0, firstAcePosition).reverse();
      const cardsAfterAce = newDeckOrder.slice(firstAcePosition + 6);
      finalDeckOrder = reversedCardsBeforeAce.concat(cardsAfterAce);
    }
    //las cartas contadas van a top
    // Updates the HTML elements with the results
    document.getElementById("knightPositions").textContent = "Posición de los Reyes: " + knightPositions.join(", ");
    document.getElementById("newDeckOrder").textContent = "Nuevo orden de la baraja: " + newDeckOrder.join(", ");

    //Se podría hacer siempre 6
    document.getElementById("firstAcePosition").textContent = "Posición del primer as: " + (firstAcePosition !== -1 ? firstAcePosition + 1 : "N/A");
    document.getElementById("fiveCardsAfterAce").textContent = "5 cartas después del As: " + fiveCardsAfterAce;
    document.getElementById("finalDeckOrder").textContent = "Orden final de la baraja: " + finalDeckOrder;

    finalDeckOrder = finalDeckOrder.splice(5);

    let hand1 = [];
    let hand2 = [];

    for (let i = 0; i < 5; i++) {
      hand1.push(finalDeckOrder[i*2]);
      hand2.push(finalDeckOrder[i*2+1]);
    }

    document.getElementById("hand1").textContent = "Mano de akira: " + hand1;
    document.getElementById("hand2").textContent = "Mano del mago: " + hand2;


  }
  

