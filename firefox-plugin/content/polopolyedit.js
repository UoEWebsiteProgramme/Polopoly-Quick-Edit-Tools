// ==UserScript==
// @name           Polopoly Edit
// @namespace      www.ed.ac.uk-edit
// @description    Polopoly Edit
// @include        http://www.ed.ac.uk/*
// ==/UserScript==

// Copyright 2011 The University of Edinburgh / Joseph Farthing / Steven Ross

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

// http://www.apache.org/licenses/LICENSE-2.0




var s = window.location.href; //get the address URL
		
var i = document.body.getAttribute("class");

i = i.split(" ");

var a = "";	
var d = "";		

for (v in i) {
	
	if (i[v].search("a-")!= -1) {
		a = i[v];
		a = a.replace("a-","1.");	
		//Create DIV
		var DIV = document.createElement('div');
			DIV.innerHTML = ' <strong>Article ID</strong>: ' + a + ' ';
			DIV.setAttribute('style','float: left; background-color: rgb(228, 243, 224); position: absolute; margin-top: 0pt ! important; margin-right: 0pt ! important; margin-bottom: 0pt ! important; margin-left: -20px; min-width: 99%; padding: 3px;');
		var divp = document.getElementById("footer");
			divp.appendChild(DIV);


		//Create Edit Button
		var PEDIT = document.createElement('input');
			PEDIT.setAttribute('type','button');
			PEDIT.setAttribute('name','PEDIT');
			PEDIT.setAttribute('value','Open page in Polopoly');
			PEDIT.style.cssFloat = 'right';
			PEDIT.style.borderRadius = "3px 0 0 3px";
			PEDIT.style.margin = "0px";
			DIV.appendChild(PEDIT);
			PEDIT.setAttribute('onclick','javascript:(function(){function c(a,b){return a+Math.floor(Math.random()*(b-a))}var f=1e9,k=c(f,9999999999),a=c(1e7,99999999),l=c(f,2147483647),b=(new Date).getTime(),d=window.location,m=new Image,g="UA-3415584-4",h="ed.ac.uk",i="/polopoly/bookmarklet",n="http://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn="+k+"&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn="+h+"&utmr="+d+"&utmp="+i+"&utmac="+g+"&utmcc=__utma%3D"+a+"."+l+"."+b+"."+b+"."+b+".2%3B%2B__utmb%3D"+a+"%3B%2B__utmc%3D"+a+"%3B%2B__utmz%3D"+a+"."+b+".2.2.utmccn%3D(referral)%7Cutmcsr%3D"+d.host+"%7Cutmcct%3D"+d.pathname+"%7Cutmcmd%3Dreferral%3B%2B__utmv%3D"+a+".-%3B";m.src=n;window.open("https://www.polopoly.mis.ed.ac.uk/polopoly/content?eventDataClass=com.polopoly.cm.app.orchid.event.impl.EventDataUtil$ActionEventData&$action=view&$significantVersion=true&$contentId=' + a + '&$target=work")})();');
		
	}
	
	if (i[v].search("d-")!= -1) {
		d = i[v];
		d = d.replace("d-","2.");
		DIV.innerHTML =  '<img src="http://www.uwp.is.ed.ac.uk/desktop.gif" alt="polopoly" style="vertical-align: middle; margin: 0pt 10px;"> <strong>Section ID</strong>: ' + d + ' &nbsp; ' + DIV.innerHTML;
	}
}