# Bitmaker_project
Final Project Bitmaker

                                                    Rules of the Game 

    1. This game can be played by 2 players – One player is the user and the website will act as the other player who is called as Tharindu
    2. 2 Jokers in the deck of cards will not be considered for this game
    3. Rest of the cards will be shuffled and divided equally among the 2 players i.e.  26 cards per player and cards will belong to 4 types which are Clubs, Diamonds, Hearts and Spades.
    4. Each player has to play one card at a time, and that set will win by the player who played the highest card
       Ex : If Tharindu plays the Hearts 3 and the user plays Hearts 5, then that set will win by the user and the two cards will belong to the user.

	     If the user does not have any card with the type Hearts, the user can play a card of any other type and then irrespective of the value of the card, that set will win by Tharindu and both cards 
       will belong to Tharindu.
	
	  Note : Winning cards should keep separately and should not be again used for playing. 

    5.  The cards will be considered in ascending order for any type is as follows.

	     2  < 3 < 4 < 5 < 6 < 7 < 8 < 9 < 10 < J < Q < K < A

    6. Ultimately one player will left with no cards and therefore other player will be the winner. 


Additional Notes About the Rules:
   - during step 3, the 52 cards in the deck are randomly distributed between the 2 players
   - During step 4, if the user is not satisfied with the card that they see in their hand, they may cycle through their deck to see the next card.  They can then see every card in their deck by clicking on 'view cards' which will show them their next card.  If a card is viewed but not played, it is returned to their deck for future play.
   - If a player wins the round by having the higher hand against their opponent, they win '2 cards', which are not added to their hand.  These cards are added to the total count of cards that the winning user has, but they are not playable.
   - the game is played repeatedly until 1 user is out of cards.


   Break down of Steps / User Interaction:
   1. The user inputs their name in the 'Your Name' input field.  This later gets shown as their name when the game commences as text on the page.
   2. The user clicks 'Lets Play!', which will hide the introduction page content, and show the playing table
   3. Initialize the cards that are in the opponent's hand, and player's hand (look into javascript Math.random)
   4. Initialize the card that's displayed.  update the card image shown based on the card identifier in the javascript
   5. Hook up click event listener for 'View cards' button. 
   6. Hook up click event listener for 'Select' button.
   7. Add exit button eventListener.
