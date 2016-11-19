var landing = {

    $firstBlock: null,
    $scrollArrow: null,
    $prizes: null,
    $checkPromocodeodeBtn: null,
    $promocodeInput: null,
    $submitBtn: null,
    $emailInput: null,
    $checkbox: null,
    $addNewIdeaBtn: null,
    $emailContent: null,
    $completeText: null,
    $errorBoxes: null,
    $weekRequestSubmit:null,

    promocodeChecked: false,
    prizeChecked: false,
    isInited: false,

    errorMessages: [
        'Чтобы продолжить, необходимо ввести промо-код',
        'Возможно, промо-код введен неверно, попробуй еще раз!',
        'Этот промо-код уже был активирован на сайте, попробуй ввести другой!',
        'Этот приз уже есть в твоем списке, выбери другой. Попробуй что-то новое!',
        'E-mail введен некорректно',
        'Необходимо согласиться с правилами'
    ],

    promocodeForm:  '<button class=\"js-promocode-submit button-type1 activate-btn\">АКТИВИРОВАТЬ</button>'+
                    '<div class=\"promocode-descr\">Чтобы выиграть осуществление плана и получить в подарок бесплатную подписку на MyBook</div>',


    init: function() {
        var self = this;

        self.setVars();
        self.setBlockHeight();
        self.createErrorBoxes();
        self.setEvents();
        
    },

    setVars: function() {
        var self = this;

        self.$firstBlock = $('.js-block-height');
        self.$scrollArrow = $('.js-scroll-arrow');
        self.$prizes = $('.js-prize-item');
        self.$errorBoxes = $('.js-error-box');
        self.$weekRequestSubmit = $('.js-promocode-submit');
        self.$checkPromocodeodeBtn = $('.js-promocode-check');
        self.$promocodeInput = $('.js-promocode-input');
    },

    setBlockHeight: function() {
        var self = this,
            windowHeight = $(window).height();

        self.$firstBlock.height(windowHeight);
    },

    createErrorBoxes: function() {
        var self = this,
            emailLayout = '<div class=\"js-error error_msg-box\"></div>';

        self.$errorBoxes.append(emailLayout);
    },

    setEvents: function() {
        var self = this;

        $(window).resize(function(){
            self.setBlockHeight();
        });

        self.$scrollArrow.on('click', function(){
            self.scrollToElement($(this).attr('data-scrollto'));
        });

        self.$prizes.on('click', function(){
            var $this = $(this);

            self.openPromocodeForm($this);
        });

        self.$prizes.hover(function(){
            var $this = $(this);

            if (!$this.hasClass('active') && !$this.hasClass('wrong')) {
                self.$prizes.removeClass('hover');
                $this.addClass('hover');
            }
        }, function(){
            self.$prizes.removeClass('hover');
        });

        self.$checkPromocodeodeBtn.click(function(e){
            if (!$(this).hasClass('loading')) {
                $(this).addClass('loading');
                self.checkPromocode(e);
            }
        });

    },

    checkPromocode: function(e) {

        var self = this;

        e.preventDefault();

        if (self.$promocodeInput.val().length == 8) {
            self.hideError(self.$promocodeInput.parent('.js-error-box'));

            $.post(Routing.generate('liptonlist_web_ajax_check_code', {code: self.$promocodeInput.val()}))
                .done(function (res) {
                    $('.js-promocode-check').removeClass('loading');
                    if (res.success == true) {
                        self.scrollToElement('prizes-list');
                        self.promocodeChecked = true;
                    }else{
                        self.promocodeChecked = false;
                        if (res.needAuth==true){
                            popup.togglePopupVisibility(true);
                            popup.showContent('auth');
                        }else{
                            self.showError(self.$promocodeInput.parent('.js-error-box'), res.message, true);
                        }
                    }
                });
        }
        else {
            $('.js-promocode-check').removeClass('loading');
            self.showError(self.$promocodeInput.parent('.js-error-box'), self.errorMessages[1], true);
            self.promocodeChecked = false;
        }
    },

    setPrizeActive: function($this) {
        var self = this;

        if (!$this.hasClass('active') && !$this.hasClass('wrong')) {
            //self.$prizes.removeClass('active');
            $this.addClass('active');
            self.$prizes.find($('.js-error')).fadeOut(250);
            $('.js-prize-descr', $this).show();
            $('.js-promocode-form-box', $this).empty();
        }
    },

    openPromocodeForm: function($this) {
        var self = this;

        if (!$this.hasClass('active') && !$this.hasClass('wrong') && !$this.hasClass('opened')) {
            self.$prizes.removeClass('opened');
            $('.js-prize-descr').show();
            $('.js-prize-descr', $this).hide();
            $('.js-promocode-form-box').empty();
            $('.js-promocode-form-box', $this).html(self.promocodeForm);
            $this.addClass('opened');
            self.setPromocodeSubmitBtn();
        }
    },

    setPromocodeSubmitBtn: function() {

        var self=this;
        $('.js-promocode-submit').on('click', function(e){
            e.preventDefault();

            var that=$(this);
            var prizeId=that.parents('.js-prize-item').data('prize-id');
            var code=$('.js-promocode-input').val();

            if (code.length == 8) {

                $.post(Routing.generate('liptonlist_web_ajax_send_week_prize_request', {code: code, prizeId: prizeId }))
                    .done(function (res) {
                        if (res.success == true) {
                            self.setPrizeActive(that.parents('.js-prize-item'));
                            setTimeout(function() {
                                popup.togglePopupVisibility(true);
                                popup.showContent('gs');
                                popup.$popup.addClass('no-bg');
                            }, 1000);

                        }else{
                            if (res.needAuth==true){
                                popup.togglePopupVisibility(true);
                                popup.showContent('auth');
                            }else{
                                self.showError($('.js-promocode-input').parent('.js-error-box'), res.message, true);
                                self.scrollToElement('prizes');
                               // alert(res.message);
                            }
                        }
                    });
            }
            else {
                self.showError($('.js-promocode-input').parent('.js-error-box'), self.errorMessages[1], true);
                self.scrollToElement('prizes');
            }
        });
    },

    showError: function(element, text, addParameters) {   /* addParameters - true or false */
        if (addParameters) {
            element.addClass('error');
        }
        $('.js-error', element).html(text).show();
    },

    hideError: function(element) {
        element.removeClass('error');
        $('.js-error', element).fadeOut();
    },

    scrollToElement: function(element) {
        $('html, body').animate({
            scrollTop: $('.js-'+element).offset().top
        }, 1000, 'easeOutQuart');
    }


};



var userForms = {

    $passRecoveryBtn: null,
    $backBtn: null,
    $regBtn: null,
    $ideaBtn: null,
    $toStep2: null,
    $toStep3: null,
    $stepBack: null,
    $manifestBtn: null,

    isInited: false,
    currentPicUrl: null,


    init: function() {
        var self = this;

        self.setVars();
        self.setEvents();

    },

    setVars: function() {
        var self = this;

        self.$passRecoveryBtn = $('.js-forget-pass-btn');
        self.$backBtn = $('.js-back-btn');
        self.$regBtn = $('.js-reg-btn');
        self.$ideaBtn = $('.js-idea-btn');
        self.$toStep2 = $('.js-idea-to-step2');
        self.$toStep3 = $('.js-idea-to-step3');
        self.$manifestBtn = $('.js-manifest-btn');
        self.$stepBack = $('.js-idea-back');
    },
    
    setCurrentPicUrl: function() {
        var self = this,
            img_src;
        
        self.currentPicUrl = $('.js-img-main-request-preview.current').attr('data-car-url');
        img_src = 'url('+self.currentPicUrl+')';
        $('.js-img-main-request-preview-last').css('background-image', img_src);
    },

    setEvents: function() {
        var self = this;

        self.$passRecoveryBtn.on('click', function(e) {
            e.preventDefault();
            popup.showContent('pass-rec');
        });
        self.$backBtn.on('click', function(e) {
            e.preventDefault();
            popup.showContent('auth');
        });
        self.$regBtn.on('click', function(e) {
            e.preventDefault();
            popup.showContent('reg');
        });
        self.$ideaBtn.on('click', function(e) {
            e.preventDefault();
            popup.togglePopupVisibility(true);
            popup.showContent('step1');
        });
        self.$toStep2.on('click', function(e) {
            e.preventDefault();
            if (!self.$toStep2.hasClass('disabled')) {
                var ideaText = $('.js-idea-title-input').val();
                $('.js-idea-card-user-title').html(ideaText);
                popup.showContent('step2');
            }
            if (self.isInited) {
                //reInit();
            }
            else {
                init();
            }
            self.isInited = true;
        });
        self.$toStep3.on('click', function(e) {
            e.preventDefault();
            var inputValue = userForms.currentPicUrl
            $('#main-prize-request-image-name').val(inputValue);
            popup.showContent('step3');
        });
        self.$manifestBtn.on('click', function() {
            popup.togglePopupVisibility(true);
            popup.showContent('manifest');
            if ($('.js-video-manifest').length) {
                $('.js-video-manifest').get(0).play();
            }
        });
        self.$stepBack.on('click', function(e) {
            e.preventDefault();
            popup.showContent('step1');
        });
    }

};


var popup = {
    $openBtn: null,
    $popup: null,
    $closeBtn: null,
    $container: null,
    $content: null,
    $popupForms: null,

    init: function() {
        var self = this;

        self.setVars();
        self.setEvents();
        self.getContent();
    },

    setVars: function() {
        var self = this;

        self.$openBtn = $('.js-user-forms-open');
        self.$popup = $('.js-popup');
        self.$closeBtn = $('.js-uf-close');
        self.$container = $('.js-popup-container');
        self.$content = $('.js-uf-content');

    },

    setEvents: function() {
        var self = this;

        self.$openBtn.on('click', function(){
            if (!$('body').hasClass('auth')) {
                self.togglePopupVisibility(true);
                self.showContent('auth');
            }
            else {
                window.location.href=Routing.generate('web_user_profile');
            }
        });

        self.$closeBtn.on('click', function(){
            self.togglePopupVisibility(false);
            //self.reInitContent();
        });
    },

    reInitContent: function() {
        var self = this;

        self.$popupForms.hide();
        self.showContent('auth');
    },

    togglePopupVisibility: function(toShow) {
        var self = this;

        //self.togglePopupBackground();

        self.$popup.removeClass('no-bg');

        if (toShow) {
            self.$popup.fadeIn(250);
        }
        else {
            self.$popup.fadeOut(150);
            if ($('.js-video-manifest').length) {
                $('.js-video-manifest').get(0).pause();
            }
        }
    },

    togglePopupBackground: function() {
        $('body').toggleClass('fixed');
    },

    getContent: function() {
        var self = this;
        self.$content.html(self.$container.html());
        self.$container.empty();
        self.$popupForms = $('.js-popup-forms');
        userForms.init();
        authForm.init();
        passRecoveryForm.init();
        regForm.init();
    },

    showContent: function(block) {
        var content = $('.js-' + block),
            self = this;

        self.$popupForms.hide();
        content.show();
    }
};

function scrollByHash() {
    var hash = window.location.hash;

    //hash=hash.substr(0, hash.indexOf('?'));

    hash=hash.split('?')[0];

    if (hash == '#week_prize') {
        landing.scrollToElement('prizes');
    }
    else if (hash == '#main_prize') {
        popup.togglePopupVisibility(true);
        popup.showContent('step1');
    }
    else if (hash == '#gallery') {
        landing.scrollToElement('gallery');
    }
    else if (hash == '#products') {
        landing.scrollToElement('products');
    }
}

function chengePlaceholder() {
    var placeholders = [
        'Пройду подготовку и заберусь на Эверест, чтобы поверить в свои силы',
        'Отправлюсь в археологическую экспедицию, чтобы узнать новое о мире',
        'Куплю воздушный шар и стану воздухоплавателем, чтобы показывать, как прекрасен мир',
        'Cтану режиссером и сниму фильм, который сделает мир чуточку лучше',
        'Спущусь на дно Большого Барьерного рифа и увижу красоту мира с нового ракурса',
        'Обучусь профессионально танцам, чтобы исполнить мечту детства и станцевать в мюзикле',
        'Получу важную роль и снимусь в кино, чтобы порадовать маму',
        'Куплю фургон и буду разъезжать на нем, продавая мороженое и радуя людей',
        'Пересеку Россию на велосипеде, чтобы доказать себе, что все возможно'
    ]
    setInterval(function(){
        var rand = 0 + Math.random() * (placeholders.length - 0);
        rand = Math.round(rand);

        $('.js-idea-title-input').attr('placeholder', placeholders[rand]);
    }, 5000);
}

function showMorePrizes() {
    $('.js-prizes-list').children('li').addClass('prizes_list-item');
}
function showPrizesAtStart() {
    var windowWidth = $(window).width(),
        counter;

    if (windowWidth > 983) {
        counter = 9;
    }
    else if (windowWidth <= 983 && windowWidth > 783) {
        counter = 6;
    }
    else {
        counter = 3;
    }

    for (var i = 0; i < counter; i++) {
        $('.js-prizes-list li').eq(i).addClass('prizes_list-item');
    }


}


$(document).ready(function(){
    
    landing.init();

    popup.init();

    setTimeout(function(){
        scrollByHash();
    }, 500);


    $('.js-weborama-click').click(function(){
        var weboramaHtml = '<img src=\"http://adv.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=2865&a.cp=123&a.ct=c\" style=\"display: none;\">';
        $('body').prepend(weboramaHtml);
    });

    if ($('body').hasClass('auth')) {
        $('.js-username').append(', <a href=\"logout\">выйти</a>');
    }
    $('.js-menu').click(function(){
        $(this).toggleClass('opened');
        $('.js-menu-list').toggleClass('opened');
    });


    $('.js-menu-list-item').on('click', function(){
        var scrollto = $(this).attr('data-scrollto');
        landing.scrollToElement(scrollto);
    });

    $('.js-idea-title-input').on('keyup', function(){
       if ($(this).val() != '') {
           $('.js-idea-to-step2').removeClass('disabled');
       }
        else {
           $('.js-idea-to-step2').addClass('disabled');
       }
    });

    $('.js-prizes-more-btn').click(function(){
        $(this).hide();
        $('.js-prizes-list').addClass('opened');
        showMorePrizes();
    });
    
    chengePlaceholder();
    showPrizesAtStart();

});

$(window).resize(function () {
    showPrizesAtStart();
});


