/* CURRENTLY IN: javascript/main.js */
(function() {

//$(document).ready(function(){
  $('.bxslider').bxSlider({
  	//slideWidth: 80%
  });
//});

//$('.bxslider').bxSlider({
 //  mode: 'fade'
//   , captions: true
//   , pagerCustom: '#bx-pager'
//   , adaptiveHeight: true
//   , slideWidth: 80%
//});

	function getAPIData( url, responseCb ) {

		if ( typeof url !== "string" ) {
			return -1;
		} // url is not passed in
		if ( url.length === 0 ) {
			return -1;
		} // url is empty
		if ( typeof responseCb !== "function" ) {
			return -1;
		} // callback is undefined

		// var jsonCb = responseCb;
		function kimonoCallback() {
			console.log('here')
		}

		$.ajax({
			url: url
			, crossDomain:true
    		, dataType:"jsonp"
    		, jsonpCallback: 'kimonoCallback'
    		, success: responseCb
		});


	} // gets API data from Kimono

	function turnOptionsIntoURLString( obj ) {
		var optionsArray = [];
		$.each( obj, function( idx, el ) {
			var current = idx+'='+el;
			optionsArray.push( current );
		}); // loop through each object

		return optionsArray.join('&');
	}

	// var JensonURL = 'https://www.kimonolabs.com/api/70so5ndu?'
	// 	, JensonAPIopts = {
	// 		apikey: 'yfBBoRrB4f8tHydxBWaw0JzaDhukg98H'
	// 		, q: 'crankset'
	// 	};

	var raApi = 'https://www.kimonolabs.com/api/398gl0gw?'
		, RAOpts = {
			apikey: 'yfBBoRrB4f8tHydxBWaw0JzaDhukg98H'
			, keyword: 'crankset'
		};

	var comApi = 'https://www.kimonolabs.com/api/3kjk6w1e?'
		, comOpts = {
			apikey: 'yfBBoRrB4f8tHydxBWaw0JzaDhukg98H'
			, keyword: 'crankset'
		};	

	var chainApi = 'https://www.kimonolabs.com/api/bpkcuntk?'
		, comOpts = {
			apikey: 'yfBBoRrB4f8tHydxBWaw0JzaDhukg98H'
			, keyword: 'crankset'
		};		

	var jensonApi = 'https://www.kimonolabs.com/api/72uz2k2c?'
		, comOpts = {
			apikey: 'yfBBoRrB4f8tHydxBWaw0JzaDhukg98H'
			, keyword: 'crankset'
		};			

	var kimono = {
		endpoints : ['398gl0gw', '3kjk6w1e', 'bpkcuntk', '72uz2k2c']
		, apiKey : 'yfBBoRrB4f8tHydxBWaw0JzaDhukg98H'
		, keyword : 'crankset'
	}

	$('#container').on('click', doSearch);

	function doSearch() {
		console.log('clicked');
		getAPIData(
		raApi+turnOptionsIntoURLString( RAOpts )
		, function( data ){
			//console.log( 'data: ', data.results.collection1 );
			console.log(data);
			var results = data.results.collection1
				, prodImg = $(".prod-img");
			// $('#container').append('');

			$.each(results, function(i, result) {
				var temp = $('#productItem').html();
				var generated = _.template(temp);

				$('.prod-container').append(generated(result.property1));
				console.log("this is search data:", data);
			});

			// $('#container').append('</div>');

			var $container = $('.prod-container');
			// initialize
			$container.masonry({
		  		columnWidth: '.grid-sizer',
		  		itemSelector: '.prod',
		  		// gutter: 2
			});

		}
	);
	}

	// fullpage.js

	$(document).ready(function() {
	    $('#fullpage').fullpage({
	        //Navigation
	        menu: false,
	        anchors:['firstSlide', 'secondSlide'],
	        navigation: false,
	        navigationPosition: 'right',
	        navigationTooltips: ['firstSlide', 'secondSlide'],
	        slidesNavigation: true,
	        slidesNavPosition: 'bottom',

	        //Scrolling
	        css3: true,
	        scrollingSpeed: 700,
	        autoScrolling: false,
	        scrollBar: false,
	        easing: 'easeInQuart',
	        easingcss3: 'ease',
	        loopBottom: false,
	        loopTop: false,
	        loopHorizontal: true,
	        continuousVertical: false,
	        normalScrollElements: '#element1, .element2',
	        scrollOverflow: false,
	        touchSensitivity: 15,
	        normalScrollElementTouchThreshold: 5,

	        //Accessibility
	        keyboardScrolling: true,
	        animateAnchor: true,

	        //Design
	        controlArrows: true,
	        verticalCentered: true,
	        resize : true,
	        sectionsColor : ['#ccc', '#fff'],
	        paddingTop: '3em',
	        paddingBottom: '10px',
	        fixedElements: '#header, .footer',
	        responsive: 0,

	        //Custom selectors
	        sectionSelector: '.section',
	        slideSelector: '.slide',

	        //events
	        onLeave: function(index, nextIndex, direction){},
	        afterLoad: function(anchorLink, index){},
	        afterRender: function(){},
	        afterResize: function(){},
	        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
	        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
	    });
	});

	// masonry.js


})();






















