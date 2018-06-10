
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
                items:1,
                autoplay: true,
                responsive:{
                    320:{
                        items:1,
                    
                    },
                   480:{
                        items:2,
                    },
                    992:{
                        items:3,
       
                    },
                    1200:{
                        items:4,
                   
                    }
                }
            });
        }
    }
};

export default common;