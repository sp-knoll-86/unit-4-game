$(document).ready(function () {
    // random number to start the game
    var targetNumber = Math.floor(Math.random() * 85 + 15);
    // console.log(targetNumber);
    $("#currentnumber").text(targetNumber);

    // random number variables for the crystals
    var number1 = Math.floor(Math.random() * 15 + 1);
    var number2 = Math.floor(Math.random() * 15 + 1);
    var number3 = Math.floor(Math.random() * 15 + 1);
    var number4 = Math.floor(Math.random() * 15 + 1);
    console.log(number1)
    console.log(number2)
    console.log(number3)
    console.log(number4)

    // variables for wins, losses, userNumber
    var wins = 0;
    var losses = 0;
    var userNumber = 0;

    $("#win").text("Wins: " + wins);
    $("#loss").text("Losses: " + losses);

    // // dynamically add crystal images
    // var numberOptions = [number1, number2, number3, number4];
    // var crystals = ["assets/images/crystal11", "assets/images/crystal22", "assets/images/crystal33", "assets/images/crystal44"];

    // for (var i = 0; i < numberOptions.length; i++) {
    //     var imageCrystal = $("<img>");
    //     for (var j = 0; j < crystals.length; j++) {
    //             imageCrystal.attr("src", crystals[j]);
    // }
    //     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    //     $(".crystal").append(imageCrystal);
    //     console.log(imageCrystal)
    // }

    // reset function
    function reset() {
        targetNumber = Math.floor(Math.random() * 85 + 15);
        $("#currentnumber").text(targetNumber);
        number1 = Math.floor(Math.random() * 15 + 1);
        number2 = Math.floor(Math.random() * 15 + 1);
        number3 = Math.floor(Math.random() * 15 + 1);
        number4 = Math.floor(Math.random() * 15 + 1);
        userNumber = 0;
        $("#scoredisplay").text(userNumber);
        console.log(number1);
        console.log(number2);
        console.log(number3);
        console.log(number4);
    }

    // function to be called if user wins
    function winner() {
        wins++;
        $("#win").text("Wins: " + wins);
        reset();
    }

    // function to be called if user loses
    function loser() {
        losses++;
        $("#loss").text("Losses: " + losses);
        reset();
    }

    // determines win/loss
    function game() {
        // on click for crystals
        $("#crystal1").on("click", function () {
            userNumber = userNumber + number1;
            $("#scoredisplay").text(userNumber);
            if (userNumber == targetNumber) {
                winner();
            }
            else if (userNumber > targetNumber) {
                loser();
            }
        })

        $("#crystal2").on("click", function () {
            userNumber = userNumber + number2;
            $("#scoredisplay").text(userNumber);
            if (userNumber == targetNumber) {
                winner();
            }
            else if (userNumber > targetNumber) {
                loser();
            }
        })

        $("#crystal3").on("click", function () {
            userNumber = userNumber + number3;
            $("#scoredisplay").text(userNumber);
            if (userNumber == targetNumber) {
                winner();
            }
            else if (userNumber > targetNumber) {
                loser();
            }
        })

        $("#crystal4").on("click", function () {
            userNumber = userNumber + number4;
            $("#scoredisplay").text(userNumber);
            if (userNumber == targetNumber) {
                winner();
            }
            else if (userNumber > targetNumber) {
                loser();
            }
        })
    }
    game();
})