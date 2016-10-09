/*--------------------------------------------------*\
	#DRIBBBLE | JS SETTINGS
	
	This script contains all the reusable data such
	as urls, error messages, html created by JS &
	repeated values & values that may change later.
	
	To start our script we wrap all of our code in a
	self-executing anonymous function. We then pass
	in 3 arguments to setup jQuery & our namespace.
	
	1. DRIBBBLE is our namespace.
	2. $ is defined for jQuery.
	3. Lastly we ensure undefined really is undefined.
\*--------------------------------------------------*/

(function(DRIBBBLE, $, undefined) {
    
    /* This is our global configuration. It will work across your js files */
    
    DRIBBBLE.settings = {
        debug: true,
        speed: 250,
        auth: 'Bearer b32717b503469f4529a4e6135a2f43e2e790b1be7a4cb7a6bf07a901f7387f37',
        url: 'https://api.dribbble.com/v1/'
    };
    
    
    
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.DRIBBBLE = window.DRIBBBLE || {}, jQuery));


