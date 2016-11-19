function setGalleryItemSize() {
	var itemWidth = $('.js-idea-list > li').width();

	$('.js-idea-list > li').height( itemWidth );
}


$(document).on('ready', function() {
	var $showMoreIdeas = $('.js-more-ideas-btn'),
		$hiddenIdeas = $('.idea-gallery__item_hidden'),
		$galleryItem = $('.idea-gallery__item'),
		galleryItemLength = $( $galleryItem).not('.idea-gallery__item_hidden').length,
		ideasCounter = 1;

	//show more btn

	$showMoreIdeas.on('click', function(e){
		e.preventDefault();

		showMoreIdeas(ideasCounter);
		ideasCounter++;
	});

	// gallery ideas columns

/*	if ( galleryItemLength % 3 == 0 || galleryItemLength % 3 == 1 ){
		$galleryItem.width( '33.3%' );
	} else {
		$galleryItem.width( '25%' );
	}*/

	// resize gallery idea items

	resizeGalleryItem();

	$(window).on('resize', function(){
		resizeGalleryItem();
	});

	function resizeGalleryItem(){
		var itemWidth = $galleryItem.width();

		$galleryItem.height( itemWidth );
	}

	// modal

	setModalEvents();



    var addtionalIdeasAmount = $('body').data('req_count_per_click'); // количество идей, добавляемых на страницу


    function showMoreIdeas(counter) {

        var ideaItemTemplate = $('.js-idea-item-template').html(),
            ideaPopupTemplate = $('.js-idea-popup-template').html(),
            $ideaList = $('.js-idea-list'),
            indexNumber = 0;

        $('.js-more-ideas-btn').addClass('loading');

        $.post(Routing.generate('web_ajax_prize_request_get_more', {'p':counter}), {

        })
            .done(function (res) {
                if (res.success==true){
                    var responseList = res.list;

                    for (var i = 0; i < responseList.length; i++) {
                        indexNumber = i+1+((counter-1)*addtionalIdeasAmount);
                        var dataModalTarget = $('.js-idea-list > li').length + 1;
                        //console.log(responseList);
                        $ideaList.append(ideaItemTemplate);
                        $('.js-idea-image').eq(indexNumber).attr('src', responseList[i].imageName);
                        $('.js-idea-author').eq(indexNumber).html(responseList[i].userName);
                        $('.js-idea-title').eq(indexNumber).html(responseList[i].title);

                        $('.js-idea-gallery-item').eq(indexNumber).attr('data-modal-target', 'gallery-item-'+dataModalTarget)
                            .attr('data-share-image', responseList[i].shareImage)
                            .attr('data-id', responseList[i].id);


                        //setShareButtonClickListener($('.js-idea-list > li').eq(indexNumber+1));
                        setShareButtonClickListener($('.js-idea-gallery-item').eq(indexNumber));





                        $('.idea-gallery__wrapper').append(ideaPopupTemplate);

                        $('.js-gallery-item-modal').eq(indexNumber).attr('data-modal-id', 'gallery-item-'+dataModalTarget)
                            .attr('data-share-image', responseList[i].shareImage)
                            .attr('data-id', responseList[i].id);
                        $('.js-gallery-item-modal__bg').eq(indexNumber).attr('src', responseList[i].imageName);
                        $('.js-gallery-item-modal__name').eq(indexNumber).html(responseList[i].userName);
                        $('.js-gallery-item-modal__title').eq(indexNumber).html(responseList[i].title);
                        $('.js-gallery-item-modal__text').eq(indexNumber).html(responseList[i].description);
                        $('.js-gallery-item-modal__photo1').eq(indexNumber).attr('src', responseList[i].additionalImage1Name);
                        $('.js-gallery-item-modal__photo2').eq(indexNumber).attr('src', responseList[i].additionalImage2Name);
                        $('.js-gallery-item-modal__photo3').eq(indexNumber).attr('src', responseList[i].additionalImage3Name);



                        setShareButtonClickFromModalListener($('.js-gallery-item-modal').eq(indexNumber));


                    }

                    if (responseList.length < addtionalIdeasAmount) {
                        $('.js-idea-btn-box').slideUp(300);
                    }

                    setGalleryItemSize();
                    setModalEvents();
                    responsiveImg();

                    //setShareButtonClicksEvents();
                    $('.js-more-ideas-btn').removeClass('loading');

                }else{
                    $('.js-more-ideas-btn').removeClass('loading');
                }
            });
    }



});

$(window).on('load', function(){
	// responsive images

	responsiveImg();

	$(window).on('resize', function(){
		responsiveImg();
	});
});


function setModalEvents() {
	$('[data-modal-target]').on('click', function(e){

		e.preventDefault();
		var that=$(this);

		if (that.attr('data-share-image')==""){

			html2canvas(that, {
				onrendered: function(canvas) {

					img = canvas.toDataURL("image/png");



					$.post(Routing.generate('web_ajax_save_share_image'), {
							'id': that.attr('data-id'),
							'img': img
						})
						.done(function (res) {
							if (res.success==true){
								imageName='http://list.liptontea.ru'+res.message;

								that.attr('data-share-image', res.message);
								$("div").find("[data-modal-id='" +that.attr('data-modal-target') + "']").attr('data-share-image', res.message);
							}

						});



				}
			});
		}



		var modalId = $(this).data('modal-target'),
			topVal = $(this).position().top;

		if ($(this).hasClass('idea-gallery__item') || $(this).hasClass('idea-gallery__item2')){

			$(this).parents('.idea-gallery')
				.find('.js-modal.opened')
				.removeClass('opened').fadeOut(200);

			setTimeout(function(){
				$('[data-modal-id=' + modalId + ']')
					.addClass('opened')
					.css('top', topVal)
					.fadeIn(300);
			}, 200);


			responsiveImg();
		} else {

			$('[data-modal-id=' + modalId + ']').fadeIn(300);

			responsiveImg();
		}

	});

	$('.modal-close').on('click', function(e){
		e.preventDefault();
		$(this).parents('.js-modal')
			.removeClass('opened').fadeOut(300);
	});
}




function responsiveImg(){
	$('.responsive-img-list').find('img').each(function(){

		var posLeft = 0,
			posTop = 0;

		if ( $(this).width() > $(this).height() ) {


			$(this).css({
				'min-height' : '100%',
				'min-width' : '100%',
				'max-width' : '300%',
				'max-height' : '100%',
				'top' : 0,
				'object-fit': 'cover'
			});

			if ( $(this).parent().width() - $(this).width() < 0 ){
				posLeft = ( $(this).parent().width() - $(this).width() ) / 2 ;

				$(this).css('left', posLeft);
			}

			if ( $(this).parent().height() - $(this).height() < 0 ){
				posTop = ( $(this).parent().height() - $(this).height() ) / 2 ;

				$(this).css('top', posTop)

			}

		} else {

			$(this).css({
				'min-width' : '100%',
				'min-height' : '100%',
				'max-height' : '300%',
				'max-width' : '100%',
				'left' : 0,
				'object-fit': 'cover'
			});

			if ( $(this).parent().height() - $(this).height() < 0 ){
				posTop = ( $(this).parent().height() - $(this).height() ) / 2 ;

				$(this).css('top', posTop)

			}

			if ( $(this).parent().width() - $(this).width() < 0 ){
				posLeft = ( $(this).parent().width() - $(this).width() ) / 2 ;

				$(this).css('left', posLeft);
			}
		}
	});
}
