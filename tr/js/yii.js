/**
 * Yii JavaScript module.
 *
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
yii=function(t){var e={reloadableScripts:[],clickableSelector:'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',changeableSelector:"select, input, textarea",getCsrfParam:function(){return t("meta[name=csrf-param]").attr("content")},getCsrfToken:function(){return t("meta[name=csrf-token]").attr("content")},setCsrfToken:function(e,n){t("meta[name=csrf-param]").attr("content",e),t("meta[name=csrf-token]").attr("content",n)},refreshCsrfToken:function(){var n=e.getCsrfToken();n&&t('form input[name="'+e.getCsrfParam()+'"]').val(n)},confirm:function(t,e,n){confirm(t)?!e||e():!n||n()},handleAction:function(n){var i=n.data("method"),a=n.closest("form"),r=n.attr("href"),o=n.data("params");if(void 0!==i){var c=!a.length;if(c){r&&r.match(/(^\/|:\/\/)/)||(r=window.location.href),(a=t('<form method="'+i+'"></form>')).attr("action",r);var s=n.attr("target");if(s&&a.attr("target",s),i.match(/(get|post)/i)||(a.append('<input name="_method" value="'+i+'" type="hidden">'),i="POST"),!i.match(/(get|head|options)/i)){var u=e.getCsrfParam();u&&a.append('<input name="'+u+'" value="'+e.getCsrfToken()+'" type="hidden">')}a.hide().appendTo("body")}var m=a.data("yiiActiveForm");m&&(m.submitObject=n),o&&t.isPlainObject(o)&&t.each(o,(function(t,e){a.append('<input name="'+t+'" value="'+e+'" type="hidden">')}));var f=a.attr("method");a.attr("method",i);var l=null;r&&"#"!=r&&(l=a.attr("action"),a.attr("action",r)),a.trigger("submit"),t.when(a.data("yiiSubmitFinalizePromise")).then((function(){null!=l&&a.attr("action",l),a.attr("method",f),o&&t.isPlainObject(o)&&t.each(o,(function(e,n){t('input[name="'+e+'"]',a).remove()})),c&&a.remove()}))}else r&&"#"!=r?window.location=r:n.is(":submit")&&a.length&&a.trigger("submit")},getQueryParams:function(t){var e=t.indexOf("?");if(e<0)return{};for(var n=t.substring(e+1).split("&"),i=0,a={};i<n.length;i++)n[i]=n[i].split("="),a[decodeURIComponent(n[i][0])]=decodeURIComponent(n[i][1]);return a},initModule:function(n){(void 0===n.isActive||n.isActive)&&(t.isFunction(n.init)&&n.init(),t.each(n,(function(){t.isPlainObject(this)&&e.initModule(this)})))},init:function(){var n,i,a;t.ajaxPrefilter((function(t,n,i){!t.crossDomain&&e.getCsrfParam()&&i.setRequestHeader("X-CSRF-Token",e.getCsrfToken())})),e.refreshCsrfToken(),t(document).ajaxComplete((function(t,e,n){var i=e.getResponseHeader("X-Redirect");i&&(window.location=i)})),n=location.protocol+"//"+location.host,i=t("script[src]").map((function(){return"/"===this.src.charAt(0)?n+this.src:this.src})).toArray(),t.ajaxPrefilter("script",(function(a,r,o){if("jsonp"!=a.dataType){var c="/"===a.url.charAt(0)?n+a.url:a.url;-1===t.inArray(c,i)?i.push(c):-1!==t.inArray(c,t.map(e.reloadableScripts,(function(t){return"/"===t.charAt(0)?n+t:t})))||o.abort()}})),t(document).ajaxComplete((function(n,i,a){var r=[];t("link[rel=stylesheet]").each((function(){-1===t.inArray(this.href,e.reloadableScripts)&&(-1==t.inArray(this.href,r)?r.push(this.href):t(this).remove())}))})),a=function(n){var i=t(this),a=i.data("method"),r=i.data("confirm");return void 0===a&&void 0===r||(void 0!==r?e.confirm(r,(function(){e.handleAction(i)})):e.handleAction(i),n.stopImmediatePropagation(),!1)},t(document).on("click.yii",e.clickableSelector,a).on("change.yii",e.changeableSelector,a)}};return e}(jQuery),jQuery(document).ready((function(){yii.initModule(yii)}));