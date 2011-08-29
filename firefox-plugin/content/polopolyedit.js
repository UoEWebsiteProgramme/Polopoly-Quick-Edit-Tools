// ==UserScript==
// @name           Polopoly Edit
// @namespace      www.ed.ac.uk-edit
// @description    Polopoly Edit
// @include        http://www.ed.ac.uk/*
// ==/UserScript==

//Create DIV
var DIV = document.createElement('div');
	DIV.innerHTML = 'Edit article: ';
	DIV.style.cssFloat = "left";
var divp = document.getElementById("footer");
	divp.appendChild(DIV);

//Create Edit Button
var PEDIT = document.createElement('input');
	PEDIT.setAttribute('type','button');
	PEDIT.setAttribute('name','PEDIT');
	PEDIT.setAttribute('value','GO!');
	PEDIT.style.borderRadius = "3px 0 0 3px";
	PEDIT.style.margin = "0px";
	DIV.appendChild(PEDIT);
	PEDIT.addEventListener('click', function(){document.body.appendChild(document.createElement('script')).src='http://www.uwp.is.ed.ac.uk/webproject/bookmarklet/polobook.js';}, false);
