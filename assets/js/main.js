$(document).ready(function () {
if (jQuery().flexslider) {
    //flexslider ticker
    $('.flexslider-ticker').each(function() {
      var tickerSettings =  {
        animation: "slide",
        animationLoop: false,
        selector: ".items > .item",
        move: 1,
        controlNav: false,
        slideshow: true,
        direction: 'vertical'
      };
      $(this).flexslider(tickerSettings);
    });
    // flexsliders
    $('.flexslider').each(function() {
      var sliderSettings =  {
        animation: $(this).attr('data-transition'),
        selector: ".slides > .slide",
        controlNav: false,
        smoothHeight: true,
        prevText: "",
        nextText: "",
        sync: $(this).data('slidernav') || '',
        start: function(slider) {
          if (slider.find('[data-slide-bg-stretch=true]').length > 0) {
            slider.find('[data-slide-bg-stretch=true]').each(function() {
              if ($(this).data('slide-bg')) {
                $(this).backstretch($(this).data('slide-bg'));
                // $(this).data('slide-bg');
              }
            });
          }
        }
      };
      
      $('html').addClass('has-flexslider');
      $(this).flexslider(sliderSettings);
    });
    $(window).delay(1000).trigger('resize'); //make sure height is right load assets loaded
}});
(function($) {
	"use strict";
	$(document).ready(function() {
		var toggles = document.querySelectorAll(".c-hamburger");
		  	for (var i = toggles.length - 1; i >= 0; i--) {
		    	var toggle = toggles[i];
		    toggleHandler(toggle);
		  	};
		function toggleHandler(toggle) {
		    toggle.addEventListener( "click", function(e) {
		    	e.preventDefault();
		    	(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
		    });
		}

		/*  [ Back Top ]
        - - - - - - - - - - - - - - - - - - - - */
		$('.back-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });

	    /*  [ Staff Picks Slider ]
        - - - - - - - - - - - - - - - - - - - - */
	    $('.staff-picks-slider').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:3000,
   			autoplayHoverPause:true,
   			items: 1,
   			dots: false,
   			nav: true,
   			navText: ['<span class="ion-ios-arrow-back"></span>', '<span class="ion-ios-arrow-forward"></span>'],
		});

	    /*  [ Partners ]
        - - - - - - - - - - - - - - - - - - - - */
	    $('.partners-slider').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:3000,
   			autoplayHoverPause:true,
   			items: 6,
   			dots: false,
   			nav: false,
   			responsive:{
		        0:{
		            items:1,
		        },
		        360:{
		            items:2,
		        },
		        576:{
		            items:3,
		        },
		        992:{
		            items:6,
		        }
		    }
		});

		/*  [ Owl Campaign ]
        - - - - - - - - - - - - - - - - - - - - */
		$("#owl-campaign").owlCarousel({
	        navigation: true,
	        navigationText: ['<span class="ion-ios-arrow-back"></span>', '<span class="ion-ios-arrow-forward"></span>'],
	        loop:true,
			autoplay:true,
			autoplayTimeout:3000,
   			autoplayHoverPause:true,
	        singleItem: true,
	        afterInit: makePages,
	        afterUpdate: makePages
	    });
	    function makePages() {
	        $.each(this.owl.userItems, function(i) {
	            $('.owl-controls .owl-page').eq(i)
	                .css({
	                    'background': 'url(' + $(this).find('img').attr('src') + ')',
	                    'background-size': 'cover',
	                })
	        });
	    };	

	    /*  [ Owl Shop ]
        - - - - - - - - - - - - - - - - - - - - */
		$("#owl-shop").owlCarousel({
	        navigation: true,
	        navigationText: ['<span class="ion-ios-arrow-back"></span>', '<span class="ion-ios-arrow-forward"></span>'],
	        loop:true,
			autoplay:true,
			autoplayTimeout:3000,
   			autoplayHoverPause:true,
	        singleItem: true,
	        afterInit: makePages,
	        afterUpdate: makePages
	    });
	    function makePages1() {
	        $.each(this.owl.userItems, function(i) {
	            $('.owl-controls .owl-page').eq(i)
	                .css({
	                    'background': 'url(' + $(this).find('img').attr('src') + ')',
	                    'background-size': 'cover',
	                })
	        });
	    };	

	    /*  [ Tab Controls ]
        - - - - - - - - - - - - - - - - - - - - */
	    $('.tabs-controls li').on('click', function (e){
	    	e.preventDefault();
			var tab_id = $(this).attr('data-tab');
			$('.tabs-controls li').removeClass('active');
			$('.campaign-content .tabs').removeClass('active');
			$(this).addClass('active');
			$("#"+tab_id).addClass('active');
		});
		$('.menu-category li').on('click', function (e){
	    	e.preventDefault();
			var tab_id = $(this).attr('data-tab');
			$('.menu-category li').removeClass('active');
			$('.content-tab .tab').removeClass('active');
			$(this).addClass('active');
			$("#"+tab_id).addClass('active');
		});

	    /*  [ Search Form ]
        - - - - - - - - - - - - - - - - - - - - */
	    $('.search-icon a').on('click', function (e){
	    	e.preventDefault();
			$( this ).parent().find('.form-search').fadeToggle();
			$( this ).parent().find('#searchForm').fadeToggle();
		});
		$('.form-search').on('click', function (e){
	    	e.preventDefault();
			$( this ).fadeToggle();
			$( this ).parent().find('#searchForm').fadeToggle();
		});

		$(".raised > span").each(function() {
			$(this)
				.data("origWidth", $(this).width())
				.width(0)
				.animate({
					width: $(this).data("origWidth")
				}, 1200);
		});

		/*  [ Main Menu ]
        - - - - - - - - - - - - - - - - - - - - */
		$( '.c-hamburger' ).on( 'click', function() {
            $( this ).parents( '.main-menu' ).toggleClass('open');
            $( 'body' ).toggleClass( 'menu-open' );
        });
        $( 'html' ).on( 'click', function(e) {
            if( $( e.target ).closest( '.main-menu.open' ).length == 0 ) {
                $( '.main-menu' ).removeClass( 'open' );
                $( 'body' ).removeClass( 'menu-open' );
                $( '.c-hamburger' ).removeClass('is-active');
            }
        });

        /*  [ Popup ]
        - - - - - - - - - - - - - - - - - - - - */
		$( '.button-popup' ).on( 'click', function(e) {
			e.preventDefault();
            $( '.popup' ).addClass('open');
        });
        $( '.close' ).on( 'click', function() {
            $( '.popup' ).removeClass('open');
        });

        /*  [ Header Fixed ]
        - - - - - - - - - - - - - - - - - - - - */
        if ($(window).width()<992) {
	        $(window).scroll(function(){
	        	if($(this).scrollTop()>0){
					$('#header').addClass('fixed');
			    }else{
					$('#header').removeClass('fixed');
			    }
	        });

	        /*  [ Sub Menu ]
        	- - - - - - - - - - - - - - - - - - - - */
	        $( '.main-menu li' ).on('click', function (e) {
	        	e.preventDefault();
				$( this ).find('.sub-menu').slideToggle();
			});
        }

	    /*  [ Couunt Down ]
        - - - - - - - - - - - - - - - - - - - - */
	    $("#days").countdown("2018/01/01", function(event) {
		    $(this).html(
		      event.strftime('<p>%D</p><span>Days</span>')
		    );
		});
		$("#hours").countdown("2018/01/01", function(event) {
		    $(this).html(
		      event.strftime('<p>%H</p><span>Hours</span>')
		    );
		});
		$("#minutes").countdown("2018/01/01", function(event) {
		    $(this).html(
		      event.strftime('<p>%M</p><span>Minutes</span>')
		    );
		});
		$("#seconds").countdown("2018/01/01", function(event) {
		    $(this).html(
		      event.strftime('<p>%S</p><span>Seconds</span>')
		    );
		});
	});
})(jQuery);