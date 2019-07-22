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