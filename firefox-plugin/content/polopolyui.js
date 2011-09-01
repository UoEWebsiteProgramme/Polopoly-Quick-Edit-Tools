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

function gaTrack(g,h,i){function c(e,j){return e+Math.floor(Math.random()*(j-e))}var f=1000000000,k=c(f,9999999999),a=c(10000000,99999999),l=c(f,2147483647),b=(new Date()).getTime(),d=window.location,m=new Image(),n='http://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn='+k+'&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn='+h+'&utmr='+d+'&utmp='+i+'&utmac='+g+'&utmcc=__utma%3D'+a+'.'+l+'.'+b+'.'+b+'.'+b+'.2%3B%2B__utmb%3D'+a+'%3B%2B__utmc%3D'+a+'%3B%2B__utmz%3D'+a+'.'+b+'.2.2.utmccn%3D(referral)%7Cutmcsr%3D'+d.host+'%7Cutmcct%3D'+d.pathname+'%7Cutmcmd%3Dreferral%3B%2B__utmv%3D'+a+'.-%3B';m.src=n}


var s = window.location.href; //get the address URL

var sessionmeta = document.getElementById("sessionmeta");

if (sessionmeta) {
	var id = sessionmeta.getAttribute("polopoly:contentid");
	var state = sessionmeta.getAttribute("polopoly:statename");

	var policywidget = document.getElementsByTagName("polopoly:policywidget");

	if (policywidget[0]) {
		var section = policywidget[0].getAttribute("polopoly:name");
	}
	gaTrack('UA-3415584-4','ed.ac.uk','/polopoly/backend/' + state + '/' + id + '/' + policywidget);
	//alert('/polopoly/backend/' + state + '/' + id + '/' + section);
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

*/