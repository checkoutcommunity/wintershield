!function(e){"use strict";e.fn.slideAndSwipe=function(s){var t=e(this),n=t.outerWidth(),a=n,i=e.extend({triggerOnTouchEnd:!0,swipeStatus:function(e,s,r,d){"start"==s&&(a=t.hasClass("ssm-nav-visible")?0:n),"move"==s&&"right"==r?o(d,0):"cancel"==s&&"right"==r&&0===a?o(0,i.speed):"end"==s&&"right"==r&&l()},allowPageScroll:"vertical",threshold:100,excludedElements:"label, button, input, select, textarea, .noSwipe",speed:250},s);function o(s,a){t.css("transition-duration",(a/1e3).toFixed(1)+"s"),n<=s&&(s=300),/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)||/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)?t.css("-webkit-transform","translate("+s+"px,0)"):t.css("transform","translate("+s+"px,0)"),"0"==s&&(e(".ssm-toggle-nav").addClass("ssm-nav-visible"),e("html").addClass("is-navOpen"),e(".ssm-overlay").fadeIn())}t.swipe(i);var l=function(){t.removeClass("ssm-nav-visible"),o(n,i.speed),e("html").removeClass("is-navOpen"),e(".ssm-overlay").fadeOut()};e(".ssm-toggle-nav").click((function(e){t.hasClass("ssm-nav-visible")?l():(t.addClass("ssm-nav-visible"),o(0,i.speed)),e.preventDefault()}))}}(window.jQuery||window.$,(document,window)),"undefined"!=typeof module&&module.exports&&(module.exports=slideAndSwipe);