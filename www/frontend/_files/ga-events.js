$(document).ready(function () {
    if (typeof(ga) != "undefined"){
        $('.js-idea-btn').click(function(){

            ga('send', 'event', 'buttonClick', 'ClickMainBanner');
        });
        $('.js-manifest-btn').click(function(){
            ga('send', 'event', 'buttonClick', 'ClickPlayVideo');
        });
        $('.js-scroll-arrow').click(function(){
            ga('send', 'event', 'buttonClick', 'ClickArrowDown');
        });
        $('.js-full-rules-link').click(function(){
            ga('send', 'event', 'buttonClick', 'ClickRules');
        });
        $('.js-pdf-view').click(function(){
            ga('send', 'event', 'buttonClick', 'ClickRulesPDF');
        });
        $('.mybook__logo').click(function(){
            ga('send', 'event', 'buttonClick', 'ClickLogoMybook');
        });
        $('.js-menu-list-item-prizes').click(function(){
            ga('send', 'event', 'buttonClick', 'ClickPreviewPrize');
        });
        $('.js-menu-list-item-gallery').click(function(){
            ga('send', 'event', 'buttonClick', 'ClickPopupIdea');
        });
        $('.js-menu').click(function(){
            ga('send', 'event', 'buttonClick', 'ClickMainMenu');
        });
        $('.js-user-forms-open').click(function(){
            ga('send', 'event', 'buttonClick', 'ClickMainLogin');
        });
        $('.js-gs-btn').click(function() {
            ga('send', 'event', 'buttonClick', 'SiteGoodstarter');
        });

    }
});
