// ==UserScript==
// @name         Ssense yeezy s1 page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        https://www.ssense.com/en-ca/men/designers/yeezy-season-1
// @grant        none
// ==/UserScript==
/* jshint -W097 */

// Your code here...


$(function(){
	setTimeout(function(){}, 3000);
	runScript1();
});

function runScript1(){

	var keywords = ['trenchcoat'];
	var continueYeezy = false;
	var yeezyLink;

	$.each($('.browsing-product-item'), function(i, ele){ 
		var yeezyFound = true;
		for (i in keywords){
			if($(ele).data('product-name').toLowerCase().indexOf(keywords[i]) <= -1){
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
		yeezyLink.find('a').click();
	}
	else{
		location.reload();
	}
}








// ==UserScript==
// @name         Ssense cart page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        https://www.ssense.com/en-ca/men/product/yeezy-season-1/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */

// Your code here...

$(function(){
	setTimeout(function(){}, 3000);
	runScript2();
});

function runScript2(){


	var sizeSelected = false;
	$.each($('select#size option').get().reverse(), function(i, ele){
		console.log(ele.text.toLowerCase());
		var maxsize = 12;
		var minsize = 11;
		while(maxsize >= minsize){
			if(ele.disabled != true && ele.text.toLowerCase().indexOf(maxsize) > -1){
				$('select#size')[0].value = ele.value;
				sizeSelected = true;
				break;
			}

			maxsize-= 0.5;
		}

		if (sizeSelected)
			return false;
	});

	if(sizeSelected){
		var wait1 = setInterval(function() {
			if ($('.btn-add-to-bag').length) {
				$('.btn-add-to-bag').click();
				clearInterval(wait1);

				var wait2 = setInterval(function() {
					if ($('.btn-checkout a').length) {
						$('.btn-checkout a').click();	
						clearInterval(wait2);
					}
				}, 100);
			}
		}, 100);
	}
	else
		location.reload();
}

// ==UserScript==
// @name         Ssense shopping bag page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        https://www.ssense.com/en-ca/shopping-bag
// @grant        none
// ==/UserScript==
/* jshint -W097 */

// Your code here...

$(function(){
	setTimeout(function(){}, 3000);
	runScript3();
});

function runScript3(){
	location.reload();
}
