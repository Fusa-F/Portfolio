$(function(){
    var speed=800;
    var windowHeight = $(window).height();

    $('.effect').t({
        speed: 100,               // 文字の表示スピード。タイピングのスピード。
        speed_vary: true,         // 「true」にすると人間が入力しているかのように文字ごとのスピード。
        delay: 1,                 // 開始時間。
        locale: 'en',             // キーボードのレイアウト「en」か「de」から選択。
        caret: true,     //カーソルの表示非表示、若しくはカーソル自体の指定。
        blink: true,             // カーソルを点滅させるかどうか。
    });
    
    $('.top-btn').click(function() {     
        $('html, body').animate({scrollTop:0},speed); 
    });
    $('.intro-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#introduction').offset().top-56},speed);     
    });
    $('.skill-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#skills').offset().top-56},speed);     
    });
    $('.ser-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#services').offset().top-56},speed);     
    });
    $('.works-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#works').offset().top-56},speed);     
    });
    $('.cont-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#contact').offset().top-56},speed);     
    });

    $(window).scroll(function (){
        var scroll = $(window).scrollTop();

        $('.fadein,.section-title').each(function(){
            var targetElement = $(this).offset().top;
            if (scroll > targetElement - windowHeight +200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });

        $('#services').each(function(){
            var target = $(this).offset().top;
            if(scroll >= target){
                $('#top').addClass('bg-none');
                $('.background').removeClass('bg-none');
            }else{
                $('#top').removeClass('bg-none');
                $('.background').addClass('bg-none');
            }
        });

        $('#introduction').each(function(){
            var thisOffset = $(this).offset().top -windowHeight  + $(this).outerHeight();
            if( scroll + windowHeight > thisOffset){
                $('header').addClass('change-back-color');
            } else {
                $('header').removeClass('change-back-color');
            }
        });
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
                    centerPadding: '80px',
                }
            },
            {breakpoint: 501,
                settings: {
                    centerPadding: 0,
                }
            }
        ]
    });
});