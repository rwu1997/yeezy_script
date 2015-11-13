// ==UserScript==
// @name         Barneys yeezy s1 page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Richard
// @match        http://www.barneys.com/barneys-new-york/collections/yeezy-season-1
// @grant        none
// ==/UserScript==
/* jshint -W097 */

// Your code here...

$(function(){
	setTimeout(function(){}, 3000);
	runScript1();
});

function runScript1(){

	var keywords = ['350'];
	var continueYeezy = false;
	var yeezyLink;

	$.each($('.browsing-product-item'), function(i, ele){ 
		var yeezyFound = true;
		for (j in keywords){
			if($(ele).data('product-name').toLowerCase().indexOf(keywords[j]) <= -1){
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