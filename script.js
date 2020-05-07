$(window).on('load',function(){
    $('.container .start').css('display','flex').hide().fadeIn(500).delay(500).fadeOut(1000);
    $('.container .home').css('display','flex').hide().delay(2000).fadeIn(100);
    $('.container .home ul li').on('click',function(){
        $(this).parent().parent().fadeOut();
        $('.container .chat').css('display','flex').hide().fadeIn();
    });
    $('.fa-arrow-left').on('click', function(){
        $('.container .chat').fadeOut(100);
        $('.container .home').css('display','flex').hide().fadeIn(100);
    });
    $('.container .chat .send .sendArea input').on('change', function(){
        var x = $(this).val();
        //console.log(x);
        var d = new Date().getHours();
        var m = new Date().getMinutes();
        d = String(d);
        m = String(m);
        var v = $('.container .chat .chatArea ul').html();
        v += y + x + z + d + ':' + m + w + yl + arr + z + d + ':' + m + w;
        $('.container .chat .chatArea ul').html(v);
        $(this).val('');
    });
});
var y = '<li class="right"><h3><p class="text">';
var yl = '<li class="left"><h3><p class="text">'
var z = '</p><p class="time">';
var w = '</p></h3></li>';
var arr = "Author:- masterpranay";