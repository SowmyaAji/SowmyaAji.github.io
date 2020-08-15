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
const imgArray = ['../images/paypal1.jpeg', '../images/tree.jpg', '../images/panda.jpeg', '../images/Read.jpg', '../images/side.jpg', '../images/Sri.jpeg', '../images/forest1.jpg', '../images/PayPal.jpg', '../images/rang.jpg', '../images/back2.jpg', '../images/kathak.jpg', '../images/blacknwhite.jpg', '../images/bulls2.jpg'];

const introText = ['gone down mineshafts..', 'scaled trees', 'met a rocket scientist..', 'written three novels', 'acted in a soap opera..', 'interviewed 4 Prime Ministers', 'slept in forests..', "worked in corporate houses", "hung out with Picasso's model..", 'wandered 7 countries..', 'performed 4 dance forms', 'witnessed riots ..', 'flown in helicopters ..']

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

