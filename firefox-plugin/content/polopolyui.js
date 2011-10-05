// ==UserScript==
// @name           Polopoly Edit
// @namespace      www.ed.ac.uk-edit
// @description    Polopoly Track
// @include        http://www.polopoly.mis.ed.ac.uk/*
// ==/UserScript==

// Copyright 2011 The University of Edinburgh / Joseph Farthing / Steven Ross

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

// http://www.apache.org/licenses/LICENSE-2.0

// extensions 
// z1 = page title
// z2 = medium


/**
 * Google Analytics JS v1
 * http://code.google.com/p/google-analytics-js/
 * Copyright (c) 2009 Remy Sharp remysharp.com / MIT License
 * $Date: 2009-02-25 14:25:01 +0000 (Wed, 25 Feb 2009) $
 * modified - Joseph Farthing, 2011
 */
function gaTrack(urchinCode, domain, url) {

	function rand(min, max) {
		return min + Math.floor(Math.random() * (max - min));
	}

	var userid = getCookie("userId");
	userid = userid.substr(3, 9);
	userid = parseInt(userid, 16);

	var i=1000000000,
			utmn=rand(i,9999999999), //random request number
			cookie=userid, //user id
			random=rand(i,2147483647), //number under 2147483647
			today=(new Date()).getTime(),
			win = window.location,
			img = new Image();
			
	//get the cookie data
	var cookie_utmb = getCookie("__utmb");
	var cookie_utma = getCookie("__utma");
	
	var dt = new Date(), expiryTime = dt.setTime( dt.getTime() + 1800000 );
	
	if (cookie_utma != null && cookie_utma != "" && cookie_utma != "https://www.polopoly.mis.ed.ac.uk/polopoly/CM") {
		// the  UTMA cookie has been set
	
		cookie_utma = cookie_utma.split('.');
		cookie_utma_length = cookie_utma.length-1;
		var cookie_utma_visitno = new Number (cookie_utma[cookie_utma_length]);
		cookie_utma_visitno = cookie_utma_visitno;
		if (cookie_utma_visitno + 1 == 'NaN' || cookie_utma_visitno > 99999) {
			cookie_utma_visitno = 1;
		}
		
			
		if (cookie_utmb != null && cookie_utmb != "" && cookie_utmb != "https://www.polopoly.mis.ed.ac.uk/polopoly/CM") {
			// the UTMB cookie has been set
			cookie_utmb = cookie_utmb.split('.',3)
			var cookie_utmb_visitno = new Number (cookie_utmb[1]);
			cookie_utmb_visitno = cookie_utmb_visitno + 1;
			cookie_utmb = userid + '.' + cookie_utmb_visitno + '.10.' + today // set utmb cookie
			eraseCookie("__utmb");
			document.cookie = '__utmb=' + cookie_utmb + ';expires=' + dt.toGMTString();
			cookie_utma_prev_visit = cookie_utma[cookie_utma_length-2];
			
		} else {
			cookie_utmb = userid + '.1.10.' + today // set utmb cookie
			document.cookie = '__utmb=' + cookie_utmb + ';expires=' + dt.toGMTString();
			cookie_utmb = "";
			cookie_utma_visitno = cookie_utma_visitno + 1;
			cookie_utma_prev_visit = cookie_utma[cookie_utma_length-1];
		}
			cookie_utma = userid + '.' + cookie_utma[1] + '.' + cookie_utma_prev_visit + '.' + today + '.' + cookie_utma_visitno // set utma cookie
			//alert(cookie_utma);
			eraseCookie("__utma");
			setCookie("__utma",cookie_utma,1825);
			

	

	} else {
		
		cookie_utma = userid + '.' + today + today + '.0' // set utma cookie
		setCookie("__utma",cookie_utma,1825);
		
		cookie_utmb = userid + '.1.10.' + today // set utmb cookie
		document.cookie = '__utmb=' + cookie_utmb + ';expires=' + dt.toGMTString();
		cookie_utmb = "";
		cookie_utma_visitno = cookie_utma_visitno + 1;
		cookie_utma_prev_visit = cookie_utma[cookie_utma_length-1];

	}
	
	

	
	var urchinUrl = 'http://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn='
		+utmn+'&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn='
		+domain+'&utmr='+win+'&utmp='
		+url+'&utmac='
		+urchinCode+'&utmcc=__utma%3D'
		+cookie_utma+'.2%3B%2B__utmb%3D' //insert __utma value
		+cookie_utmb+'%3B%2B__utmc%3D' //insert __utmb value
		+cookie+'%3B%2B__utmz%3D'
		+cookie+'.'+today
		+'.2.2.utmccn%3D(referral)%7Cutmcsr%3D' + win.host + '%7Cutmcct%3D' + win.pathname + '%7Cutmcmd%3Dreferral%3B%2B__utmv%3D'
		+cookie+'.-%3B';

	
	// trigger the tracking
	img.src = urchinUrl;
}

//function gaTrack(g,h,i,z1,z2){function c(e,j){return e+Math.floor(Math.random()*(j-e))}var f=1000000000,k=c(f,9999999999),a=c(10000000,99999999),l=c(f,2147483647),b=(new Date()).getTime(),d=window.location,m=new Image(),n='http://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn='+k+'&utmsr=-&utm_medium='+z2+'&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt='+z1+'&utmhn='+h+'&utmr='+d+'&utmp='+i+'&utmac='+g+'&utmcc=__utma%3D'+a+'.'+l+'.'+b+'.'+b+'.'+b+'.2%3B%2B__utmb%3D'+a+'%3B%2B__utmc%3D'+a+'%3B%2B__utmz%3D'+a+'.'+b+'.2.2.utmccn%3D(referral)%7Cutmcsr%3D'+d.host+'%7Cutmcct%3D'+d.pathname+'%7Cutmcmd%3Dreferral%3B%2B__utmv%3D'+a+'.-%3B';m.src=n}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function eraseCookie(name) {
setCookie(name, "", -1);
}

var s = window.location.href; //get the address URL

var sessionmeta = document.getElementById("sessionmeta");

if (sessionmeta) {
	var id = sessionmeta.getAttribute("polopoly:contentid");
	id = id.substr(0, id.lastIndexOf('.')) || id;
	var state = sessionmeta.getAttribute("polopoly:statename");
	
	//userid = s.replace('https://www.polopoly.mis.ed.ac.uk/polopoly/CM?owid=','');
	//userid = userid.substr(0, userid.indexOf('&')) || userid;
	
	var policywidget = document.getElementsByTagName("polopoly:policywidget");
	
	// TODO page title
	//var pagetitle = document.getElementsByClassName("title").h1.innerHTML; // /html/body/form/div[3]/div/h1
	//alert(pagetitle);
	
	if (policywidget[0]) {
		var section = policywidget[0].getAttribute("polopoly:name");
		section = section.replace('menu/webproxy/contentMetadataInWebproxy','webproxy');
		section = section.replace('menu/metadata/contentMetadataInMetadata','properties');
		section = section.replace('pageMenu/metadata/contentMetadataInMetadata','properties');
		section = section.replace('menu/reference/contentMetadataInReference','references');
		section = section.replace('menu/superplus/contentMetadataInSuperplus','super-plus');
		section = section.replace('menu/rss/contentMetadataInRss','rssbox');
		section = section.replace('menu/primary/contentMetadataInPrimary','middle-row');
		section = section.replace('menu/secondary/contentMetadataInSecondary','bottom-row');
		section = section.replace('menu/quicklinks/contentMetadataInQuickLinks','quicklinks');
		section = section.replace('system/name','system-settings');
		section = section.replace('menu/text/contentMetadataInText','integration-article');
		section = section.replace('pageMenu/formPage/contentMetadataInFormPage','form');
		section = section.replace('LoginName','user');
		if (id.indexOf("2.") !== -1 && section !== 'system-settings') {
			section = 'section';
		}
		
		var pagetitle = id;
			
	}
	

	
	gaTrack('UA-25689276-1','www.polopoly.mis.ed.ac.uk', id + '/' + state + '?tab=' + section);
	//alert('www.polopoly.mis.ed.ac.uk/' + id + '/' + state + '?tab=' + section + '?user=' + userid)
	
	var userid = getCookie("userId");
	userid = userid.substr(3, 9);
	userid = parseInt(userid, 16);
	
	var polopolyTrackUrl = 'http://www.uwp.is.ed.ac.uk/plugin/polopoly-update.php?id='+ userid + '     ' + id + '     ' + state + '     ' + section;

	img2 = new Image();
	// trigger the tracking
	img2.src = polopolyTrackUrl;
} 

/*

menu/webproxy/contentMetadataInWebproxy = webproxy
menu/metadata/contentMetadataInMetadata = properties
menu/reference/contentMetadataInReference = references
menu/superplus/contentMetadataInSuperplus = superplus
menu/feature/contentMetadataInFeature = feature panel
menu/rss/contentMetadataInRss = rss box (subsite)
menu/primary/contentMetadataInPrimary = middle row
menu/secondary/contentMetadataInSecondary = bottom row
menu/quicklinks/contentMetadataInQuickLinks = quicklinks
system/name = section
menu/text/contentMetadataInText = special HTML article
pageMenu/formPage/contentMetadataInFormPage = Form
LoginName = user

*/