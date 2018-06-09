// This is an examples of simple export.
//
// You can remove or add your own function in this file.

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
    carousel: function() {
        let $el = $('.owl-carousel');
        if ($el.length) {
            $el.owlCarousel({
                dots: false,
                nav: true,
                loop: true,
                items:4
            });
        }
    }
};

export default common;