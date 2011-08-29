// Copyright 2011 The University of Edinburgh / Joseph Farthing

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

// http://www.apache.org/licenses/LICENSE-2.0

if (typeof jQuery == 'undefined') {
	// http://www.hunlock.com/blogs/Howto_Dynamically_Insert_Javascript_And_CSS
	// modded by Joseph Farthing for UoE
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload = runthis;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	runthis();
}

function gaTrack(g,h,i){function c(e,j){return e+Math.floor(Math.random()*(j-e))}var f=1000000000,k=c(f,9999999999),a=c(10000000,99999999),l=c(f,2147483647),b=(new Date()).getTime(),d=window.location,m=new Image(),n='http://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn='+k+'&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn='+h+'&utmr='+d+'&utmp='+i+'&utmac='+g+'&utmcc=__utma%3D'+a+'.'+l+'.'+b+'.'+b+'.'+b+'.2%3B%2B__utmb%3D'+a+'%3B%2B__utmc%3D'+a+'%3B%2B__utmz%3D'+a+'.'+b+'.2.2.utmccn%3D(referral)%7Cutmcsr%3D'+d.host+'%7Cutmcct%3D'+d.pathname+'%7Cutmcmd%3Dreferral%3B%2B__utmv%3D'+a+'.-%3B';m.src=n}

function getSelText() {
	var SelText = '';
	if (window.location.href ) {
		SelText = window.location.href;
	} else if (document.URL) {
		SelText = document.URL;
	} else if (document.location) {
		SelText = document.location;
	}
	return SelText;
}

function runthis() {
	
		var s = getSelText();
		
		
		if (s.search("ed.ac.uk") == -1) {
			alert("This does not appear to be a University of Edinburgh page.");
		} else {
			var i = $('body').attr("class");
			i = i.split(" ");
			
			var a = "";			
			
			for (v in i) {
				if (i[v].search("a-")!= -1) {
					a = i[v];
					a = a.replace("a-","1.");
					var r = confirm("Open article id " + a +" ?");
					if (r == true) {
						gaTrack('UA-3415584-4','ed.ac.uk','/polopoly/bookmarklet');
						window.open("https://www.polopoly.mis.ed.ac.uk/polopoly/content?eventDataClass=com.polopoly.cm.app.orchid.event.impl.EventDataUtil%24ActionEventData&%24action=view&%24significantVersion=true&%24contentId=" + a + "&%24target=work");
					}
				}
			}
			

		}
}

