/*--------------------------------------------------*\
	#DRIBBBLE | JS HELPERS
	
	This script contains all the helper/utility
	functions which we can use across our other
	JS files.
	
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
    
    
    /*--------------------------------------------------*\
    	#DRIBBBLE HELPER METHOD
    	
    	This is a 'singleton' which isolates the code
    	inside from the global namespace, providing
    	a single point of access for functions.
    \*--------------------------------------------------*/
    
    DRIBBBLE.helper = (function() {
        
        function Helper() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */
            /* jshint validthis: true */
            var $this = this;




            
            /*--------------------------------------------------*\
            	#YOUR HELPER FUNCTIONS HERE
            \*--------------------------------------------------*/
            
            
            
            
                        
            
            /*  Allow "chaining" of methods together  */

            $this.init = function() {
                
                
                
                
                /*  'this' refers to DRIBBBLE.helper  */
                
                return this;
            };
            
            
            /*  This refers to DRIBBBLE.helper.init()  */
            
            return $this.init();
        }
        
        
        /*  creating a new object of helper rather than a funtion */
        
        return new Helper();
        
    }());


/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.DRIBBBLE = window.DRIBBBLE || {}, jQuery));


