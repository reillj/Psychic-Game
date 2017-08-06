 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    // Letters computer can pick from
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Global variables
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    // array that holds users guesses
    var guessesSoFar = [];
    var userGuess = null;
    var letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

    document.onkeyup = function(event) {
      
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      
      if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
        guessesLeft--;
      }
      //
      if (letterToBeGuessed == userGuess) {
        wins++;
        console.log("You won!");
        guessesLeft = 9;
        guessesSoFar = [];
        letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
      }

      if (guessesLeft == 0) {
        losses++;
        console.log("You lost!");
        guessesLeft = 9;
        guessesSoFar = [];
        letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
      }

      var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h2>Guess what letter I'm thinking of.</h2></p>" + "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>" + "<p><h3>Guesses Left: " + guessesLeft + "</h3></p>" + "<p><h2>Your guesses so far: " + guessesSoFar + "</h2></p>";
      // place html into the game ID
      document.querySelector("#game").innerHTML = html;

    }

    </script>