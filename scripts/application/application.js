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
    
    var shots; // Create empty shots var to be updated later.
	var filters = {}; // Create empty filters object to be updated later.

	
	/*--------------------------------------------------*\
		#Fetch data on load 
		
		This is a function to fetch the shots 
		whenever called. It accepts 2 arguments:
		1. The url path 
		2. The url query(ies)
	\*--------------------------------------------------*/
    
    var fetch = function(path, query) {
	    
	    // If path is undefined, default to shots.
	    path = typeof path !== 'undefined' ? path : 'shots';
	    
	    // Check if query var is undefined to build url query.
	    query = typeof query !== 'undefined' ? query + '&' : '';
	    
	    // Get data with 96 results per page.
	    DRIBBBLE.api.get( path + '?' + query + 'per_page=96', function(data) {
	        
	        // Update empty shots var with requested data to make 'data' 
	        // available outside of fetch function.
	        shots = data;
	        
	        // Create handlebars template and append it to DOM.
	        var tpl = Handlebars.compile( $('#shots').html() ); 
	        
	        $('.js-shots').append( tpl(data) );
	        
	    });
	};
	
	fetch(); // Run Fetch on load.
	

    
    /*--------------------------------------------------*\
		#Filter Shots
	\*--------------------------------------------------*/
	
	$('.js-filter').change(function() {
	
		// Store this rather than fetching the object multiple times.
		var $this = $(this);
		var val = $this.val(); // Get value of filter.
		var filter = $this.data('filter'); // Get name/type of filter.
		
		// Update filters object with the filter and value.
		filters[filter] = val;

		$('.js-shots').html(''); // Clear DOM.
		
		fetch( 'shots', $.param(filters) ); // Re-run fetch with filters.
	
	});
	
	
    
    /*--------------------------------------------------*\
		#Shots Single
	\*--------------------------------------------------*/
    
    $(document).on('click', '.js-shot', function(e) {
	    
	    // Store ID of item based on Object Iterration count.
        var id = $(this).closest('.shot').data('count');
        
        // Create handlebars template and append it to DOM.
        var tpl = Handlebars.compile( $('#shotSingle').html() );   
        
        $('.js-shot-single').html('').append( tpl(shots[id]) );
        
        
        // Get Comments data of curent shot.
        DRIBBBLE.api.get(shots[id].comments_url, function(coms) {
	        
	        // Create handlebars template and append it to DOM.
			var tpl = Handlebars.compile( $('#shotComments').html() ); 
			
			$('.js-shot-comments').html('').append( tpl(coms) );
			
			// Check Tabs
			UIKIT.tabs.tabCheck();
	        
        });
        
    });
    
    
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.DRIBBBLE = window.DRIBBBLE || {}, jQuery));


