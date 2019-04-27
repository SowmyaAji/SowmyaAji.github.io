$("#error").hide();
$("#again").hide();
$("#win").hide();
let secNum = randomNum();

let guesses = 0;
let myChoices = []



function check(e, value) {
    //on keys pressed, allow only if character is number
    let unicode = e.charCode ? e.charCode : e.keyCode;
    if (value.indexOf(".") != -1) if (unicode == 46) return false;
    if (unicode != 8) if ((unicode < 48 || unicode > 57) && unicode != 46) return false;
}
function checkLength() {

    //limit characters to four
    $("#go").on('click', function () {
        $("#error").hide();
        let field = $("#fours").val();

        if (field.length === 4) {
            cowBull(field);

        }
        else {

            $("#error").show();
            $("#fours").val("");

        }
    })
}
//generate random number for the players to guess
function randomNum() {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}

//main game function
function cowBull(guess) {
    let bulls = 0;
    let cows = 0;

    let checkNum = String(secNum);



    guesses = guesses + 1;

    let num = 0;
    for (let i = 0; i < guess.length; i++) {

        if (guess[i] === checkNum[i]) {
            bulls = bulls + 1;

        } else if (checkNum.indexOf(guess[i]) > -1) {
            cows = cows + 1;

        }

    }




    $("#results").val(" " + bulls + " bulls,  " + cows + " cows ");
    let results = $('#results').val()

    myChoices.push(guess + " : " + results)
    newChoices = myChoices.join(" ")

    $("#choices").val(newChoices)
    $("#gu").val(guesses)

    $("#fours").val("");
    if (bulls === 4) {
        $("#results").val("You have won! In " + guesses + " guesses!")
        $("#win").show();
        $("#again").show();
        $("#answ").hide();


    }
}
function showAnswer() {
    $("#answer").on('click', function () {
        $("#ans").val(secNum);
        $("#again").show();

    })
}

function playAgain() {
    $(document).on("click", "#repeat", function () {
        location.reload(true);
    });

}
checkLength()
playAgain()
showAnswer()
