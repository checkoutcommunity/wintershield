!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}((function(t){function e(){for(var e=o.scrollTop(),i=c.height(),n=i-a,r=n<e?n-e:0,s=0,d=p.length;s<d;s++){var l,h,u=p[s],g=u.stickyWrapper.offset().top-u.topSpacing-r;u.stickyWrapper.css("height",u.stickyElement.outerHeight()),e<=g?null!==u.currentTop&&(u.stickyElement.css({width:"",position:"",top:"","z-index":""}),u.stickyElement.parent().removeClass(u.className),u.stickyElement.trigger("sticky-end",[u]),u.currentTop=null):((l=i-u.stickyElement.outerHeight()-u.topSpacing-u.bottomSpacing-e-r)<0?l+=u.topSpacing:l=u.topSpacing,u.currentTop!==l&&(u.getWidthFrom?(padding=u.stickyElement.innerWidth()-u.stickyElement.width(),h=t(u.getWidthFrom).width()-padding||null):u.widthFromWrapper&&(h=u.stickyWrapper.width()),null==h&&(h=u.stickyElement.width()),u.stickyElement.css("width",h).css("position","fixed").css("top",l).css("z-index",u.zIndex),u.stickyElement.parent().addClass(u.className),null===u.currentTop?u.stickyElement.trigger("sticky-start",[u]):u.stickyElement.trigger("sticky-update",[u]),u.currentTop===u.topSpacing&&u.currentTop>l||null===u.currentTop&&l<u.topSpacing?u.stickyElement.trigger("sticky-bottom-reached",[u]):null!==u.currentTop&&l===u.topSpacing&&u.currentTop<l&&u.stickyElement.trigger("sticky-bottom-unreached",[u]),u.currentTop=l),g=u.stickyWrapper.parent(),u.stickyElement.offset().top+u.stickyElement.outerHeight()>=g.offset().top+g.outerHeight()&&u.stickyElement.offset().top<=u.topSpacing?u.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):u.stickyElement.css("position","fixed").css("top",l).css("bottom","").css("z-index",u.zIndex))}}function i(){a=o.height();for(var e=0,i=p.length;e<i;e++){var n=p[e],r=null;n.getWidthFrom?n.responsiveWidth&&(r=t(n.getWidthFrom).width()):n.widthFromWrapper&&(r=n.stickyWrapper.width()),null!=r&&n.stickyElement.css("width",r)}}var n=Array.prototype.slice,r=Array.prototype.splice,s={topSpacing:0,bottomSpacing:0,className:"",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"inherit"},o=t(window),c=t(document),p=[],a=o.height(),d={init:function(e){return this.each((function(){var i=t.extend({},s,e),n=t(this),r=n.attr("id"),o=r?r+"-"+s.wrapperClassName:s.wrapperClassName,c=t("<div></div>").attr("id",o).addClass(i.wrapperClassName);n.wrapAll((function(){if(0==t(this).parent("#"+o).length)return c})),r=n.parent(),i.center&&r.css({width:n.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===n.css("float")&&n.css({float:"none"}).parent().css({float:"right"}),i.stickyElement=n,i.stickyWrapper=r,i.currentTop=null,p.push(i),d.setWrapperHeight(this),d.setupChangeListeners(this)}))},setWrapperHeight:function(e){var i=t(e);(e=i.parent())&&e.css("height",i.outerHeight())},setupChangeListeners:function(t){window.MutationObserver?new window.MutationObserver((function(e){(e[0].addedNodes.length||e[0].removedNodes.length)&&d.setWrapperHeight(t)})).observe(t,{subtree:!0,childList:!0}):window.addEventListener?(t.addEventListener("DOMNodeInserted",(function(){d.setWrapperHeight(t)}),!1),t.addEventListener("DOMNodeRemoved",(function(){d.setWrapperHeight(t)}),!1)):window.attachEvent&&(t.attachEvent("onDOMNodeInserted",(function(){d.setWrapperHeight(t)})),t.attachEvent("onDOMNodeRemoved",(function(){d.setWrapperHeight(t)})))},update:e,unstick:function(e){return this.each((function(){for(var e=t(this),i=-1,n=p.length;0<n--;)p[n].stickyElement.get(0)===this&&(r.call(p,n,1),i=n);-1!==i&&(e.unwrap(),e.css({width:"",position:"",top:"",float:"","z-index":""}))}))}};window.addEventListener?(window.addEventListener("scroll",e,!1),window.addEventListener("resize",i,!1)):window.attachEvent&&(window.attachEvent("onscroll",e),window.attachEvent("onresize",i)),t.fn.sticky=function(e){return d[e]?d[e].apply(this,n.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):d.init.apply(this,arguments)},t.fn.unstick=function(e){return d[e]?d[e].apply(this,n.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):d.unstick.apply(this,arguments)},t((function(){setTimeout(e,0)}))}));