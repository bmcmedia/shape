(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="&34";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js6').attr('src', (dpi>1) ? 'images/sourisblanche-56.png' : 'images/sourisblanche-28.png');
$('.js7').attr('src', (dpi>1) ? 'images/04-566-1.jpg' : 'images/04-283-1.jpg');
$('.js8').attr('src', (dpi>1) ? 'images/05-460-1.jpg' : 'images/05-230-1.jpg');

$('.js10').attr('src', (dpi>1) ? 'images/sourisblanche-56.png' : 'images/sourisblanche-28.png');
$('.js11').attr('src', (dpi>1) ? 'images/06-1920-1.jpg' : 'images/06-960-1.jpg');




var a='data-src'; if($('.js13 .slide3').hasAttr('src')) { a='src'; } $('.js13 .slide3').attr(a, (dpi>1) ? 'images/10-1920-1.png' : 'images/10-960-1.png');
$('.js14').attr('src', (dpi>1) ? 'images/sourisnoir-56.png' : 'images/sourisnoir-28.png');


$('.js18').attr('src', (dpi>1) ? 'images/12-460-1.jpg' : 'images/12-230-1.jpg');
$('.js19').attr('src', (dpi>1) ? 'images/signature-556-1.png' : 'images/signature-278-1.png');

};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js20').mouseenter(function() { $.loadImages('images/06-1417-1.jpg', function() { }) });
$('.js20').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js20-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/06-1417-1.jpg'; } } });
$('.js13 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});var wl = new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "2.10s", "0.00s", 1, 100);
wl.addAnimation($('.js4')[0], "1.30s", "0.00s", 1, 100);
wl.addAnimation($('.js5')[0], "1.50s", "1.50s", 1, 100);
wl.addAnimation($('.js11')[0], "3.00s", "0.00s", 1, 100);
wl.addAnimation($('.js17')[0], "1.30s", "0.00s", 1, 100);
wl.start();

});