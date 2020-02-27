$(function(){
    var contents = ['#top','#introduction','#skills','#services','#works','#contact','footer'];
    var btn = ['.top-btn','.intro-btn','.skill-btn','.ser-btn','.works-btn','.cont-btn'];
    var i=0;
    
    function btnEvent(object){
        var speed = 800;
        var num = 56;
        $('html,body').animate({scrollTop: $(object).offset().top - num},speed);
    }
    $(btn[0]).click(function() {  
        btnEvent(contents[0]);     
    });
    $(btn[1]).click(function() {   
        btnEvent(contents[1]);  
    });
    $(btn[2]).click(function() {
        btnEvent(contents[2]);  
    });
    $(btn[3]).click(function() {
        btnEvent(contents[3]);       
    });
    $(btn[4]).click(function() { 
        btnEvent(contents[4]);      
    });
    $(btn[5]).click(function() {
        btnEvent(contents[5]);  
    });

    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        var target = $(contents[i]).offset().top -70;
        var docHeight = $(document).innerHeight();
        var windowHeight = $(window).innerHeight();
        var pageBottom = docHeight - windowHeight;    

        if(scroll >= target){
            $(btn[i]).addClass('change-btn-color');
            if(i<contents.length-1){
                i++;
            }
            if(i>0){
                $(btn[0]).removeClass('change-btn-color');
            }
            if(i>=2){
                $('.header-inner').addClass('change-back-color');
            }else {
                $('.header-inner').removeClass('change-back-color');
            }
            if(i<=1){
                $('.background').removeClass('bg-show');
                $('.backgroundSec').removeClass('bg-show');
            }else if(i>=2 && i<4){
                $('.background').addClass('bg-show');
                $('.backgroundSec').removeClass('bg-show');
            }else if(i>=4){
                $('.background').removeClass('bg-show');
                $('.backgroundSec').addClass('bg-show');
            }else {
                $('.background').removeClass('bg-show');
                $('.backgroundSec').removeClass('bg-show');
            }
        }

        if(scroll < target || pageBottom <= scroll){
            $(btn[i]).removeClass('change-btn-color');
            i--;
        }
        
        $('.fadein,.section-title').each(function(){
            var targetElement = $(this).offset().top;
            if (scroll > targetElement - windowHeight +200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });

    $('.effect').t({
        speed: 10,               // 文字の表示スピード。タイピングのスピード。
        speed_vary: true,         // 「true」にすると人間が入力しているかのように文字ごとのスピード。
        delay: 0.3,                 // 開始時間。
        locale: 'en',             // キーボードのレイアウト「en」か「de」から選択。
        caret: true,     //カーソルの表示非表示、若しくはカーソル自体の指定。
        blink: false,             // カーソルを点滅させるかどうか。
    });

    $('.slider').slick({
        dots: true, //ページャーを表示（スライダー下の黒い丸）
        autoplay: true, //自動で画像を切り替える
        autoplaySpeed: 3000, //自動で画像が切り替えられるまでの時間 1000 = 1秒
        speed: 1500,
        adaptiveHeight: true,
        swipeToSlide: true,
        infinite: false,
        responsive: [
            {breakpoint: 701,
                settings: {
                }
            },
            {breakpoint: 501,
                settings: {
                }
            }
        ]
    });
});