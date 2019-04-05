
$("#won").hide();


//global variables
let startpoint = 0
let endpoint = 100
let midpoint = Math.floor((startpoint + endpoint) / 2)

//first guess
$("#yes").on("click", function () {
    console.log("I'm working")
    $("#guesses").val(midpoint)
    console.log(midpoint)
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


})

//if secret number less than guess
$("#less").on('click', function () {
    endpoint = midpoint
    midpoint = Math.floor((startpoint + endpoint) / 2)
    $("#guesses").val(midpoint)

})



//reload the game
$(document).on("click", "#yes2", function () {
    location.reload(true);
});





