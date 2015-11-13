// ==UserScript==
// @name         Fwrd shoe page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        http://www.fwrd.com/product-*/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...


$(function(){
	setTimeout(function(){}, 3000);
	runScript1();
});

function runScript1(){
	var bagButton = $('button.addtobag');
	if (bagButton.length > 0 && bagButton.text().toLowerCase().indexOf("add to bag") > -1){

		// Choose size
		var maxsize = 16;
		var minsize = 6; 
		// Loops through sizes until one available
		while (maxsize >= minsize){
			if ($('#size-select option[value='+maxsize+']').length > 0 && $('#size-select option[value='+maxsize+']').data('is-oos') == false){
				$('#size-select')[0].value = maxsize;
				break;
			}
			else
				maxsize-= 0.5;
		}
		// If size  chosen, clicks add to bag button
		if ($('#size-select')[0].value.length <= 0)
			alert("There are no sizes available between " + minsize + " and " + maxsize);
		else{
			bagButton.click();

			var wait1 = setInterval(function() {
				if ($('#item-added-btn').length) {
					$('#item-added-btn').click();
					clearInterval(wait1);
				}
			}, 100);

		}

	}
	else{
		location.reload();
	}
}



// ==UserScript==
// @name         Fwrd bag page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        http://www.fwrd.com/fw/ShoppingBag.jsp
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...

$(function(){
	setTimeout(function(){}, 3000);
	runScript2();
});

function runScript2(){

	var wait1 = setInterval(function() {
		if ($('#proceed_checkout').length) {
			$('#proceed_checkout').click();
			clearInterval(wait1);
		}
	}, 100);
}







// ==UserScript==
// @name         Fwrd checkout page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        https://www.fwrd.com/fw/SignInCheckout.jsp
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
$(function(){
	setTimeout(function(){}, 3000);
	runScript3();
});

function runScript3(){
	var wait1 = setInterval(function() {
		if ($('.login_cta').length) {
			$('.login_cta').click();
			clearInterval(wait1);
		}
	}, 100);
}







// ==UserScript==
// @name         Fwrd shipping page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        https://www.fwrd.com/fw/DeliveryOptions.jsp
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
$(function(){
	setTimeout(function(){}, 3000);
	runScript4();
});

function runScript4(){
}