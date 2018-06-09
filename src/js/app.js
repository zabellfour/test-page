import common from './modules/common';

( ($) => {
  'use strict';
  $(() => {
    common.carousel();
    common.matchHeight();
  });

})(jQuery);