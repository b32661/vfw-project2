/**
 *   Jeremy Criddle
 *   VFW 1302
 *   Project 2
 *  02-17-2013
 */
 
 // declare variables
var myEvent = document.getElementById("myEvent");
var eventName = document.getElementById("eventName");
var eventDescription = document.getElementById("eventDescription");
var eventDate = document.getElementById("eventDate");
var eventTime = document.getElementById("eventTime");
var sure = document.getElementById("sure");
var clearData = document.getElementById("clear");
var preferredFormat = document.getElementById("stomper").timeFormat;
var send = document.getElementById("stomp");

// functions

function captureData (){
	var id = Math.floor(Math.random()*100000001);
	var item = {};
		[item.name = "Name: ", eventName.value];
		[item.description = "Description: ", eventDescription.value];
		[item.date = "Date: ", eventDate.value];
		[item.time = "Time: ", eventTime.value];
		[item.sure = "Sure: ", sure.value];
		[item.myEvent = "Sure Strength: ", myEvent.value];
		[item.name = "Event: ", myEvent.value];
		
	localStorage.setItem(id, item);
};


function clearStorage(){
	localStorage.clear();
};


function sendForm(){
	
};


function getForm(){
	for(i=0, j=localStorage.length; i,j; i++);
	var theKey = localStorage.key(i);
	var theValue = localStorage.getItem(theKey);
	
	
};



//event listeners
eventName.addEventListener("blur", captureName);
eventDescription.addEventListener("blur", captureDescription);
eventDate.addEventListener("blur", captureDate);
eventTime.addEventListener("blur", captureTime);
clearData.addEventListener("click", clearStorage);
send.addEventListener("click", sendForm);
sure.addEventListener("change", captureSure);
myEvent.addEventListener("change", captureMyEvent);
// main code


