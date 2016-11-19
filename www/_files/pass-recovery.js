var passRecoveryForm = {
    $submitBtn: null,
    $emailInput: null,

    errorMessages: [
        'Необходимо указать e-mail',
        'Данный адрес e-mail не зарегистрирован'
    ],


    init: function() {
        var self = this;

        self.setVars();
        self.setEvents();
    },

    setVars: function() {
        var self = this;

        self.$submitBtn = $('.js-pass-rec-submit');
        self.$emailInput = $('.js-pass-rec-email-input');

    },

    setEvents: function() {
        var self = this;

        self.$submitBtn.click(function(e) {
            e.preventDefault();
            if (self.checkForm()) {
                $.post(Routing.generate('ajax_user_restore_password'), { email: self.$emailInput.val()})
                    .done(function (result, status) {
                        if (result.status==true) {
                            popup.showContent('pass-rec-success');
                        }else{
                            self.showError(self.$emailInput.parent('.js-error-box'), result.message, true);
                        }
                    });


            }
        });
        self.$emailInput.on('keyup', function(){
            self.hideError(self.$emailInput.parent('.js-error-box'));
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

    checkForm: function() {
        var self = this;

        if (!self.emailCheck()) {
            return false;
        }

        return true;
    },

    emailCheck: function() {
        var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/,
            self = this,
            val = self.$emailInput.val();

        if (rv_email.test(val) && val != '') {
            self.hideError(self.$emailInput.parent('.js-error-box'));
            return true;
        }
        else {
            self.showError(self.$emailInput.parent('.js-error-box'), self.errorMessages[0], true);
            return false;
        }
    },

};


