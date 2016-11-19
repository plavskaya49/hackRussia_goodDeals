var authForm = {
    $submitBtn: null,
    $emailInput: null,
    $passwordInput: null,
    errorMessages: [
        'Чтобы продолжить, необходимо ввести промо-код',
        'Возможно, промо-код введен неверно, попробуй еще раз!',
        'Этот промо-код уже был активирован на сайте, попробуй ввести другой!',
        'Этот приз уже есть в твоем списке, выбери другой. Попробуй что-то новое!',
        'E-mail введен некорректно',
        'Необходимо согласиться с правилами',
        'Необходимо ввести пароль',
        'Ошибка авторизации'
    ],


    init: function() {
        var self = this;

        self.setVars();
        self.setEvents();

    },

    setVars: function() {
        var self = this;

        self.$submitBtn = $('.js-auth-submit');
        self.$emailInput = $('.js-auth-email-input');
        self.$passwordInput = $('.js-auth-password-input');
    },

    setEvents: function() {
        var self = this;

        self.$submitBtn.click(function(e) {
            e.preventDefault();
            if (!$(this).hasClass('loading')) {
                self.submitForm();
            }
        });
        self.$emailInput.on('keyup', function(){
            self.hideError(self.$emailInput.parent('.js-error-box'));
        });
        self.$passwordInput.on('keyup', function(){
            self.passwordCheck();
        });

        $('input').on('keyup', function(e){
            if (e.keyCode == 13) {
                self.submitForm();
            }
        });

    },

    submitForm: function() {
        var self = this;

        if (self.checkForm()) {
            self.$submitBtn.addClass('loading');
            $.post(Routing.generate('ajax_user_security_login'), {
                _username: self.$emailInput.val(),
                _password: self.$passwordInput.val(),
                _csrf_token: $('#csrf_token').val()
            })
                .done(function (result, status) {
                    if (result.status==true) {
                        window.location.href=Routing.generate('web_user_profile');
                    }else{
                        self.$submitBtn.removeClass('loading');
                        self.showError(self.$passwordInput.parent('.js-error-box'), self.errorMessages[7], true);
                    }
                });
        }
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
        if (!self.passwordCheck()) {
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
            self.showError(self.$emailInput.parent('.js-error-box'), self.errorMessages[4], true);
            return false;
        }
    },

    passwordCheck: function() {
        var self = this,
            val = self.$passwordInput.val();

        if (val != '') {
            self.hideError(self.$passwordInput.parent('.js-error-box'));
            return true;
        }
        else {
            self.showError(self.$passwordInput.parent('.js-error-box'), self.errorMessages[6], true);
            return false;
        }
    }
};


