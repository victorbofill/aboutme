'use strict';

// INDEX
// Use 'find' to jump to section
// universal variables
// about the user 
// about me
// random number game
// pet game
// final message
// repeat prompts
// calling all functions


// universal variables

let userScore = 0;

// about the user

function userQuestions() {
    let nameResponse = 'It\'s nice to meet you, ' + userName + '!';

    userName = prompt('What is your name?');
    console.log('Users name is ' + userName);

    if (userName === undefined || userName === null) {
            userName = 'Stranger';
            nameResponse = 'Prefer to remain anonymous, huh? That\'s fine! I\'ll just call you "Stranger."';
        }

    alert(nameResponse);

    const userHometown = prompt('What city do you live in?');
    console.log('User lives in ' + userHometown);
    alert('Cool, ' + userName + '! I have actually never been to ' + userHometown
          + ' myself, but I have heard that it is great!');

    const userFaveRestaurant = prompt('What is your favorite restaurant there?');
    console.log('Users favorite restaurant in ' + userHometown + ' is ' + userFaveRestaurant);
    alert('Hey, a friend of mine from ' + userHometown + ' loves ' + userFaveRestaurant + '!');

    const userFaveFood = prompt('What is your favorite thing on their menu?');
    console.log('Users favorite item at ' + userFaveRestaurant + ' is ' + userFaveFood);
    alert('Man, I love ' + userFaveFood + '! If I ever visit ' + userHometown
    + ', I will visit ' + userFaveRestaurant + ' and order the ' + userFaveFood + '!');
}

// about me

function aboutMe() {

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

    for ( let x = 0 ; x < 5 ; x++ ){
        let msg;

        const answer = prompt(questions[x]).toLowerCase();

        if (answer === correctOne[x] || answer === correctTwo[x]){
            msg = affirm[x];
            userScore++;
        } else if (answer === incorrectOne[x] || answer === incorrectTwo[x]) {
            msg = neggy[x];
        } else {
            msg = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
            console.log('User entered invalid  response.');
        } 

        alert(msg + message[x]);
        console.log('User\'s score is: ' + userScore);
    }
}

// random number game

function randomNumberGame() {

    let userGuess;
    let userGuessCounter = 3;
    let nullCounter = 4; // allows users to escape out of prompts

    const hiddenNumber = Math.floor(Math.random() * 100);
    console.log('The hidden number is: ' + hiddenNumber);

    userGuess = prompt('Alright, ' + userName + ', now we\'re going to play a little game! I\'m going to pick a random \
    number between 1 and 100, and you try to guess the number. There\'s a catch, though: you only have four guesses! What\'s your first guess?');

    while (parseInt(userGuess) !== hiddenNumber && userGuessCounter !== 0 && nullCounter !== 0) {

        if (userGuess === null || userGuess === '') {
            userGuess = prompt ('Whoops, you didn\'t make a guess! Try again.');
            console.log('User entered invalid response: ' + userGuess);
            nullCounter--;
            console.log(nullCounter);
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
    
    if (userGuess === '17') {
        userScore++;
    }
    
    console.log('User\s score is: ' + userScore);
    
    let coinMessage = 'You\'re right! ';
    
    if (userGuess != 17 ) {
        coinMessage = 'You didn\'t quite find the right number. Do you want to know what it was? It was seventeen! ';
    }
    
    alert(coinMessage + 'I handed seventeen coins to the enemy team, and ended up losing the team for myself and my friends. \
    They will never let me live it down.');

}

coins();

// guess the pet

function pets() {

    const petArray = ['spooky', 'dot', 'rex', 'dirk', 'patches', 'gumbo', 'spot', 'cloudbear'];

    userGuessCounter = 6;
    let userCorrect = false;
    let nullCounter = 4;

    console.log('User\'s pet guess was: ' + userGuess);

    while (userGuessCounter != 0 && nullCounter != 0) {
        userGuess = prompt(petMessage);

        if (userGuess === petArray[1] || userGuess === petArray[4] || userGuess === petArray[6] ||
        userGuess === petArray[7]) {
            userGuess = prompt(petMessage + 'Again, your choices are: \
            Spooky, Dot, Rex, Dirk,Patches, Gumbo, Spot, and Cloudbear!').toLowerCase();

            userGuessCounter--;

            console.log('User\'s incorrect response was: ' + userGuess);

        } else if (userGuess === petArray[0] || userGuess === petArray [2] || userGuess === petArray [3] || userGuess === petArray [5]) {
            userCorrect = true;
            userScore++;
            userGuessCounter = 0;

            console.log('User\'s correct response was: ' + userGuess);

            break;

        } else {
            petMessage = 'Whoops, you didn\'t enter a valid guess! ';
            nullCounter--;
        }
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

pets();


// final message, informing user of score

function score() {
    alert('Alright,' + userName + ', one more thing before you go. It looks like you got ' + userScore + ' questions right in our \
    time together! How cool. Well, it was wonderful to meet you! Goodbye!');
}

// calling all functions

userQuestions();
aboutMe();
randomNumberGame();
petGame();
scoreDisplay();

// repeat prompts

function repeatInteraction() {
    alert('Welcome back, ' + userName + '!');

    userScore = 0;

    aboutMe();
    randomNumberGame();
    petGame();
    scoreDisplay();
}
