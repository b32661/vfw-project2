/**
 *   Jeremy Criddle
 *   VFW 1302
 *   Project 2
 */  

var purposeBox = document.getElementById("sstyle");


 
var sureSlider = document.getElementById("ssure");



var preferFormat = document.getElementsByName("timeformat");


 
var eventName = document.getElementById("sname");




 
var eventDetails = document.getElementById("sdescription");
var changeBorder = function (){
	eventDetails.setAttribute("class", "hasFocus");
}
eventDetails.addEventListener("focus", changeBorder);


 
var eventDate = document.getElementById("sdate");


 
var eventTime = document.getElementById("stime");


