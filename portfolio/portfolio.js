$(function(){
    var speed=800;

    $('.top-btn').click(function() {     
        $('html, body').animate({scrollTop:0},speed);     
    });
    $('.intro-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#introduction').offset().top-40},speed);     
    });
    $('.skill-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#skills').offset().top-40},speed);     
    });
    $('.ser-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#services').offset().top-40},speed);     
    });
    $('.works-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#works').offset().top-40},speed);     
    });
    $('.cont-btn').click(function() {     
        $('html, body').animate({scrollTop:$('#contact').offset().top-40},speed);     
    });

    $(window).scroll(function (){
        $('.fadein,.section-title').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });

    $('#submit-btn').hover(
        function(){
            $(this).val('送信');
        },
        function(){
            $(this).val('SUBMIT');
        }
    );

    $('.slider').slick({
        dots: true, //ページャーを表示（スライダー下の黒い丸）
        centerMode: true, //要素を中央寄せにする
        centerPadding: '10%', //両サイドの見えている部分のサイズ
        autoplay: true, //自動で画像を切り替える
        autoplaySpeed: 3000, //自動で画像が切り替えられるまでの時間 1000 = 1秒
        speed: 1500,
        adaptiveHeight: true,
        swipeToSlide: true,
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