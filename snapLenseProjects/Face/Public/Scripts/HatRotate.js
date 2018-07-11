// HatRotate.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Rotate hat on brows raised

//@input float tiltAngle
//@input float baseAngle


function onBrowsRaisedEvent(eventData)
{
	print("Brows raised.");

	// Get scene object
	var hat = script.getSceneObject().getTransform();

	// Get current rotation in quat's and convert to euler angles
	var currentRotation = hat.getLocalRotation();
	var euler = currentRotation.toEulerAngles();

	// Compute the new angle and convert back to quat
	var newEuler = new vec3(euler.x, script.tiltAngle, euler.z);
	var newQuat = quat.fromEulerVec(newEuler);

	// Update the scene objects rotation
	hat.setLocalRotation(newQuat);

}

function onBrowsLoweredEvent(eventData)
{
	print("Brows lowered.");

	// Get scene object
	var hat = script.getSceneObject().getTransform();

	// Get current rotation in quat's and convert to euler angles
	var currentRotation = hat.getLocalRotation();
	var euler = currentRotation.toEulerAngles();

	// Compute the new angle and convert back to quat
	var newEuler = new vec3(euler.x, script.baseAngle, euler.z);
	var newQuat = quat.fromEulerVec(newEuler);

	// Update the scene objects rotation
	hat.setLocalRotation(newQuat);
}

function onBrowsReturnedToNormalEvent(eventData)
{
	print("Brows returned to normal.");
}


var browsRaisedEvent = script.createEvent("BrowsRaisedEvent");
browsRaisedEvent.bind(onBrowsRaisedEvent);
var browsLoweredEvent = script.createEvent("BrowsLoweredEvent");
browsLoweredEvent.bind(onBrowsLoweredEvent);
var browsReturnedToNormalEvent = script.createEvent("BrowsReturnedToNormalEvent");