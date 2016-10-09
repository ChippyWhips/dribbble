// @codekit-prepend "settings.js";
// @codekit-prepend "modules/helpers.js";
// @codekit-prepend "modules/api-handler.js";

/*--------------------------------------------------*\
	#DRIBBBLE | JS MAIN COMPONENTS
	
	This script contains your standard jQuery shiz,
	functions, ui components & any other js magic.
	
	To start our script we wrap all of our code in a
	self-executing anonymous function. We then pass
	in 3 arguments to setup jQuery & our namespace.
	
	1. DRIBBBLE is our namespace.
	2. $ is defined for jQuery.
	3. Lastly we ensure undefined really is undefined.
\*--------------------------------------------------*/

(function(DRIBBBLE, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
    var shots;
	var filters = {};

	
	/*--------------------------------------------------*\
		#Fetch data on load 
		
		This is a callable self executing function to 
		fetch the shots on load and also whenever called.
	\*--------------------------------------------------*/
    
    var fetch = function(path, query) {
	    
	    path = typeof path !== 'undefined' ? path : 'shots';
	    query = typeof query !== 'undefined' ? query + '&' : '';
	    
	    DRIBBBLE.api.get( path + '?' + query + 'per_page=96', function(data) {
	        
	        shots = data;
	        
	        var tpl = Handlebars.compile( $('#shots').html() ); 
	        
	        $('.js-shots').append( tpl(data) );
	        
	    });
	};
	
	fetch();
	

    
    /*--------------------------------------------------*\
		#Filter Shots
	\*--------------------------------------------------*/
	
	$('.js-filter').change(function() {
	
		var $this = $(this);
		var val = $this.val();
		var filter = $this.data('filter');
		
		filters[filter] = val;

		$('.js-shots').html('');
		

		fetch( 'shots', $.param(filters) );
	
	});
	
	
    
    /* Shot single */
    
    $(document).on('click', '.js-shot', function(e) {
      
        var id = $(this).closest('.shot').data('count');
        
        var tpl = Handlebars.compile( $('#shotSingle').html() );   
        
        $('.js-shot-single').html('').append( tpl(shots[id]) );
        
        
        
        DRIBBBLE.api.get(shots[id].comments_url, function(coms) {
	        
			//console.log(coms);
			var tpl = Handlebars.compile( $('#shotComments').html() ); 
			
			$('.js-shot-comments').html('').append( tpl(coms) );
			
			UIKIT.tabs.tabCheck();
			
			console.log(shots[id]);
	        
        });
        
    });
    
    
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.DRIBBBLE = window.DRIBBBLE || {}, jQuery));


