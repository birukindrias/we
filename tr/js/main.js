window.onload=function(){var e;$(document).ready((function(){if($(".wrapper").hasClass("worksPage")){var i=document.getElementsByClassName("wrapper")[0];i.addEventListener("touchstart",(function(e){$(".wrapper").hasClass("projectsPage")||(this.allowUp=this.scrollTop>0,this.allowDown=this.scrollTop<this.scrollHeight-this.clientHeight,this.slideBeginY=e.pageY)})),i.addEventListener("touchmove",(function(e){if(!$(".wrapper").hasClass("projectsPage")){var i=e.pageY>this.slideBeginY,a=e.pageY<this.slideBeginY;this.slideBeginY=e.pageY,i&&this.allowUp||a&&this.allowDown?e.stopPropagation():e.preventDefault()}}))}var a=function(){$(window).width()>1023&&$(".sectionSlider.swiper-container .swiper-slide").removeClass("hidden"),e=new Swiper(".sectionSlider.swiper-container",{slidesPerView:1,spaceBetween:0,mousewheel:!0,keyboard:!0,speed:1e3,hashNavigation:!0,direction:"vertical",longSwipes:!1,followFinger:!1,passiveListeners:!1,touchReleaseOnEdges:!0,iOSEdgeSwipeDetection:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:1,speed:500,direction:"horizontal"}},on:{slideChangeTransitionStart:function(){index=$(".swiper-slide-active").index(),slidesNum=$(".sectionSlider .swiper-slide").length,function(e,i){if(e+t<=i)for(var a=1;a<6;a++)$(".swiper-slide").eq(e+t-1+a).removeClass("hidden")}(index,slidesNum),index<4?($(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(1)").addClass("swiper-pagination-bullet-active")):index>=4&&index<=10?($(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(2)").addClass("swiper-pagination-bullet-active")):index>=11&&index<=14?($(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(3)").addClass("swiper-pagination-bullet-active")):index>=15&&index<=17?($(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(4)").addClass("swiper-pagination-bullet-active")):index>=18&&index<=21?($(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(5)").addClass("swiper-pagination-bullet-active")):index>=22&&index<=24?($(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(6)").addClass("swiper-pagination-bullet-active")):index>=25&&index<=28?($(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(7)").addClass("swiper-pagination-bullet-active")):index>=29&&($(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(8)").addClass("swiper-pagination-bullet-active"))}}})},t=0;a();var l=new Swiper(".newsSlider.swiper-container",{speed:300,loop:!0});function n(){$("html, body").animate({scrollTop:0},0,(function(){$(".wrapper").removeClass("hideAll"),$(".projectContent").empty()})),a()}function s(){e.destroy(!1,!1),$(".wrapper").addClass("hideAll");var i=$(".swiper-slide-active .viewButton").attr("href");console.log(i),$(".projectContent").load(i)}function o(){var e=$(window).scrollTop();$(window).width()>1023&&($(window).width()>1919?($(".parallax-lvl-0").css("top",0-.1*e+"px"),$(".parallax-lvl-0m").css("top",0-.2*e+100+"px"),$(".parallax-lvl-1").css("top",.1*e-150+"px"),$(".parallax-lvl-2").css("top",.2*e-300+"px"),$(".parallax-lvl-3").css("top",.1*e-100+"px")):$(window).width()<1919&&$(window).width()>1439||$(window).width()<1439&&$(window).width()>1279?($(".parallax-lvl-1").css("top",.1*e-100+"px"),$(".parallax-lvl-0").css("top",0-.2*e+"px"),$(".parallax-lvl-2").css("top",.2*e-300+"px"),$(".parallax-lvl-3").css("top",.1*e-100+"px")):$(window).width()<1279&&$(window).width()>1023&&($(".parallax-lvl-1").css("top",.05*e-20+"px"),$(".parallax-lvl-0").css("top",0-.1*e+"px"),$(".parallax-lvl-2").css("top",.1*e-100+"px"),$(".parallax-lvl-3").css("top",.1*e-100+"px")))}function r(){$(".loadingScreen").addClass("loaded"),setTimeout((function(){$(".loadingScreen").addClass("hidden"),$(".loadingScreen").removeClass("loaded")}),1e3)}$(document).on("click",".swiper-buttons > div",(function(e){e.preventDefault();var i=$(".swiper-buttons .slideNum .curNum").text(),a=parseInt(i);return $(this).hasClass("swiper-button-prev")?(l.slidePrev(),1===a?a=3:a-=1):(l.slideNext(),3===a?a=1:a+=1),$(".swiper-buttons .slideNum .curNum").html(a),!1})),$(document).on("click",".swiper-pagination-bullet",(function(i){return i.preventDefault(),0===$(this).index()?(e.slideTo(0),$(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(1)").addClass("swiper-pagination-bullet-active")):1===$(this).index()&&(e.slideTo(4),$(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(2)").addClass("swiper-pagination-bullet-active")),2===$(this).index()?(e.slideTo(11),$(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(3)").addClass("swiper-pagination-bullet-active")):3===$(this).index()?(e.slideTo(15),$(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(4)").addClass("swiper-pagination-bullet-active")):4===$(this).index()?(e.slideTo(18),$(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(5)").addClass("swiper-pagination-bullet-active")):5===$(this).index()?(e.slideTo(22),$(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(6)").addClass("swiper-pagination-bullet-active")):6===$(this).index()?(e.slideTo(25),$(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(7)").addClass("swiper-pagination-bullet-active")):7===$(this).index()&&(e.slideTo(29),$(".swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active"),$(".swiper-pagination-bullet:nth-child(8)").addClass("swiper-pagination-bullet-active")),!1})),$("#fullPage").fullpage({scrollingSpeed:1e3,loopHorizontal:!1,slidesNavigation:!0,slidesNavPosition:"right",controlArrows:!1,onSlideLeave:function(e,i,a,t){var l=$(".gradBgInner"),n=$(".gradBg");if(l.css({background:$(".slide.active").attr("data-grad")}),l.addClass("active"),setTimeout((function(){n.css({background:$(".slide.active").attr("data-grad")}),l.removeClass("active")}),500),1===i&&$(".fp-slidesNav ul li a").removeClass("active").next().addClass("active"),"left"==t)var s=$(".section .slide.active").index()-2,o=$(".section .slide.active").index()-1;else if("right"==t)s=$(".section .slide.active").index(),o=$(".section .slide.active").index()+1;var r=o+1;$(".slide").eq(s).addClass("prev-slide"),$(".slide").eq(o).removeClass("prev-slide"),$(".slide").eq(o).removeClass("next-slide"),$(".slide").eq(r).addClass("next-slide")}}),$.fn.parallax=function(e,i){$el=$(this),TweenLite.to($el,.2,{x:-(i.clientX-window.innerWidth/2)/e,y:-(i.clientY-window.innerHeight/2)/e})},$(".cookiesGrad, #fullPage").bind("mousewheel DOMMouseScroll",(function(e){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1?e.originalEvent.detail>5?$.fn.fullpage.moveSlideRight():e.originalEvent.detail<-5&&$.fn.fullpage.moveSlideLeft():e.originalEvent.wheelDelta<-100?$.fn.fullpage.moveSlideRight():e.originalEvent.wheelDelta>100&&$.fn.fullpage.moveSlideLeft(),!1})),$("#sendContact").submit((function(e){e.preventDefault(),$(".cFormInput").is(":empty")?$(".cFormInput").addClass("empty"):($(this).addClass("send"),$(".nameFormInput").val($(".contactNameInpt").val()),$(".emailFormInput").val($(".contactMailInpt").val()),$(".messageFormInput").val($(".contactProjectInpt").val()),$(".feedbackHiddenForm").submit())})),$(document).mousemove((function(e){$(window).width()>1023&&($(".slide.active .animal .moveBlock").parallax(-30,e),$(".envSun").parallax(130,e),$(".slide.active .animal-type-full .moveBlock").parallax(-30,e),$(".slide.active .siteName .moveBlock").parallax(-60,e),$(".slide.active .envClouds .moveBlock").parallax(90,e),$(".slide.active .slideTitle .moveBlock").parallax(-60,e),$(".swiper-slide-active .picMain").parallax(-20,e),$(".swiper-slide-active .movableBg.level-110").parallax(-110,e),$(".swiper-slide-active .headerBg.btopLeer").parallax(-110,e),$(".swiper-slide-active .headerBg.mtopLeer").parallax(-130,e),$(".swiper-slide-active .headerBg.smtopLeer").parallax(-150,e),$(".swiper-slide-active .headerBg.line").parallax(-80,e),$(".swiper-slide-active .headerBg.badge").parallax(-60,e),$(".swiper-slide-active .headerBg.moped").parallax(-55,e),$(".swiper-slide-active .leerBottom").parallax(-20,e),$(".swiper-slide-active .headerBg.topMain").parallax(-60,e),$(".swiper-slide-active .headerBg.rightMain").parallax(-40,e),$(".swiper-slide-active .headerBg.bottomMain").parallax(50,e),$(".swiper-slide-active .headerBg.level-30").parallax(-30,e),$(".swiper-slide-active .headerBg.level-m40").parallax(40,e),$(".swiper-slide-active .headerBg.level-40").parallax(-40,e),$(".swiper-slide-active .headerBg.level-110").parallax(-110,e),$(".swiper-slide-active .headerBg.level-85").parallax(-85,e),$(".swiper-slide-active .headerBg.level-60").parallax(-60,e),$(".swiper-slide-active .headerBg.level-50").parallax(-50,e),$(".swiper-slide-active .headerBg.level-55").parallax(-55,e),$(".swiper-slide-active .headerBg.level-65").parallax(-65,e),$(".swiper-slide-active .headerBg.level-70").parallax(-70,e),$(".swiper-slide-active .headerBg.level-80").parallax(-80,e))})),$(document).on("swipedown",".cookiesGrad, #fullPage",(function(){$.fn.fullpage.moveSlideLeft()})),$(document).on("swipeup",".cookiesGrad, #fullPage",(function(){$.fn.fullpage.moveSlideRight()})),$(document).on("swipedown",".swiper-container.sectionSlider",(function(){e.slidePrev()})),$(document).on("swipeup",".swiper-container.sectionSlider",(function(){e.slideNext()})),$(document).on("click",".hamMenu",(function(e){if(e.preventDefault(),$(this).parents(".wrapper").hasClass("projectsPage")){if($(window).width()<1024){$(this).parents(".wrapper").removeClass("projectsPage"),$(this).removeClass("active");var i=e.target;$(i).not(".showMore")&&n()}}else $(this).toggleClass("active"),$(this).siblings(".toggleWrap").toggleClass("show"),$(".wrapper").toggleClass("fixed"),$(".content.project").toggleClass("fixed")})),$(window).bind("scroll",(function(){o();var e=.5*$(window).scrollTop();$(".wrapper.article .articlePic").css({top:e});var i=1-(e-200+200)/200;$(".wrapper.article .splashWrap.article .articleContent").css({opacity:i})})),$(document).on("click",".splashContent .viewButton",(function(e){e.preventDefault(),$(window).width()<1024&&($(".hamMenu").addClass("active"),$(this).parents(".wrapper").addClass("projectsPage")),s()})),$(document).on("click",".content .showMore",(function(e){e.stopPropagation(),document.location=$(this).attr("href"),$(".loadingScreen").animate({left:"100%"},(function(){$(".loadingScreen").removeClass("hidden"),$(".loadingScreen").addClass("loaded")})),setTimeout((function(){n()}),1e3),setTimeout((function(){s()}),2e3),setTimeout((function(){$(".loadingScreen").animate({left:"0%"},(function(){$(".loadingScreen").removeClass("hidden"),$(".loadingScreen").addClass("loaded")})),r()}),3e3)})),$(".pitchBlock .cFormInput").focus((function(e){e.preventDefault(),$(this).addClass("focus")})),$(".pitchBlock .cFormInput").blur((function(e){e.preventDefault();var i=$(this).text(),a=$(this).attr("data-target");$(this).removeClass("focus"),$(this).is(":empty")?$(this).removeClass("typing"):document.getElementsByClassName(a)[0].value=i})),$(".pitchBlock .cFormInput").bind("DOMNodeInserted DOMNodeRemoved",(function(){$(this).addClass("typing")})),$(document).on("click",".content.project, .content.project .closeProject, .wrapper.hideAll .sectionSlider",(function(e){return e.preventDefault(),$(window).width()>1023&&($(e.target).hasClass("videoEchi")||$(e.target).hasClass("showMore")||n()),!0})),$(document).on("click",".middleNav ul li a, .menu .logo, #sliderWrap .slideButton",(function(e){e.preventDefault();var i=$(this);"#"!==i&&$(".loadingScreen").animate({left:"100%"},(function(){$(".loadingScreen").removeClass("hidden"),$(".loadingScreen").addClass("loaded"),setTimeout((function(){document.location=i.attr("href")}),1e3)}))})),o(),$(".wrapper").removeClass("notLoaded"),r(),$(document).on("click",".bottomCookies .cookiesButton",(function(e){return e.preventDefault(),$(".bottomCookies,.cookiesGrad").fadeOut((function(){$(".bottomCookies,.cookiesGrad").remove()})),$(e.currentTarget).hasClass("accept")&&$.get($(e.currentTarget).attr("href")),!1}))}))};