'use strict';

// JANUARY 29 QUESTIONS
// // first question about user
// let userName = prompt('What is your name?');
// console.log('Users name is ' + userName);*
// alert(userName + ", huh? What a sweet name!");

// // second question about user
// let userHometown = prompt('What city do you live in?');
// console.log('User lives in ' + userHometown);
// alert('Cool, ' + userName + '! I have actually never been to ' + userHometown
//       + ' myself, but I have heard that it is great!');

// // third question about user
// let userFaveRestaurant = prompt('What is your favorite restaurant there?');
// console.log('Users favorite restaurant in ' + userHometown + ' is ' + userFaveRestaurant);
// alert('Hey, a friend of mine from ' + userHometown + ' loves ' + userFaveRestaurant + '!');

// // fourth question about user
// let userFaveFood = prompt('What is your favorite thing on their menu?');
// console.log('Users favorite item at ' + userFaveRestaurant + ' is ' + userFaveFood);
// alert('Man, ' + userFaveFood + ' sure does sound amazing... If I ever visit ' + userHometown
// + ', I will visit ' + userFaveRestaurant + ' and order the ' + userFaveFood + '!');
// first question about me

const answerSiblings = prompt('Now you will learn a little bit about me! First off, \
is it true that I have three siblings?');

console.log('Does the user think I have three siblings? ' + answerSiblings);

let msgSiblings = '';

if (answerSiblings.toLowerCase() === 'y' || answerSiblings.toLowerCase() === 'yes'){
    msgSiblings = 'Not quite! ';
} else if (answerSiblings.toLowerCase() === 'n' || answerSiblings.toLowerCase() === 'no') {
    msgSiblings = 'You are correct! ';
} else {
    msgSiblings = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid siblings response.');
}

alert(msgSiblings + 'I actually have four siblings!');

// second question about me
const answerIceCream = prompt('How about ice cream? Do you think I like ice cream?');

console.log('Does the user think I like ice cream? ' + answerIceCream);

let msgIceCream = '';

if (answerIceCream.toLowerCase() === 'y' || answerIceCream.toLowerCase() === 'yes'){
    msgIceCream = 'Heh, you\'re not quite right... Actually, ';
} else if (answerIceCream.toLowerCase() === 'n' || answerIceCream.toLowerCase() === 'no') {
    msgIceCream = 'Heh, you\'re right. I don\'t like ice cream. ';
} else {
    msgIceCream = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid ice cream response.');
}

alert(msgIceCream + 'I looooooove ice cream!');

// third question about me
const answerParty = prompt('Ok, that last question was a bit of a trick. No more tricks this time! \
What do you think? Do I looove to party?');

console.log('Does the user think I love to party? ' + answerParty);

let msgParty = '';

if (answerParty.toLowerCase() === 'y' || answerParty.toLowerCase() === 'yes'){
    msgParty = 'I actually don\'t like to party. ';
} else if (answerParty.toLowerCase() === 'n' || answerParty.toLowerCase() === 'no') {
    msgParty = 'Yeah, you\'re right about that. ';
} else {
    msgParty = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid party response.');
}

alert(msgParty + 'My party years are behind me at this point.');

// fourth question about me
const answerTravel = prompt('What do you think? Have I ever traveled outside of the United States?');

console.log('Does the user think I have traveled outside of the US? ' + answerTravel);

let msgTravel = '';

if (answerTravel.toLowerCase() === 'y' || answerTravel.toLowerCase() === 'yes'){
    msgTravel = 'That\'s right! But ust once. ';
} else if (answerTravel.toLowerCase() === 'n' || answerTravel.toLowerCase() === 'no') {
    msgTravel = 'Nope! I\'m very fortunate to be abe to say that I\'ve traveled outside of the country before. ';
} else {
    msgTravel = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid travel response.');
}

alert(msgTravel + 'I took a trip to Oman several years ago.');

// fifth question about me
const answerCoding = prompt('OK, final question! Do I love to code?');

console.log('Does the user think I like to code? ' + answerCoding);

let msgCoding = '';

if (answerCoding.toLowerCase() === 'y' || answerCoding.toLowerCase() === 'yes'){
    msgCoding = 'Of course I do! ';
} else if (answerCoding.toLowerCase() === 'n' || answerCoding.toLowerCase() === 'no') {
    msgCoding = 'Oh come on, you know better than that! ';
} else {
    msgCoding = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid coding response.');
}

alert(msgCoding + 'Coding is wonderful!');