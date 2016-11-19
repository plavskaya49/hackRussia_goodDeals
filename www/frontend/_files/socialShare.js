Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'http://vk.com/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=false';
        Share.popup(url);
    },
    odnoklassniki: function(purl, text) {
        url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl='    + encodeURIComponent(purl);
        Share.popup(url);
    },
    odnoklassniki2: function(okAttachJsonBase64, okSignature) {
        url = "http://connect.ok.ru/dk?st.cmd=WidgetMediatopicPost&st.app=1246403072";
        url += '&st.attachment=' + encodeURIComponent(okAttachJsonBase64);
        url += '&st.signature='  + encodeURIComponent(okSignature);
        url += '&st.popup=on&st.utext=on';
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    facebook2: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/dialog/feed?app_id=1023147757760423' +
            '&link=' +encodeURIComponent(purl)+
            '&picture=' +encodeURIComponent(pimg)+
            '&name=' + encodeURIComponent(ptitle) +
            '&caption=' + encodeURIComponent(ptitle) +
            '&description=' + encodeURIComponent(text) +
            '&redirect_uri=' + encodeURIComponent('http://list.liptontea.ru/');//http%3A%2F%2Flist.liptontea.ru%2F
            //'&display=popup';
        Share.popup(url);
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }

};