import common from './modules/common';

( ($) => {
  'use strict';
  $(() => {
    common.carousel();
    common.matchHeight();
    common.validateForm();
    common.itemRemove();
  });

})(jQuery);