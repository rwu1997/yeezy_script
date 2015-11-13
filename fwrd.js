// Instructions:
// 1. Navigate to http://www.fwrd.com/brand-kanye-west-x-adidas-originals/2f948a/
// OR the kanye-west-x-adidas-original landing page (they might change the 2f948a at the end of the URL)

// 2. Enable scripts
// 3. Refresh page



// ==UserScript==
// @name         Fwrd yeezy s1 page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        http://www.fwrd.com/brand-kanye-west-x-adidas-originals/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */

// Your code here...


$(function(){
	setTimeout(function(){}, 3000);
	runScript0();
});

function runScript0(){
	var keywords = ['350'];
	var continueYeezy = false;
	var yeezyLink;

	$.each($('li.item'), function(i, ele){ 
		var yeezyFound = true;
		for (j in keywords){
			if($(ele).find('.product_name').text().toLowerCase().indexOf(keywords[j]) <= -1){
				yeezyFound = false;
				break;
			}
		}

		if (yeezyFound){
			continueYeezy = true;
			yeezyLink = $(ele);
			return false;
		}
	});

	if (continueYeezy){
		yeezyLink.find('img').click();
	}
	else{
		location.reload();
	}
}



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

// Your code here...


$(function(){
	setTimeout(function(){}, 3000);
	runScript1();
});

function runScript1(){
	var bagButton = $('button.addtobag');
	if (bagButton.length > 0 && bagButton.text().toLowerCase().indexOf("add to bag") > -1){

		var sizeSelected = false;
		$.each($('#size-select option').get().reverse(), function(i, ele){
			console.log(ele.value.toLowerCase());
			var maxsize = 12;
			var minsize = 11;
			while(maxsize >= minsize){
				if(ele.value.toLowerCase().indexOf(maxsize) > -1){
					$('#size-select')[0].value = ele.value;
					sizeSelected = true;
					break;
				}

				maxsize-= 0.5;
			}

			if (sizeSelected)
				return false;
		});

		// If size  chosen, clicks add to bag button
		if (sizeSelected){
			bagButton.click();

			var wait1 = setInterval(function() {
				if ($('#item-added-btn').length) {
					$('#item-added-btn').click();
					clearInterval(wait1);
				}
			}, 100);
		}
		else
			location.reload();

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

// Your code here...
$(function(){
	setTimeout(function(){}, 3000);
	runScript4();
});

function runScript4(){
}