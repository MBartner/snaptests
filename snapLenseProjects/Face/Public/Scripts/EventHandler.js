// EventHandler.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Handles numerous snapchat defined events.

print("" + new Date());

/*
function onBrowsRaisedEvent(eventData)
{
	print("Brows raised.");

}

function onBrowsLoweredEvent(eventData)
{
	print("Brows lowered.");
}

function onBrowsReturnedToNormalEvent(eventData)
{
	print("Brows returned to normal.");
}*/

function onMouthOpenedEvent(eventData)
{
	print("Mouth opened.");
}

function onMouthClosedEvent(eventData)
{
	print("Mouth closed.");
}


/*
var browsRaisedEvent = script.createEvent("BrowsRaisedEvent");
browsRaisedEvent.bind(onBrowsRaisedEvent);
var browsLoweredEvent = script.createEvent("BrowsLoweredEvent");
browsLoweredEvent.bind(onBrowsLoweredEvent);
var browsReturnedToNormalEvent = script.createEvent("BrowsReturnedToNormalEvent");
browsReturnedToNormalEvent.bind(onBrowsReturnedToNormalEvent);
*/
var mouthOpenedEvent = script.createEvent("MouthOpenedEvent");
mouthOpenedEvent.bind(onMouthOpenedEvent);
var mouthClosedEvent = script.createEvent("MouthClosedEvent");
mouthClosedEvent.bind(onMouthClosedEvent);