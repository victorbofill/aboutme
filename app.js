'use strict';

// first question about me: siblings
const answerSiblings = prompt ('Now you will learn a little bit about me! First off, \
is it true that I have three siblings?').toLowerCase();

console.log('Does the user think I have three siblings? ' + answerSiblings);

let msgSiblings = '';

if (answerSiblings === 'y' || answerSiblings === 'yes'){
    msgSiblings = 'Not quite! ';
} else if (answerSiblings === 'n' || answerSiblings === 'no') {
    msgSiblings = 'You are correct! ';
} else {
    msgSiblings = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid siblings response.');
}

alert(msgSiblings + 'I actually have four siblings!');

// second question about me: ice cream
const answerIceCream = prompt('How about ice cream? Do you think I like ice cream?').toLowerCase();

console.log('Does the user think I like ice cream? ' + answerIceCream);

let msgIceCream = '';

if (answerIceCream === 'y' || answerIceCream === 'yes'){
    msgIceCream = 'Heh, you\'re on the right track, but you\'re not quite right... Actually, ';
} else if (answerIceCream === 'n' || answerIceCream === 'no') {
    msgIceCream = 'Heh, you\'re right. I don\'t like ice cream. ';
} else {
    msgIceCream = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid ice cream response.');
}

alert(msgIceCream + 'I looooooove ice cream!');

// third question about me: party
const answerParty = prompt('Ok, that last question was a bit of a trick. No more tricks this time! \
What do you think? Do I looove to party?').toLowerCase();

console.log('Does the user think I love to party? ' + answerParty);

let msgParty = '';

if (answerParty === 'y' || answerParty === 'yes'){
    msgParty = 'I actually don\'t like to party. ';
} else if (answerParty === 'n' || answerParty === 'no') {
    msgParty = 'Yeah, you\'re right about that. ';
} else {
    msgParty = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid party response.');
}

alert(msgParty + 'My party years are behind me at this point.');

// fourth question about me: travel
const answerTravel = prompt('What do you think? Have I ever traveled outside of the United States?').toLowerCase();

console.log('Does the user think I have traveled outside of the US? ' + answerTravel);

let msgTravel = '';

if (answerTravel === 'y' || answerTravel === 'yes'){
    msgTravel = 'That\'s right! But just once. ';
} else if (answerTravel === 'n' || answerTravel === 'no') {
    msgTravel = 'Actually, I\'m very fortunate to be abe to say that I\'ve traveled outside of the country before. ';
} else {
    msgTravel = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid travel response.');
}

alert(msgTravel + 'I took a trip to Oman several years ago.');

// fifth question about me: coding
const answerCoding = prompt('OK, final question! Do I love to code?').toLowerCase();

console.log('Does the user think I like to code? ' + answerCoding);

let msgCoding = '';

if (answerCoding === 'y' || answerCoding === 'yes'){
    msgCoding = 'Of course I do! ';
} else if (answerCoding === 'n' || answerCoding === 'no') {
    msgCoding = 'Oh come on, you know better than that! ';
} else {
    msgCoding = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
    console.log('User entered invalid coding response.');
}

alert(msgCoding + 'Coding is wonderful!');