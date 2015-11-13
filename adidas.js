// ==UserScript==
// @name         Adidas shoe page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        http://store.y-3.com/special/yeezy#/
// @grant        none
// ==/UserScript==
/* jshint -W097 */

// Your code here...


$(function(){
	setTimeout(function(){}, 3000);
	runScript1();
});

function runScript1(){
	// Mandatory keywords
	var keywords = ['yeezy', '850'];

	var continueYeezy = false;
	var yeezyLink;

	var itemLinks = $('.item').find('a');
	$.each(itemLinks, function(i, ele){
		if (typeof $(ele).data('codice10') !== 'undefined'){
			var yeezyFound = true;
			for (j in keywords){
				if (typeof ele.title !== "undefined" && ele.title.toLowerCase().indexOf(keywords[j]) <= -1){
					yeezyFound = false;
					break;
				}
			}

			if (yeezyFound){
				continueYeezy = true;
				yeezyLink = $(ele);
				return false;
			}
		}
	});

	console.log(continueYeezy);
	console.log(yeezyLink);
	if (continueYeezy){
		yeezyLink.click();
	}
	else{
		location.reload();
	}
}

