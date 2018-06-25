// -----JS CODE-----
// -----JS CODE-----
// @input Component.Camera cameraA
// @input Component.Camera cameraB

if( !script.toggle ) {
    removeAllRenderLayers( script.cameraA );
    removeAllRenderLayers( script.cameraB );
    //script.cameraA.addRenderLayer( 3 );
    script.cameraB.addRenderLayer( 1 );
    print(script.cameraA.getAllRenderLayers().toString());
    print(script.cameraB.getAllRenderLayers().toString());
    //script.toggle=true;
}
else {
    //removeAllRenderLayers( script.cameraA );
    removeAllRenderLayers( script.cameraB );
    //script.cameraB.addRenderLayer( 0 );
    script.cameraA.addRenderLayer( 2 );
    
    print(script.cameraA.getAllRenderLayers().toString());
    print(script.cameraB.getAllRenderLayers().toString());
    //script.toggle=false;
}
script.toggle=!script.toggle;
print(script.toggle.toString());
function removeAllRenderLayers( camera )
{
    var renderLayers = camera.getAllRenderLayers();
    for( var i = 0; i < renderLayers.length; i++ ){
        camera.removeRenderLayer( i );
    }
}