$(document).ready(function () {
    $("#name").fadeOut(7000)
    $("#work").delay(6800).hide().fadeIn(950)
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