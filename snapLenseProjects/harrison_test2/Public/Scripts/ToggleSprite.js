// ToggleSprite.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Controls the visibility of the 2D sprite

//@input Component.SpriteVisual sprite

function onCameraFrontEvent(eventData)
{
	print("CameraFrontEvent");
	script.sprite.enabled = true;
}

function onCameraBackEvent(eventData)
{
	print("CameraBackEvent");
	script.sprite.enabled = false;
}

var cameraFrontEvent = script.createEvent("CameraFrontEvent");
cameraFrontEvent.bind(onCameraFrontEvent);
var cameraBackEvent = script.createEvent("CameraBackEvent");
cameraBackEvent.bind(onCameraBackEvent);
