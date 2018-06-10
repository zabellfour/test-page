(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _common = require('./modules/common');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  $(function () {
    _common2.default.carousel();
    _common2.default.matchHeight();
    _common2.default.validateForm();
    _common2.default.itemRemove();
  });
})(jQuery);

},{"./modules/common":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var common = {
    matchHeight: function matchHeight() {
        var $el = $('.sh-item');
        if ($el.length) {
            $el.matchHeight({
                byRow: false,
                property: 'min-height'
            });
        }
    },
    validateForm: function validateForm() {
        var $el = $('.validate-form');
        if ($el.length) {
            $el.validate();
        }
    },
    carousel: function carousel() {
        var $el = $('.owl-carousel');
        if ($el.length) {
            $el.owlCarousel({
                dots: false,
                nav: true,
                loop: true,
                items: 1,
                autoplay: true,
                responsive: {
                    320: {
                        items: 1

                    },
                    480: {
                        items: 2
                    },
                    992: {
                        items: 3

                    },
                    1200: {
                        items: 4

                    }
                }
            });
        }
    },
    itemRemove: function itemRemove() {
        var $el = $('[data-remove]');
        if ($el.length) {
            var elList = document.getElementById('wishlist');
            elList.addEventListener('click', function (e) {
                var btn = e.target;
                if (btn.hasAttribute("data-remove")) {
                    e.preventDefault();
                    $(btn).closest('.thumbnail').closest('div[class^=col]').remove();
                }
            });
        }
    }
};

exports.default = common;

},{}]},{},[1]);
