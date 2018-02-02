'use strict';

let userScore = 0;
let userName = '';

// about the user

function userQuestions() {
    userName = prompt('What is your name?');
    console.log('Users name is ' + userName);
    alert(userName + ', huh? What a sweet name!');

    const userHometown = prompt('What city do you live in?');
    console.log('User lives in ' + userHometown);
    alert('Cool, ' + userName + '! I have actually never been to ' + userHometown
          + ' myself, but I have heard that it is great!');

    const userFaveRestaurant = prompt('What is your favorite restaurant there?');
    console.log('Users favorite restaurant in ' + userHometown + ' is ' + userFaveRestaurant);
    alert('Hey, a friend of mine from ' + userHometown + ' loves ' + userFaveRestaurant + '!');

    const userFaveFood = prompt('What is your favorite thing on their menu?');
    console.log('Users favorite item at ' + userFaveRestaurant + ' is ' + userFaveFood);
    alert('Man, ' + userFaveFood + ' sure does sound amazing... If I ever visit ' + userHometown
    + ', I will visit ' + userFaveRestaurant + ' and order the ' + userFaveFood + '!');
}

// about me

const aboutMeQuestions = ['Now you will learn a little bit about me! First off, is it true that I have three siblings?',
    'How about ice cream? Do you think I like ice cream?',
    'Ok, that last question was a bit of a trick. No more tricks this time! What do you think? Do I looove to party?',
    'What do you think? Have I ever traveled outside of the United States?',
    'Last question! Do I love to code?'
];

const aboutMecorrectOne = ['n', 'y', 'n', 'y', 'y'];
const aboutMeCorrectTwo = ['no', 'yes', 'no', 'yes', 'yes'];
const aboutMeIncorrectOne = ['yes', 'no', 'yes', 'no', 'no'];
const aboutMeIncorrectTwo = ['y', 'n', 'y', 'n', 'n'];

const aboutMeAffirm = ['You are correct! ',
    'Heh, you\'re on the right track, but you\'re not quite right... Actually, ',
    'Yeah, you\'re right about that. ',
    'That\'s right! But just once. ',
    'Of course I do! '
];

const aboutMeNeggy = ['Not quite! ',
    'Heh, you\'re right. I don\'t like ice cream. ',
    'I actually don\'t like to party. ',
    'Actually, I\'m very fortunate to be abe to say that I\'ve traveled outside of the country before. ',
    'Oh come on, you know better than that! ',
];

const aboutMeMessage = ['I actually have four siblings!',
    'I looooooove ice cream!',
    'My party years are behind me at this point.',
    'I took a trip to Oman several years ago.',
    'Coding is wonderful!'
];

function aboutMe() {
    for ( let x = 0 ; x < 5 ; x++ ){
        let msg;

        const answer = prompt(aboutMeQuestions[x]).toLowerCase();

        if (answer === aboutMecorrectOne[x] || answer === aboutMeCorrectTwo[x]){
            msg = aboutMeAffirm[x];
            userScore++;
        } else if (answer === aboutMeIncorrectOne[x] || answer === aboutMeIncorrectTwo[x]) {
            msg = aboutMeNeggy[x];
        } else {
            msg = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
        }

        alert(msg + aboutMeMessage[x]);
        console.log('User\'s score is: ' + userScore);
    }
}

// random number game
let userGuess;
let userGuessCounter = 3;
let nullCounter = 4; // allows users to escape out of prompts

function randomNumberGame() {
    const hiddenNumber = Math.floor(Math.random() * 100);
    console.log('The hidden number is: ' + hiddenNumber);

    userGuess = prompt('Alright, ' + userName + ', now we\'re going to play a little game! I\'m going to pick a random \
    number between 1 and 100, and you try to guess the number. There\'s a catch, though: you only have four guesses! What\'s your first guess?');

    while (parseInt(userGuess) !== hiddenNumber && userGuessCounter !== 0 && nullCounter !== 0) {

        if (userGuess === null || userGuess === '') {

            userGuess = prompt ('Whoops, you didn\'t make a valid guess! Try again. \
            Don\'t worry, that won\'t count as one of your guesses!');

            nullCounter--;
            console.log('Null entries of 4: ' + nullCounter);

        } else if (parseInt(userGuess) === (hiddenNumber + 1)) {

            userGuess = prompt('You\'re so close, but just a little too high! I bet you can get it with one more guess...');
            userGuessCounter--;

        } else if (parseInt(userGuess) === (hiddenNumber - 1)) {

            userGuess = prompt('You\'re so close, but just a little too low! I bet you can get it with one more guess...');
            userGuessCounter--;

        } else if (parseInt(userGuess) > (hiddenNumber + 1) && (parseInt(userGuess) < + (hiddenNumber + 10))) {

            userGuess = prompt('You\'re within 10! Just a little lower!');
            userGuessCounter--;

        } else if (parseInt(userGuess) < (hiddenNumber - 1) && (parseInt(userGuess) > (hiddenNumber - 10))) {

            userGuess = prompt('You\'re within 10! Just a little higher!');
            userGuessCounter--;

        } else if (parseInt(userGuess) >= (hiddenNumber + 10)) {
            userGuess = prompt('Too high! Bring it down a bit.');
            userGuessCounter--;

        } else if (parseInt(userGuess) <= (hiddenNumber - 10)) {
            userGuess = prompt('Too low! Bring it up.');
            userGuessCounter--;

        }

        console.log('userGuess is : ' + userGuess);

    }

    if (parseInt(userGuess) === hiddenNumber) {
        userScore++;
        console.log('User\s score is: ' + userScore);
        alert('You got it!!');
    }

    if (userGuess != hiddenNumber ) {
        alert('You didn\'t quite find the right number. Do you want to know what it was? It was ' + hiddenNumber);
    }
}

// guess the pet

function petGame() {

    const petArray = ['spooky', 'dot', 'rex', 'dirk', 'patches', 'gumbo', 'spot', 'cloudbear'];
    let userCorrect;
    userGuessCounter = 5;
    nullCounter = 4;

    let petMessage = 'OK, ' + userName + ', one last game! Do you think you can guess the name of one of the pets I had growing up? \
    You have six tries to get one right answer! Your choices are: Spooky, Dot, Rex, Dirk, Patches, Gumbo, Spot, and \
    Cloudbear. Ready,go!';

    userGuess = prompt(petMessage).toLowerCase();

    console.log('User\'s pet guess was: ' + userGuess);

    while (userGuessCounter != 0 && nullCounter != 0) {
        if (userGuess === petArray[1] || userGuess === petArray[4] || userGuess === petArray[6] || userGuess === petArray[7]) {
            userGuess = prompt('No, that\'s not one of them. How about another try? Your choices are: \
            Spooky, Dot, Rex, Dirk, Patches, Gumbo, Spot, and Cloudbear!').toLowerCase();

            userGuessCounter--;

        } else if (userGuess === petArray[0] || userGuess === petArray [2] || userGuess === petArray [3] || userGuess === petArray [5]) {
            userCorrect = true;
            userScore++;
            break;

        } else {
            userGuess = prompt('Whoops, you didn\'t enter a valid guess! Remember, your choices are: \
            Spooky, Dot, Rex, Dirk, Patches, Gumbo, Spot, and Cloudbear!').toLowerCase();

            nullCounter--;
        }

        console.log(userGuess);
    }

    console.log('User\'s score is: ' + userScore);

    if (userCorrect === false) {
        alert('Uh oh, you\'ve run out of guesses! Oh well, I won\'t hold it against you.');
    }

    if (userGuess === petArray[0]) {
        petMessage = 'Spooky was my very first dog.';
    }

    if (userGuess === petArray[2]) {
        petMessage = 'Rex was a delightful half-breed pug I had growing up.';
    }

    if (userGuess === petArray[3]) {
        petMessage = 'Dirk was a hedgehod I had growing up.';
    }

    if (userGuess === petArray[5]) {
        petMessage = 'Gumbo was a rooster that I had growing up.';
    }

    if (userCorrect === true) {
        alert('That\'s right! ' + petMessage);
    }
}

// final message, informing user of score

function scoreDisplay() {
    alert('Alright,' + userName + ', one more thing before you go. It looks like you got ' + userScore + ' questions right in our \
    time together! How cool. Well, it was wonderful to meet you! Goodbye!');
}

// calling all functions

userQuestions();
aboutMe();
randomNumberGame();
petGame();
scoreDisplay();