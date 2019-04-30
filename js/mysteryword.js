$("#hide").hide();
$("#guess").hide();



let wordArray = ["Able", "Absence", "Alloy", "Affiliate", "Afford", "Absolute", "Assinine", "Accommodate", "Agile", "Apply", "Ant", "As", "Antagonize", "Accrue", "Accordion", "According"]

let easyWord = wordArray.filter(elem => elem.length < 6)
let mediumWord = wordArray.filter(elem => elem.length > 6 && elem.length <= 8)
let hardWord = wordArray.filter(elem => elem.length > 8)

let myWord = (words) => {
    let sWord = words[Math.floor(Math.random() * words.length)];
    let secWord = sWord.toUpperCase();
    let length = secWord.length;
    let underlines = []
    for (let letter of secWord) {
        underlines.push("_ ")
    }

    let blanks = $("#blanks");
    blanks.empty()
        .append(
            "You have got a ", length, "  letter word:  ",
            "  ",

            underlines,


        )
    $("#guess").show()
    let guesses = 8;
    let guessedLetters = []

    $("#go").on('click', function () {
        let letter = $("#letter").val().toUpperCase();
        guessedLetters.push(letter)
        let displayWord = []


        for (let i = 0; i < secWord.length; i++) {
            if (guessedLetters.includes(secWord[i])) {
                displayWord.push(secWord[i])


            }
            else {
                displayWord.push("_")
            }
        }
        console.log(displayWord)
        blanks.empty()
            .append(
                displayWord
            )

        let choices = $("#choices")
        choices
            .empty()
            .append("Your guessed letters:  ",
                guessedLetters
            )
        if (!secWord.includes(letter) && letter !== "_") {
            guesses = guesses - 1;
        }

        let guessnum = $("#guesses")
        guessnum
            .empty()
            .append(
                "Guesses you have left are: ",
                guesses
            )

        if (displayWord.join("") === secWord) {
            $("#win").append(
                "You have won!",
                $("#hide").show()

            )

        }

        if (guesses === 0) {
            guessnum.empty()
                .append(
                    "Sorry you have run out of guesses. The word was ", secWord,
                    $("#hide").show()

                )
        }
        $("#letter").val("")

    })

}


$("#e").on('click', function () {
    myWord(easyWord);
})

$("#m").on('click', function () {
    myWord(mediumWord);
})

$("#d").on('click', function () {
    myWord(hardWord);
})

function playAgain() {
    $(document).on("click", "#repeat", function () {
        location.reload(true);
    });

}

playAgain()