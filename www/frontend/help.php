<!DOCTYPE html>
<html class=" js csstransforms3d"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <link rel="image_src" href="http://localhost/hackaton/images/share.png">
    <meta name="keywords" content="">
    <meta name="description" content="Хакатон 2016">

    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=420">

    <link href="_files/reset.css" media="all" rel="stylesheet" type="text/css">
    <link href="_files/common.css" media="all" rel="stylesheet" type="text/css">
    <link href="_files/style.css" media="all" rel="stylesheet" type="text/css">
    
    
   <link rel="stylesheet" type="text/css" href="_files/bootstrap.min.css?s=1479207778"  />
   <link rel="stylesheet" type="text/css" href="_files/bootstrap-theme-f.css?s=1479207778"  />
   <link rel="stylesheet" type="text/css" href="_files/projects.css?s=1479207778"  />



    <link href="_files/index.css" media="all" rel="stylesheet" type="text/css">

    <link href="_files/jquery.css" media="all" rel="stylesheet" type="text/css">
    <link href="_files/main.css" media="all" rel="stylesheet" type="text/css">

    <link href="_files/media.css" media="all" rel="stylesheet" type="text/css">


    <script type="text/javascript" async="" id="topmailru-code" src="_files/code.js"></script><script type="text/javascript" async="" src="_files/watch.js"></script><script async="" src="_files/analytics.js"></script><script async="" src="_files/gtm.js"></script><script type="text/javascript">(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=ojf5ldG8ktXui7*1yap36RIkPwbwbGOkKuGIqeON8ip1TThI2B9nheLtSvXen62yuXLjHycI5tOIHRSCmKVc3A/fAP09AAZy57mR1bQxBLd6L/OMtuHoY7vaj2b5xpshMPSnbC59AdXhVS0OeCrMRjCrl8T4cRMwu*iCB/p9W/U-';</script>


    <script src="_files/jquery_003.js"></script>
    <script src="_files/jquery.js"></script>
    <script src="_files/jquery_002.js"></script>
    <script src="_files/router.js"></script>
    <script src="_files/routing"></script>

    <script src="_files/jquery_004.js"></script>

    <script src="_files/auth.js"></script>
    <script src="_files/pass-recovery.js"></script>
    <script src="_files/reg.js"></script>
    <script src="_files/common.js"></script>
    <script src="_files/cookie.js"></script>


        <script src="_files/index.js"></script>

    <script src="_files/utils.js"></script>
    <script src="_files/carousel.js"></script>

    <script src="_files/carousel.js"></script>

    <script src="_files/jquery_005.js"></script>
    <script src="_files/main.js"></script>

    <title>Хакатон 2016 - Помоги деревне!</title>

   <script src="_files/pixel.js" type="text/javascript"></script></head>
<body class="" data-req_count_per_click="12" data-show_auth_popup="">

<script type="text/javascript">
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    document.write('<iframe src="https://4469438.fls.doubleclick.net/activityi;src=4469438;type=invmedia;cat=8ea1yznb;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
</script><iframe src="_files/activityi.htm" style="display:none" width="1" height="1" frameborder="0"></iframe>
<noscript>
    <iframe src="https://4469438.fls.doubleclick.net/activityi;src=4469438;type=invmedia;cat=8ea1yznb;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->

<?php include "template/header.php" ?>

<br>

<br>
<br><center>
    <b>Заполните данные:</b><br>
<!--	<b>Регистрация:/b><br>-->
<form action="../backend/createRec.php" method="post" >
 <div style="<?php if(isset($_SESSION)) echo 'display:none';?>">  
<table>
	   <tr>
    <td> Фамилия: </td>
    <td> <input type="text" name="family" required=" " /> </td>
   </tr>
   <tr>
    <td> Имя: </td>
    <td> <input type="text" name="name" required=" " /> </td>
   </tr>
   <tr>
    <td> Отчество: </td>
    <td> <input type="text" name="surname" required=" " /> </td>
   </tr>
   <tr>
    <td> Электронный адрес: </td>
    <td> <input type="text" name="email" required=" " /> </td>
   </tr>
   <tr>
    <td> Пароль: </td>
    <td> <input type="password" name="pass" required=" " /> </td>
   </tr>
     <tr>
    <td> Подтвердите пароль: </td>
    <td> <input type="password" name="conf_pass" required=" " /> </td>
   </tr>
 </div>
   <tr>
    <td> Заголовок: </td>
    <td> <input type="text" name="title" required=" " /> </td>
   </tr>
   <tr>
    <td> Услуга: </td>
    <td> <input type="text" name="Usl" required=" " /> </td>
   </tr>
  <tr>
    <td> Населённый пункт: </td>
    <td> <input type="text" name="town" required=" " /> </td>
   </tr>
 <tr>
    <td> Адрес: </td>
    <td> <input type="text" name="address" required=" " /> </td>
   </tr>

   <tr>
    <td> Время: </td>
    <td> <input type="password" name="time" required=" " /> </td>
   </tr>
   <tr>
    <td> Описание: </td>
    <td> <input type="password" name="descr" required=" " /> </td>
   </tr>
<tr>
    <td> Фото: </td>
    <td> <input type="file" > </td>
   </tr>
	
   <tr>
    <td colspan="2"> <input type="submit" name="r_send" value="Зарегистрироваться!" /> </td>
   </tr>
  </table>
</form> 
<p>&nbsp;</p>
</center>


<script type="text/javascript">
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    document.write('<iframe src="https://4469438.fls.doubleclick.net/activityi;src=4469438;type=invmedia;cat=sydsphjo;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
</script><iframe src="_files/activityi_002.htm" style="display:none" width="1" height="1" frameborder="0"></iframe>
<noscript>
    <iframe src="https://4469438.fls.doubleclick.net/activityi;src=4469438;type=invmedia;cat=sydsphjo;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->



<script src="_files/html2canvas.js"></script>
<script src="_files/socialShare.js"></script>
<script src="_files/ga-events.js"></script>

<script>



    $(document).ready(function () {

        var virtual_code = readCookie('virtual_code');
        if (virtual_code) {
            $('.js-promocode-input').val(virtual_code);
            $('.js-promocode-check').click();
            eraseCookie('virtual_code');
        }

        if ($('body').attr('data-show_auth_popup')=='y'){
            $('.js-user-forms-open').click();
        }

        $("#main-prize-request-image_input").change(function (e) {
            if (this.files && this.files[0]) {

                e.preventDefault();
                $("#main-prize-request-image-form").ajaxForm({
                    beforeSubmit: function () {
                        $('.js-idea-card-download').addClass('loading');
                        return true;
                    },
                    resetForm: false,
                    success: function (data, status, xhr) {
                        if (xhr.status==200){
                            var img_src='url('+data+')';
                            $('.js-img-main-request-preview.current').css('background-image', img_src).attr('data-car-url', data);
                            $('.js-img-main-request-preview-mobile').css('background-image', img_src);
                            //reInit();
                            //$('.js-img-main-request-preview-last').css('background-image', img_src);
                            userForms.setCurrentPicUrl();

                            $('#main-prize-request-image-name').val(data);
                            $('.js-idea-card-download').removeClass('loading');
                        }else{
                            alert(data);
                            $('.js-idea-card-download').removeClass('loading');
                        }

                    },
                    error: function (data, status, xhr) {
                        alert('Ошибка сервера');
                        $('.js-idea-card-download').removeClass('loading');
                    }
                }).submit();

            }
            else {

            }
        });



        $('.js-social-share-step3').click(function(){


            setTimeout(function(){
                //alert("7 seconds is gone");
                $.post(Routing.generate('web_ajax_main_prize_request_create'), {
                    'title': $('.js-idea-title-input').val() ,
                    'image_name': $('#main-prize-request-image-name').val()
                })
                .done(function (res) {
                     if (res.success==true){
                         if (res.auth==true){
                             window.location.href=Routing.generate('web_user_profile');//if auth
                         }else{
                             popup.togglePopupVisibility(true);
                             popup.showContent('auth');
                         }
                     }else{
                         alert(res.message);
                     }
                });

            }, 7000);

            var socialId=$(this).data('social-id');
            var desc='Я хочу начать жизнь с чайного листа и '+$('.js-idea-title-input').val()+'. А с чего бы начали вы? #счайноголиста';
            var imageName='http://localhost/hackaton/'+$('#main-prize-request-image-name').val();




            var img="";

            html2canvas($('#html2canvas'), {
                onrendered: function(canvas) {
                    img = canvas.toDataURL("image/png");
                    img = canvas.toDataURL("image/png");

                    $.post(Routing.generate('web_ajax_save_base64img'), {
                        'img': img
                    })
                    .done(function (res) {
                        if (res.success==true){
                            imageName='http://localhost/hackaton/storage/images/social_shared/'+res.message;

                        }


                        switch (socialId){
                            case 'fb':  Share.facebook2('http://list.liptontea.ru','',imageName, desc);break;
                            case 'vk':  Share.vkontakte('http://list.liptontea.ru','',imageName,desc); break;
                            //case 'ok':  Share.odnoklassniki('http://list.liptontea.ru', desc); break;
                            case 'ok':
                                var path=res.message+'/'+desc;
                                Share.odnoklassniki('http://localhost/hackaton/share-step3-page/'+path, desc); break;
                        }
                    });



                }
            });




        });


        setShareButtonClickListener();
        setShareButtonClickFromModalListener();



    });

    function setShareButtonClickFromModalListener($pointer){
        if (!$pointer){
            $pointer=$('body');
        }
        $('.js-social-share-modal', $pointer).click(function(e){
            var parentEl=$(this).parents('.js-modal');
            var socialId=$(this).data('social-id');

            var desc='Классная идея, как начать жить с чайного листа! #счайноголиста';
            var imageName='http://localhost/hackaton/images/share.png';

            if (parentEl.attr('data-share-image')){
                imageName='http://list.liptontea.ru'+parentEl.attr('data-share-image');
            }
            switch (socialId){
                case 'fb':  Share.facebook2('http://list.liptontea.ru#gallery','',imageName, desc); break;
                case 'vk':  Share.vkontakte('http://localhost/hackaton/#gallery','',imageName, desc); break;
                case 'ok':
                    var id=parentEl.attr('data-id');
                    var share_url='http://localhost/hackaton/share-main-prize-page/'+id;
                    Share.odnoklassniki( share_url, desc); break;
                // case 'ok':  Share.odnoklassniki('http://list.liptontea.ru#gallery', desc); break;
            }

        });
    }
    function setShareButtonClickListener($pointer){

        if (!$pointer){
            var $pointer_local=$('body');
        }else{
            var $pointer_local=$pointer;
        }

        $('.js-social-share', $pointer_local).click(function(e){

            var socialId=$(this).data('social-id');

            if (!$pointer){
                var parentEl=$(this).parents('.idea-gallery__item');
            }else{
                var parentEl=$(this).parents('.idea-gallery__item2');
            }

            var desc='Классная идея, как начать жить с чайного листа! #счайноголиста';
            if (parentEl.attr('data-share-image')){

                var imageName='http://list.liptontea.ru'+parentEl.attr('data-share-image');

                switch (socialId){
                    case 'fb':  Share.facebook2('http://list.liptontea.ru#gallery','',imageName, desc); break;
                    case 'vk':  Share.vkontakte('http://localhost/hackaton/#gallery','',imageName, desc); break;
                    case 'ok':
                        var id=parentEl.attr('data-id');
                        var share_url='http://localhost/hackaton/share-main-prize-page/'+id;
                        Share.odnoklassniki( share_url, desc); break;
                    //case 'ok':  Share.odnoklassniki('http://list.liptontea.ru#gallery', desc); break;
                }
            }else{

                html2canvas(parentEl, {
                    onrendered: function(canvas) {

                        img = canvas.toDataURL("image/png");



                        $.post(Routing.generate('web_ajax_save_share_image'), {
                            'id': parentEl.attr('data-id'),
                            'img': img
                        })
                                .done(function (res) {
                                    if (res.success==true){
                                        imageName='http://list.liptontea.ru'+res.message;

                                        parentEl.attr('data-share-image', res.message);
                                        //image name to modal data-attr
                                        $("div").find("[data-modal-id='" +parentEl.attr('data-modal-target') + "']").attr('data-share-image', res.message);
                                    }

                                    switch (socialId){
                                        case 'fb':  Share.facebook2('http://list.liptontea.ru#gallery','',imageName, desc);break;
                                        case 'vk':  Share.vkontakte('http://localhost/hackaton/#gallery','',imageName, desc); break;
                                        case 'ok':
                                            var id=parentEl.attr('data-id');
                                            var share_url='http://localhost/hackaton/share-main-prize-page/'+id;
                                            Share.odnoklassniki( share_url, desc); break;
                                        //case 'ok':  Share.odnoklassniki('http://list.liptontea.ru#gallery', desc); break;
                                    }
                                });



                    }
                });
            }

        });
    }

    /*$.post(Routing.generate('web_ajax_prize_request_get_more', {'p':1}), {

    })
    .done(function (res) {
        if (res.success==true){

            var tt=res.list[0];
            var tt2=tt.id;
        }

    }); */


</script>





<script type="text/javascript" id="">(function(g){function k(){var h=(new Date).getTime(),a="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=(h+16*Math.random())%16|0;h=Math.floor(h/16);return("x"==a?b:b&3|8).toString(16)});return a}var a=new function(){this.set=function(a,c,f){var b=0;!1!==f&&(b=new Date,b.setTime(b.getTime()+864E5*(void 0!==f?f:365)),b=b.toGMTString());g.cookie=escape(a)+"\x3d"+escape(c)+"; expires\x3d"+b+"; path\x3d/"};this.get=function(a){var c=g.cookie.split(";"),f=c.length;a=escape(a)+"\x3d";
for(var b=0;b<f;b++){for(var d=c[b],e=d.length;" "===d.charAt(0);)d=d.substring(1,e);if(0===d.indexOf(a))return unescape(d.substring(a.length,e))}}},c=void 0,e="front_user_id",c=a.get("aiid")||a.get(e)||null;null==c&&(a.get(e)?c=a.get("aiid"):(c=k(),a.set(e,c,30)));a=g.createElement("script");a.src=window.location.protocol+"//x01.aidata.io/pixel.js?pixel\x3dUnilever-crm-list_liptontea_ru\x26id\x3d"+c+"\x26v\x3d"+Date.now();a.type="text/javascript";document.head.appendChild(a)})(window.document);</script><script type="text/javascript" id="">(function(c,b){var a=b.createElement("iframe"),d=b.createElement("img"),e=c.encodeURIComponent(c.location.href);a.width="0";a.height="0";a.frameBorder="0";a.style.position="absolute";a.style.left="-9999px";a.onload=function(){d.src="https://advombat.ru/0.gif?pid\x3dUnilever-list_liptontea_ru\x26id\x3d"+e;a.contentDocument.body.appendChild(d)};b.body.appendChild(a)})(window,window.document);</script><iframe style="position: absolute; left: -9999px;" width="0" height="0" frameborder="0"></iframe><iframe style="position: absolute; left: -9999px;" width="0" height="0" frameborder="0"></iframe></body></html>
