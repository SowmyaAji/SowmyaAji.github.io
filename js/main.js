$(document).ready(function () {
    $("#name").fadeOut(10000)
    $("#work").delay(9900).hide().fadeIn(350)
})

$(document).ready(function () {
    $('.fade').slick({
        dots: false,
        infinite: false,
        speed: 300,
        fade: true,
        slide: 'div',
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

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