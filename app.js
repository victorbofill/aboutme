'use strict';

// first question about user: name
const userName = prompt('What is your name?');
console.log('Users name is ' + userName);
alert(userName + ', huh? What a sweet name!');

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

const questions = ['Now you will learn a little bit about me! First off, \
    is it true that I have three siblings?',
'How about ice cream? Do you think I like ice cream?',
'Ok, that last question was a bit of a trick. No more tricks this time! \
        What do you think? Do I looove to party?',
'What do you think? Have I ever traveled outside of the United States?'
]; 
const comparison = ['yes', 'y', 'no', 'n'];

const affirm = ['Not quite! ',
    'Heh, you\'re on the right track, but you\'re not quite right... Actually, ',
    'I actually don\'t like to party. ',
    'That\'s right! But just once. ',
    'Of course I do! '
];

const neggy = ['You are correct! ',
    'Heh, you\'re right. I don\'t like ice cream. ',
    'Yeah, you\'re right about that. ',
    'Actually, I\'m very fortunate to be abe to say that I\'ve traveled outside of the country before. ',
    'Oh come on, you know better than that! ',
];


const message = ['I actually have four siblings!',
    'I looooooove ice cream!',
    'My party years are behind me at this point.',
    'I took a trip to Oman several years ago.',
    'Coding is wonderful!'
];

function aboutMe() {
    for ( let x = 0 ; x < 5 ; x++ ){

        const answer = prompt( questions[x]).toLowerCase();
        
        let msg = '';
        
        if (answer === comparison[0] || answer === comparison[1]){
            msg = affirm[x];
        } else if (answer === comparison[2] || answer === comparison[3]) {
            msg = neggy[x];
            userScore++;
        } else {
            msg = 'Oops, I didn\'t understand you. But in case you\'re curious: ';
            console.log('User entered invalid  response.');
        }

        alert(msg + message[x]);

    }  
}

aboutMe();

// guessing game: coins
let userGuess;
let userGuessCounter = 3;
let nullCounter = 4; // allows users to escape out of prompts

function coins() {
    alert('Alright, ' + userName + ', now we\'re going to play a little game! You try to guess a number, and I will \
    tell you how close to the actual number you are. Now, you only have four guesses to get this right, so be careful! \
    Are you ready?');
    
    userGuess = prompt('Once while playing a video game with my friends, I collected a whole bunch of powerful coins. \
    Unfortunately I abandoned my friends and was killed by the enemy team, which sacrificed all of my coins to the \
    opposition. How many coins do you think I lost to the enemy team?');
    
    while (userGuess != 17 && userGuessCounter != 0 && nullCounter != 0) {
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
    nullCounter = 6;
    let petMessage = 'OK,' + userName + ', one last game! Do you think you can guess the name ofone of the pets I had growing up? \
    You have six tries to get one right answer! Your choices are: Spooky, Dot, Rex, Dirk, Patches, Gumbo, Spot, and \
    Cloudbear. Ready,go!';

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
score();