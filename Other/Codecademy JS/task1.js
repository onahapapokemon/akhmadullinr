// делаем игру камень, ножницы, бумага. задаем функцию playGame

var playGame = function() {
    var userChoice;
    userChoice = prompt('Please choose either rock, paper, scissors or rope ');

    if(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors' && userChoice !== 'rope') {
        confirm(userChoice + ' is an invalid entry');
        userInput();
    }

    var computerChoice = Math.random();
    if (computerChoice < 0.25) {
        computerChoice = 'rock';
    }
    else if (computerChoice <= 0.50) {
        computerChoice = 'paper';
    }

    else if (computerChoice <=0.75) {
        computerChoice = 'scissors';
    }

    else {
        computerChoice = 'rope';
    }
    console.log("Computer: " + computerChoice);


    var compare = function (choice1, choice2) {
        if (choice1 === choice2) {
            return (0);
        }
        else if (choice1 === 'rock') {
            if (choice2 === 'paper') {
                return 'paper wins';
            }
            else if (choice2 === 'scissors') {
                return 'rock wins';
            }
            else if (choice2 === 'rope') {
                return 'rope wins';
            }
        }
        else if (choice1 === 'paper') {
            if (choice2 === 'rock') {
                return 'paper wins';
            }
            else if (choice2 === 'scissors') {
                return 'scissors win';
            }
            else if (choice2 === 'rope') {
                return 'rope wins';
            }
        }
        else if (choice1 === 'scissors') {
            if (choice2 === 'rock') {
                return 'scissors win';
            }
            else if (choice2 === 'paper') {
                return 'rock wins';
            }
            else if (choice2 === 'rope') {
                return 'rope wins';
            }
        }
        else if (choice1 === 'rope') {
            if (choice2 === 'rock') {
                return 'rope wins';}
            else if (choice2 === 'paper') {
                return 'rope wins';}
            else if (choice2 === 'scissors') {
                return 'rope wins';
            }
        }
    };

    var result = compare (userChoice, computerChoice);
    if (result === 0) {
        alert ("It's a tie, try again");
        playGame ();
    }
    else {
        console.log(result);
    }
};

playGame ();