/* FOR navbar-toggle*/
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        if ($(".top-mnu").is(":visible")) {
            $(".top-mnu").fadeOut(600);
        } else {
            $(".top-mnu").fadeIn(600);
        }
    });
});

$(document).ready(function(){
	$('.slider').bxSlider({
		pager: true,
		controls: false,
		oneToOneTouch:false, auto: true,
		
	});
});

$(document).ready(function(){
	$('.first-slider').bxSlider({
		pager: true,
		controls: true,
		oneToOneTouch:false,
 		
	});
});


$(document).ready(function(){
	var h = $('.zap-header').height();
	console.log(h);
	var v = $('#zap-menu').height();
	var x = $('.top-mnu').css('height',h);
});
$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
$(document).ready(function(){
    $('.go_to1').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
$(document).ready(function(){
    $('.go_to2').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
$(document).ready(function(){
    $('.go_to3').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
$(document).ready(function(){
    $('.musu-darbi').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
$(document).ready(function(){
    $('.sazinatines').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});


/*   ____FOR MENU ITS HIDDEN___  */
$('a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
      var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(); // анимируем скроолинг к элементу scroll_el
	  $(".top-mnu").fadeOut(600);
      }
      return false; // выключаем стандартное действие
    });


	$(document).ready(function(){
	    $('.komesdaram').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
	        }
		    return false; // выключаем стандартное действие
	    });
	});
