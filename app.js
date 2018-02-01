'use strict';

// first question about user: name
const userName = prompt('What is your name?');
console.log('Users name is ' + userName);
alert(userName + ', huh? What a sweet name!');
/*
// second question about user: city
const userHometown = prompt('What city do you live in?');
console.log('User lives in ' + userHometown);
alert('Cool, ' + userName + '! I have actually never been to ' + userHometown
      + ' myself, but I have heard that it is great!');

// third question about user: restaurant
const userFaveRestaurant = prompt('What is your favorite restaurant there?');
console.log('Users favorite restaurant in ' + userHometown + ' is ' + userFaveRestaurant);
alert('Hey, a friend of mine from ' + userHometown + ' loves ' + userFaveRestaurant + '!');

// fourth question about user: food
const userFaveFood = prompt('What is your favorite thing on their menu?');
console.log('Users favorite item at ' + userFaveRestaurant + ' is ' + userFaveFood);
alert('Man, ' + userFaveFood + ' sure does sound amazing... If I ever visit ' + userHometown
+ ', I will visit ' + userFaveRestaurant + ' and order the ' + userFaveFood + '!');

// first question about me: siblings
let userScore = 0;

const answerSiblings = prompt('Now you will learn a little bit about me! First off, \
is it true that I have three siblings?').toLowerCase();

console.log('Does the user think I have three siblings? ' + answerSiblings);

let msgSiblings = '';

if (answerSiblings === 'y' || answerSiblings === 'yes'){
    msgSiblings = 'Not quite! ';
} else if (answerSiblings === 'n' || answerSiblings === 'no') {
    msgSiblings = 'You are correct! ';
    userScore++;
} else {
    msgSiblings = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid siblings response.');
}

alert(msgSiblings + 'I actually have four siblings!');

// second question about me: ice cream
console.log('User\'s score is: ' + userScore);

const answerIceCream = prompt('How about ice cream? Do you think I like ice cream?').toLowerCase();

console.log('Does the user think I like ice cream? ' + answerIceCream);

let msgIceCream = '';

if (answerIceCream === 'y' || answerIceCream === 'yes'){
    msgIceCream = 'Heh, you\'re on the right track, but you\'re not quite right... Actually, ';
    userScore++;
} else if (answerIceCream === 'n' || answerIceCream === 'no') {
    msgIceCream = 'Heh, you\'re right. I don\'t like ice cream. ';
} else {
    msgIceCream = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid ice cream response.');
}

alert(msgIceCream + 'I looooooove ice cream!');

// third question about me: party
console.log('User\'s score is: ' + userScore);
const answerParty = prompt('Ok, that last question was a bit of a trick. No more tricks this time! \
What do you think? Do I looove to party?').toLowerCase();

console.log('Does the user think I love to party? ' + answerParty);

let msgParty = '';

if (answerParty === 'y' || answerParty === 'yes'){
    msgParty = 'I actually don\'t like to party. ';
} else if (answerParty === 'n' || answerParty === 'no') {
    msgParty = 'Yeah, you\'re right about that. ';
    userScore++;
} else {
    msgParty = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid party response.');
}

alert(msgParty + 'My party years are behind me at this point.');

// fourth question about me: travel
console.log('User\'s score is: ' + userScore);

const answerTravel = prompt('What do you think? Have I ever traveled outside of the United States?').toLowerCase();

console.log('Does the user think I have traveled outside of the US? ' + answerTravel);

let msgTravel = '';

if (answerTravel === 'y' || answerTravel === 'yes'){
    msgTravel = 'That\'s right! But just once. ';
    userScore++;
} else if (answerTravel === 'n' || answerTravel === 'no') {
    msgTravel = 'Actually, I\'m very fortunate to be abe to say that I\'ve traveled outside of the country before. ';
} else {
    msgTravel = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid travel response.');
}

alert(msgTravel + 'I took a trip to Oman several years ago.');

// fifth question about me: coding
console.log('User\'s score is: ' + userScore);

const answerCoding = prompt('OK, final question! Do I love to code?').toLowerCase();

console.log('Does the user think I like to code? ' + answerCoding);

let msgCoding = '';

if (answerCoding === 'y' || answerCoding === 'yes'){
    msgCoding = 'Of course I do! ';
    userScore++;
} else if (answerCoding === 'n' || answerCoding === 'no') {
    msgCoding = 'Oh come on, you know better than that! ';
} else {
    msgCoding = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid coding response.');
}

alert(msgCoding + 'Coding is wonderful!');

// guessing game: coins
console.log('User\'s score is: ' + userScore);
*/

alert('Alright, ' + userName + ', now we\'re going to play a little game! You try to guess a number, and I will \
tell you how close to the actual number you are. Now, you only have four guesses to get this right, so be careful! \
Are you ready?');

let userGuess = 'no guess';
let userGuessCounter = 3;
let nullCounter = 4; // allows users to escape out of asking questions

while (userGuess != 17 && userGuessCounter != 0 && nullCounter != 0) {
    if(userGuess === 'no guess') {
        userGuess = prompt('Once while playing a video game with my friends, I collected a whole bunch of powerful coins. \
        Unfortunately I abandoned my friends and was killed by the enemy team, which sacrificed all of my coins to the opposition. \
        How many coins do you think I lost to the enemy team?');
        console.log('userGuess is : ' + userGuess);
    } else if (userGuess === null || userGuess === '') {
        userGuess = prompt ('Whoops, you didn\'t make a guess! Try again.');
        console.log('User entered invalid response: ' + userGuess);
        nullCounter--;
    } else if (userGuess === '18') {
        userGuess = prompt('You\'re so close, but just a little too high! I bet you can get it with one more guess...');
        userGuessCounter--;
        console.log('userGuess is : ' + userGuess);
    } else if (userGuess === '16') {
        userGuess = prompt('You\'re so close, but just a little too low! I bet you can get it with one more guess...');
        userGuessCounter--;
        console.log('userGuess is : ' + userGuess);
    } else if (userGuess > 18) {
        userGuess = prompt('No, it wasn\'t quite that high... ');
        userGuessCounter--;
        console.log('userGuess is : ' + userGuess);
    } else if (userGuess < 16) {
        userGuess = prompt('Oh, no, it was even more than that...');
        userGuessCounter--;
        console.log('userGuess is : ' + userGuess);
    }
}

let coinMessage = 'You\'re right! ';

if (userGuess != 17 ) {
    coinMessage = 'You didn\'t quite find the right number. Do you want to know what it was? It was seventeen! ';
}

alert(coinMessage + 'I handed seventeen coins to the enemy team, and ended up losing the team for myself and my friends. \
They will never let me live it down.');
