/**
 *   Jeremy Criddle
 *   VFW 1302
 *   Project 2
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



var captureName = function (){
	localStorage.setItem("name", eventName.value);
};


var captureDescription = function(){
	localStorage.setItem("description", eventDescription.value);
};


var captureDate = function(){
	localStorage.setItem("date", eventDate.value);
};

var captureTime = function(){
	localStorage.setItem("time", eventTime.value);
};


var captureSure = function(){
	localStorage.setItem("sure strength", sure.value);
	
};

var captureMyEvent = function(){
	localStorage.setItem("event", myEvent.value);
};

var clearStorage = function(){
	localStorage.clear();
};


var sendForm = function(){
	
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


