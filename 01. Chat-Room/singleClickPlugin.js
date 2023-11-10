(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    var $ = require('jquery');
    module.exports = factory($);
  } else {
    factory(root.jQuery);
  }

}(this, function ($) {
  'use strict';

  var singleclick = $.event.special.singleclick = {

    bindType: 'click',

    delegateType: 'click',

    timeout: 250,

    dataProp: 'singleclicktimeout',

    handle: function (event) {
      var $el = $(this);

      if (!singleclick.abortTrigger($el, event, arguments)) {
        singleclick.queueTrigger($el, event, arguments);
      }
    },

    queueTrigger: function ($el, event, args) {
      event = $.Event(event.type, event);

      var timeout = setTimeout(function () {
        event.type = event.handleObj.origType;
        event.handleObj.handler.apply($el, args);

        event.type = event.handleObj.type;

        $el.removeData(singleclick.dataProp);
      }, singleclick.timeout);

      $el.data(singleclick.dataProp, timeout);
    },

    abortTrigger: function ($el, events, args) {
      var timeout = $el.data(singleclick.dataProp);
      if (timeout) {
        clearTimeout(timeout);
        $el.removeData(singleclick.dataProp);

        return true;
      }
    }

  };

  return $;
}));
