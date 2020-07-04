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
const imgArray = ['../images/paypal1.jpeg', '../images/Read.jpg', '../images/side.jpg', '../images/PayPal.jpg', '../images/kathak.jpg', '../images/back2.jpg', '../images/Mask.jpg', '../images/bulls2.jpg'];

let i = 0;

const changeImage = setInterval(
    function () {
        $('body').css('background-image', "url('" + imgArray[i] + "')");
        i++;
        if (imgArray.length == i) {
            i = 0;
        }
    }, 5000)