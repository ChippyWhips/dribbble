/*--------------------------------------------------*\
	#DRIBBBLE | JS API METHODS
	

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
    	#DRIBBBLE API METHOD
    	
    	This is a 'singleton' which isolates the code
    	inside from the global namespace, providing
    	a single point of access for functions.
    \*--------------------------------------------------*/
    
    DRIBBBLE.api = (function() {
        
        function API() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */
            /* jshint validthis: true */
            var _this = this;




            
            /*--------------------------------------------------*\
            	#API GET FUNCTION 
            	
            	API.GET accepts 2 arguments.
            	1. A string endpoint url query
            	2. Success callback with one arg (data)
            \*--------------------------------------------------*/
            
            _this.get = function( endPoint, success ) {
	            
	            var url = endPoint.startsWith('http') ? endPoint : DRIBBBLE.settings.url + endPoint;
    
                $.ajax({
                    url: url,
                    complete: console.log('complete'),
                    error: function(e) {
                        
                        console.log(e.statusText);
                    },
                    headers: {
                       
                        Authorization: DRIBBBLE.settings.auth
                    },
                    success: success
                });
            }
            
            
            
                        
            
            /*  Allow "chaining" of methods together  */

            _this.init = function() {
                
                
                
                /*  'this' refers to DRIBBBLE.api  */
                
                return this;
            };
            
            
            /*  This refers to DRIBBBLE.api.init()  */
            
            return _this.init();
        }
        
        
        /*  creating a new object of api rather than a funtion */
        
        return new API();
        
    }());


/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.DRIBBBLE = window.DRIBBBLE || {}, jQuery));


