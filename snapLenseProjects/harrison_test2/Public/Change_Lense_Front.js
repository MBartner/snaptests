// -----JS CODE-----
// @input Component.Camera frontFacingCamera
// @input Component.Camera rearFacingCamera

print("back camera active");
rearFacingCamera.addRenderLayer(1);
var renderLayers = frontFacingCamera.getAllRenderLayers();
for( var i = 0; i < renderLayers.length; i++ ){
    frontFacingCamera.removeRenderLayer( i );
}