// -----JS CODE-----

if (global.firstAccess === true){
	global.firstAccess = false;
	global.baseLocation = script.getSceneObject().getTransform().getLocalPosition();
}

var current = script.getSceneObject().getTransform().getLocalPosition();

if (current.y > global.baseLocation.y + 10){
	global.up = false;
}
else if (current.y <= global.baseLocation.y){
	global.up = true;
}

if (global.up){
	script.getSceneObject().getTransform().setLocalPosition(new vec3(current.x, current.y + 1, current.z));
}
else {
	script.getSceneObject().getTransform().setLocalPosition(new vec3(current.x, current.y - 1, current.z));
}