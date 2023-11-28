$(".face").on('mouseenter', function () {
    $('.mouth').removeClass('h-mouth').removeClass('s-mouth').removeClass('a-mouth').removeClass('c-mouth').removeClass('e-mouth');
    $('.eye').removeClass('h-eye').removeClass('s-eye').removeClass('a-eye').removeClass('c-eye').removeClass('e-eye');
    $('.nose').removeClass('h-nose').removeClass('s-nose').removeClass('a-nose').removeClass('c-nose').removeClass('e-nose');
});

$(document).keypress(function (event) {
    if (event.which === 13) {
        $('.mouth').removeClass('h-mouth').removeClass('s-mouth').removeClass('a-mouth').removeClass('c-mouth').removeClass('e-mouth');
        $('.eye').removeClass('h-eye').removeClass('s-eye').removeClass('a-eye').removeClass('c-eye').removeClass('e-eye');
        $('.nose').removeClass('h-nose').removeClass('s-nose').removeClass('a-nose').removeClass('c-nose').removeClass('e-nose');
    }
});


$("#btn-1").on('click', function () {
    $('.mouth').removeClass('s-mouth').removeClass('a-mouth').removeClass('c-mouth').removeClass('e-mouth').addClass('h-mouth');
    $('.eye').removeClass('s-eye').removeClass('a-eye').removeClass('c-eye').removeClass('e-eye').addClass('h-eye');
    $('.nose').removeClass('s-nose').removeClass('a-nose').removeClass('c-nose').removeClass('e-nose').addClass('h-nose');
});

$("#btn-2").on('click', function () {
    $('.mouth').removeClass('h-mouth').removeClass('a-mouth').removeClass('c-mouth').removeClass('e-mouth').addClass('s-mouth');
    $('.eye').removeClass('h-eye').removeClass('a-eye').removeClass('c-eye').removeClass('e-eye').addClass('s-eye');
    $('.nose').removeClass('h-nose').removeClass('a-nose').removeClass('c-nose').removeClass('e-nose').addClass('s-nose');
});

$("#btn-3").on('click', function () {
    $('.mouth').removeClass('h-mouth').removeClass('s-mouth').removeClass('c-mouth').removeClass('e-mouth').addClass('a-mouth');
    $('.eye').removeClass('h-eye').removeClass('s-eye').removeClass('c-eye').removeClass('e-eye').addClass('a-eye');
    $('.nose').removeClass('h-nose').removeClass('s-nose').removeClass('c-nose').removeClass('e-nose').addClass('a-nose');
});

$("#btn-4").on('click', function () {
    $('.mouth').removeClass('h-mouth').removeClass('s-mouth').removeClass('a-mouth').removeClass('e-mouth').addClass('c-mouth');
    $('.eye').removeClass('h-eye').removeClass('s-eye').removeClass('a-eye').removeClass('e-eye').addClass('c-eye');
    $('.nose').removeClass('h-nose').removeClass('s-nose').removeClass('a-nose').removeClass('e-nose').addClass('c-nose');
});

$("#btn-5").on('click', function () {
    $('.mouth').removeClass('h-mouth').removeClass('s-mouth').removeClass('a-mouth').removeClass('c-mouth').addClass('e-mouth');
    $('.eye').removeClass('h-eye').removeClass('s-eye').removeClass('a-eye').removeClass('c-eye').addClass('e-eye');
    $('.nose').removeClass('h-nose').removeClass('s-nose').removeClass('a-nose').removeClass('c-nose').addClass('e-nose');
});