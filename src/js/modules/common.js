const common = {
    matchHeight: function() {
        let $el = $('.sh-item');
        if ($el.length) {
            $el.matchHeight({
                byRow: false,
                property: 'min-height',
            });
        }
    },
    validateForm: function() {
        let $el = $('.validate-form');
        if ($el.length) {
            $el.validate();
        }
    },
    carousel: function() {
        let $el = $('.owl-carousel');
        if ($el.length) {
            $el.owlCarousel({
                dots: false,
                nav: true,
                loop: true,
                items: 1,
                autoplay: true,
                responsive: {
                    320: {
                        items: 1,

                    },
                    480: {
                        items: 2,
                    },
                    992: {
                        items: 3,

                    },
                    1200: {
                        items: 4,

                    }
                }
            });
        }
    },
    itemRemove: function() {
        let $el = $('[data-remove]');
        if ($el.length) {
            let elList = document.getElementById('wishlist');
            elList.addEventListener('click', (e) => {
                let btn = e.target;
                if (btn.hasAttribute("data-remove")){
                    e.preventDefault();
                    $(btn).closest('.thumbnail').closest('div[class^=col]').remove();
                }
            });
        }
    }
};

export default common;