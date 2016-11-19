var transformProp = Modernizr.prefixed('transform');

function Carousel3D ( el ) {
    this.element = el;

    this.rotation = 0;
    this.panelCount = 5;
    this.totalPanelCount = this.element.children.length;
    this.theta = 0;

    this.isHorizontal = true;
}

Carousel3D.prototype.modify = function() {

    var panel, angle, i;

    this.panelSize = this.element[ this.isHorizontal ? 'offsetWidth' : 'offsetHeight' ];
    this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
    this.theta = 360 / this.panelCount;

    this.radius = Math.round( ( this.panelSize / 2) / Math.tan( Math.PI / this.panelCount ) );

    for ( i = 0; i < this.panelCount; i++ ) {
        panel = this.element.children[i];
        angle = this.theta * i;
        panel.style.opacity = 1;
        panel.style.backgroundColor = 'transparent';
        panel.style[ transformProp ] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
    }

    for (  ; i < this.totalPanelCount; i++ ) {
        panel = this.element.children[i];
        panel.style.opacity = 0;
        panel.style[ transformProp ] = 'none';
    }

    this.rotation = Math.round( this.rotation / this.theta ) * this.theta;

    this.transform();
};

Carousel3D.prototype.transform = function() {
    this.element.style[ transformProp ] = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';
};



function setLastPicture(counter) {
    var img_src2='url(images/idea/idea-default-image'+counter+'.jpg)';
    $('#main-prize-request-image-name').val('images/idea/idea-default-image'+counter+'.jpg');
    $('.js-img-main-request-preview-last').css('background-image', img_src2);
}

function markCurrentImage(counter) {
    $('.js-car-pic').removeClass('current');
    $('.js-car-pic').eq(counter - 1).addClass('current');
}

var picCounter = 1;

var reInit = function() {
    markCurrentImage(picCounter);
    setLastPicture(picCounter);
}

var carousel;

var init = function() {

    carousel = new Carousel3D( document.getElementById('carousel') );

    var navButtons = document.querySelectorAll('#navigation button'),

        onNavButtonClick = function( event ){
            event.preventDefault();

            var increment = parseInt( event.target.getAttribute('data-increment') );
            carousel.rotation += carousel.theta * increment * -1;
            carousel.transform();
            if (increment > 0) {
                if (picCounter < 5) {
                    picCounter++;
                }
                else {
                    picCounter = 1;
                }
            }
            else {
                if (picCounter > 1) {
                    picCounter--;
                }
                else {
                    picCounter = 5;
                }
            }
            markCurrentImage(picCounter);
            //setLastPicture(picCounter);
            userForms.setCurrentPicUrl();
        };

    carousel.panelCount = 5;
    carousel.modify();
    picCounter = 1;

    markCurrentImage(picCounter);
    //setLastPicture(picCounter);
    userForms.setCurrentPicUrl();

    for (var i=0; i < 2; i++) {
        navButtons[i].addEventListener( 'click', onNavButtonClick, false);
    }

    setTimeout( function(){
        document.body.addClassName('ready');
    }, 0);



};
