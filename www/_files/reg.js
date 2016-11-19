var regForm = {
    $submitBtn: null,
    $nameInput: null,
    $emailInput: null,
    $phoneInput: null,
    $dateOfBirthInput: null,
    $checkbox: null,

    errorMessages: [
        'Все поля обязательны для заполнения',
        'Неверный формат e-mail',
        'Неверный формат телефонного номера',
        'Данный e-mail уже зарегистрирован',
        'Данный телефон уже зарегистрирован',
        'Для участия необходимо согласие с правилами'
    ],

    init: function() {
        var self = this;

        self.setVars();
        self.setEvents();

        self.$dateOfBirthInput.mask("99/99/9999");
        self.$phoneInput.mask("+7 (999) 999-9999");
    },

    setVars: function() {
        var self = this;

        self.$submitBtn = $('.js-reg-submit');
        self.$nameInput = $('.js-reg-name-input');
        self.$emailInput = $('.js-reg-email-input');
        self.$phoneInput = $('.js-reg-phone-input');
        self.$dateOfBirthInput = $('.js-reg-date-input');
        self.$checkbox = $('#reg-form_rules-checkbox');
    },

    setEvents: function() {
        var self = this;


        self.$submitBtn.click(function(e) {
            e.preventDefault();
            if (!$(this).hasClass('loading')) {
                self.submitForm();
            }
        });
        self.$nameInput.on('keyup', function(){
            self.nameCheck();
        });
        self.$emailInput.on('keyup', function(){
            self.hideError(self.$emailInput.parent('.js-error-box'));
        });
        self.$phoneInput.on('keyup', function(){
            self.phoneCheck();
        });
        self.$dateOfBirthInput.on('keyup', function(){
            self.dateOfBirthCheck();
        });
        self.$checkbox.on('change', function(){
            self.rulesCheck();
        });
        $('input').on('focus', function(){
            self.hideError(self.$checkbox.parent('.js-error-box'));
        });
        $('input').on('keyup', function(e){
            if (e.keyCode == 13) {
                self.submitForm();
            }
        });
    },

    submitForm: function() {
        var self = this;

        if (self.checkForm()){
            self.$submitBtn.addClass('loading');
            $.post(Routing.generate('ajax_user_registration', {
                    email: self.$emailInput.val(),
                    phone: self.$phoneInput.val(),
                    firstname: self.$nameInput.val(),
                    birthdate: self.$dateOfBirthInput.val(),
                    gender: $('.js-reg-radio:checked').val(),
                    agreement: self.$checkbox.val()
                }))
                .done(function (res) {
                    if (res.status == true) {
                        window.location.href=Routing.generate('web_user_profile');
                    }else{
                        self.$submitBtn.removeClass('loading');
                        if (res.message == '1' || res.message == '2') {
                            var errorMsg = $('.js-reg-linked-errors' + res.message).html();

                            self.showError(self.$checkbox.parent('.js-error-box'), errorMsg, false);
                            $('.js-forget-pass-link').on('click', function(e) {
                                e.preventDefault();
                                popup.showContent('pass-rec');
                            });
                        }
                        else {
                            self.showError(self.$checkbox.parent('.js-error-box'), res.message, false);
                        }

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

        if (!self.nameCheck()) {
            return false;
        }

        if (!self.emailCheck()) {
            return false;
        }

        if (!self.phoneCheck()) {
            return false;
        }

        if (!self.dateOfBirthCheck()) {
            return false;
        }

        if (!self.rulesCheck()) {
            return false;
        }

        return true;
    },

    nameCheck: function() {
        var self = this,
            val = self.$nameInput.val();

        if (val != '') {
            self.hideError(self.$nameInput.parent('.js-error-box'));
            return true;
        }
        else {
            self.showError(self.$nameInput.parent('.js-error-box'), self.errorMessages[0], true);
            return false;
        }
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
            self.showError(self.$emailInput.parent('.js-error-box'), self.errorMessages[1], true);
            return false;
        }
    },

    phoneCheck: function() {
        var self = this,
            val = self.$phoneInput.val();

        if (val != '') {
            self.hideError(self.$phoneInput.parent('.js-error-box'));
            return true;
        }
        else {
            self.showError(self.$phoneInput.parent('.js-error-box'), self.errorMessages[0], true);
            return false;
        }
    },

    dateOfBirthCheck: function() {
        var self = this,
            val = self.$dateOfBirthInput.val();

        if (val != '') {
            self.hideError(self.$dateOfBirthInput.parent('.js-error-box'));
            return true;
        }
        else {
            self.showError(self.$dateOfBirthInput.parent('.js-error-box'), self.errorMessages[0], true);
            return false;
        }
    },

    rulesCheck: function() {
        var self = this;

        if (self.$checkbox.prop('checked')) {
            self.hideError(self.$checkbox.parent('.js-error-box'));
            return true;
        }
        else {
            self.showError(self.$checkbox.parent('.js-error-box'), self.errorMessages[5], false);
            return false;
        }
    }



};


