$(".custom").on('click', function () {
    $("#name").hide();
})

$(".close-button, .reveal-overlay").on('click', function () {
    $("#name").show();
})




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

var images = [
    'https://placeholdit.imgix.net/~text?txtsize=33&txt=one&w=100&h=100',
    'https://placeholdit.imgix.net/~text?txtsize=33&txt=two&w=100&h=100',
    'https://placeholdit.imgix.net/~text?txtsize=33&txt=three&w=100&h=100',
    'https://placeholdit.imgix.net/~text?txtsize=33&txt=four&w=100&h=100'
];

const imgArray = ['../images/side.jpg', '../images/Paypal.jpg', '../images/back2.jpg', '../images/paypal1.jpeg', '../images/bulls2.jpg'];

let i = 0;
const changeImage = setInterval(
    function () {
        $('body').css('background-image', "url('" + imgArray[i] + "')");
        i++;
        if (imgArray.length == i) {
            i = 0;
        }
    }, 20000)