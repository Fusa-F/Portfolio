$(function(){
    setTimeout('stopload()',1000);
});

function stopload(){
    $('#page').css('display','block');
    $('#loading').delay(900).fadeOut(800);
}