$(document).on('touchmove', function (e) {
    e.preventDefault();
});
//uses body because jquery on events are called off of the element they are
//added to, so bubbling would not work if we used document instead.
$('body').on('touchstart', '.scrollable', function (e) {
    if (e.currentTarget.scrollTop === 0) {
        e.currentTarget.scrollTop = 1;
    } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
        e.currentTarget.scrollTop -= 1;
    }
});
//prevents preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove', '.scrollable', function (e) {
    e.stopPropagation();
});







$(".custom").on('click', function () {
    $("#name").hide();
})

$(".close-button").on('click', function () {
    $("#name").show();
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