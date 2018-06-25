// -----JS CODE-----
//print(Date());
if (global.firstAccess === true){
	global.firstAccess = false;
	global.baseLocation = script.getSceneObject().getTransform().getLocalPosition();
	global.baseRotation = script.getSceneObject().getTransform().getLocalRotation();
	global.baseY = global.baseRotation.toEulerAngles().y;
}

var currentLocation = script.getSceneObject().getTransform().getLocalPosition();
var currentRotation = script.getSceneObject().getTransform().getLocalRotation();

if (currentLocation.y > global.baseLocation.y + 10){
	global.up = false;
}
else if (currentLocation.y <= global.baseLocation.y){
	global.up = true;
}

/*if (global.up){
	script.getSceneObject().getTransform().setLocalPosition(new vec3(currentLocation.x, currentLocation.y + 1, currentLocation.z));
}
else {
	script.getSceneObject().getTransform().setLocalPosition(new vec3(currentLocation.x, currentLocation.y - 1, currentLocation.z));
}*/

var e = currentRotation.toEulerAngles();
print("x=" + e.x + " y=" + e.y + " z=" + e.z);
global.baseY = global.baseY + 0.1;
var newE = new vec3(e.x /*+ 0.25*/, global.baseY /*e.y + 0.01*/, e.z /*+ 0.25*/);

/*if(e.y > 1.55){
	print("" + (e.y + 0.01));
	var t = quat.fromEulerVec(newE).toEulerAngles();
	print("New: x=" + t.x + " y=" + t.y + " z=" + t.z);
}*/

var newQ = quat.fromEulerVec(newE);
script.getSceneObject().getTransform().setLocalRotation(newQ);