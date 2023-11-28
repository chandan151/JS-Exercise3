
$("#btn-1").on('click', function() {
    $('.mouth').removeClass('s-mouth').removeClass('a-mouth').addClass('h-mouth');
    $('.eye').removeClass('s-eye').removeClass('a-eye');
    $('.nose').removeClass('a-nose');
});

$("#btn-2").on('click', function() {
    $('.mouth').removeClass('h-mouth').removeClass('a-mouth').addClass('s-mouth');
    $('.eye').removeClass('h-eye').removeClass('a-eye');
    $('.nose').removeClass('a-nose');
});

$("#btn-3").on('click', function() {
    $('.mouth').removeClass('h-mouth').removeClass('s-mouth').addClass('a-mouth');
    $('.eye').removeClass('h-eye').removeClass('s-eye').addClass('a-eye');
    $('.nose').addClass('a-nose');
});

