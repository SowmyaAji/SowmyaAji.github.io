//hide the victory/edge case messages till needed
$("#won").hide();
$("#cheat").hide();

//global variables
let startpoint = 0
let endpoint = 100
let midpoint = Math.floor((startpoint + endpoint) / 2)
let counter = 0

//first guess
$("#yes").on("click", function () {

    $("#guesses").val(midpoint)

    counter = counter + 1
    $("#count").val(counter)
    seventhCount()

})


//if guess equal secret number
$("#equals").on('click', function () {
    $("#guesses").val() === "="
    $("#won").show();
})

//if secret number more than guess
$("#more").on('click', function () {
    startpoint = midpoint
    midpoint = Math.floor((startpoint + endpoint) / 2)
    $("#guesses").val(midpoint)
    counter = counter + 1
    $("#count").val(counter)
    seventhCount()

})

//if secret number less than guess
$("#less").on('click', function () {
    endpoint = midpoint
    midpoint = Math.floor((startpoint + endpoint) / 2)
    $("#guesses").val(midpoint)
    counter = counter + 1
    $("#count").val(counter)
    seventhCount()


})

//if someone cheats
function seventhCount() {
    if (counter > 7) {
        console.log(counter)
        $("#cheat").show();
        counter = 7
    }

}


//reload the game
$(document).on("click", ".yes2", function () {
    location.reload(true);
});




