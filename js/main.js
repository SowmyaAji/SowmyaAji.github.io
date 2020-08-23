// hide and show the text in the index page alternating with modals.
$(".custom").on('click', function () {
    $("#name").hide();
})
$(".close-button, .reveal-overlay").on('click', function () {
    $("#name").show();
})

// use foundation.js to generate modals
$(document).foundation();
$('#codeModal1').click(function () {
    $.ajax
        ({
            url: "myUrl",
            type: "POST",
            success: function (result) {
                $('#codeModal').html(resp.html).foundation('open');
            }
        });
});

// used for the images slider in the getJustice app details, built with foundation.js
var images = [
    'https://placeholdit.imgix.net/~text?txtsize=33&txt=one&w=100&h=100',
    'https://placeholdit.imgix.net/~text?txtsize=33&txt=two&w=100&h=100',
    'https://placeholdit.imgix.net/~text?txtsize=33&txt=three&w=100&h=100',
    'https://placeholdit.imgix.net/~text?txtsize=33&txt=four&w=100&h=100'
];

// image array used for the background image in the index page
const imgArray = ['../images/bulls2.jpg', '../images/mineshaft.jpg', '../images/paypal1.jpeg', '../images/web.jpeg', '../images/tree.jpg', '../images/panda.jpeg', '../images/Read.jpg', '../images/side.jpg', '../images/Sri.jpeg', '../images/forest1.jpg', '../images/PayPal.jpg', '../images/rang.jpg', '../images/propic.jpg', '../images/kathak.jpg', '../images/back2.jpg', '../images/blacknwhite.jpg', '../images/apps.png'];

const introText = ['flown in helicopters', 'gone down mineshafts.', 'a passion for code.', 'hosted web and radio shows.', 'scaled trees.', 'met a rocket scientist.', 'written three novels.', 'acted in a soap opera.', 'interviewed 4 Prime Ministers', 'slept in forests.', "worked in corporate houses.", "hung out with Picasso's model.", 'taught computer programming.', 'performed 4 dance forms.', "wandered 7 countries.", 'witnessed riots.', 'built 20 apps.']

let i = 0;

const changeImage = setInterval(
    function () {
        $('#image').css('background-image', "url('" + imgArray[i] + "')");
        $('#int').text(introText[i]);
        console.log(introText[i])
        i++;
        if (imgArray.length == i) {
            i = 0;
        }
    }, 4000)

function alertWindow() {
    let txt;
    let newLine = "\r\n"
    const answer = prompt("Guess the lie! Type the line number:  " + newLine + "1. I have flown in helicopters." + newLine + "2. I have gone down mineshafts." + newLine + "3. I have a passion for code." + newLine + "4. I have hosted web and radio shows." + newLine + "5. I have scaled trees." + newLine + "6. I have met a rocket scientist." + newLine + "7. I have written three novels." + newLine + "8. I have acted in a soap opera." + newLine + "9. I have interviewed 4 Prime Ministers" + newLine + "10. I have slept in forests." + newLine + "11. I have worked in corporate houses." + newLine + "12. I have hung out with Picasso's model." + newLine + "13. I have taught computer programming." + newLine + "14. I have performed 4 dance forms." + newLine + "15. I have wandered 7 countries." + newLine + "16. I have witnessed riots." + newLine + "17. I have built 20 apps.")
    if (answer == null || "") {
        txt = "Hey, do play! See About Me 👇 or Apps 👉 for clues or click my name 👆 for my resume!"
    }
    else if (answer === "5") {
        txt = "You got that right! I have not scaled trees, though I aspire to. See About Me 👇 or Apps 👉 or click my name 👆for my resume."
    }
    else {
        txt = "You got that wrong! See About Me 👇 or Apps 👉 for clues or click my name 👆 for my resume. And play again!"
    }
    $("#answer").html(txt);
    setTimeout(function () {
        if ($('#answer').length > 0) {
            $('#answer').html("");
        }
    }, 7000)

}