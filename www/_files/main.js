$(document).on('ready', function() {

    var responsive_viewport = $(window).width(),
        $sliderBtnLeft = $('.landing-carousel__btn_left'),
        $sliderBtnRight = $('.landing-carousel__btn_right'),
        currentIndex = 1;

    if (responsive_viewport > 480) {
        $('.landing-carousel__list').bxSlider({
            auto : true,
            pager : false,
            //autoHover: true,
            pause: 15000,
            adaptiveHeight: true
        });
    } else {
        $('.landing-carousel__list').bxSlider({
            auto : true,
            pause : 15000,
            autoHover: true,
            pager : true,
            adaptiveHeight: true,
            onSlideAfter : function($slideElement, oldIndex, newIndex){
                $('.landing-carousel__inner-list').css('left', 0);

                currentIndex = 1;
            }
        });

        $('.landing-carousel__inner-list').each(function(){
            var itemsLength = $(this).find('.landing-carousel__il-item').length;

            $(this).width( responsive_viewport*itemsLength );
        });

        $('.landing-carousel__il-item').each(function(){

            $(this).width( responsive_viewport );
        })
    }

    $sliderBtnLeft.on('click', function(e){
        e.preventDefault();

        var responsive_viewport = $(window).width(),
            $currentList = $(this).siblings('.landing-carousel__inner-list'),
            $currentPosition = $currentList.position().left;

        if ( $currentPosition == 0 ) {

           // $('.landing-carousel .bx-prev').click();

            currentIndex = 1;

            $currentList.css('left', - ( $currentList.width() - responsive_viewport));

        } else {

            $currentList
                .stop(true, true)
                .css({
                    'left': '+=' + responsive_viewport
                });

            currentIndex --;

        }
    });

    $sliderBtnRight.on('click', function(e){
        e.preventDefault();

        var responsive_viewport = $(window).width(),
            $currentList = $(this).siblings('.landing-carousel__inner-list'),
            $currentPosition = $currentList.position().left;

        if ( $currentPosition <= - ( $currentList.width() - responsive_viewport) ) {

            currentIndex = 1;

            //$('.landing-carousel .bx-next').click();

            $currentList.css('left', 0);


        } else {

            $currentList
                .stop(true, true)
                .css({
                    'left': '+=-' + responsive_viewport
                });

            currentIndex ++;
        }
    });

    $('.bx-controls-direction, .bx-pager-item').on('click', function(){

        setTimeout(function(){
            $('.landing-carousel__inner-list').css('left', 0);
        },300);

        currentIndex = 1;
    })

});


