$(document).ready(function(){

    var playerEl = document.getElementById("player");
    playerEl.addEventListener('collide', function (e) {
        console.log('Player has collided with body #' + e.detail.body.id);

      e.detail.target.el;  // Original entity (playerEl).
      e.detail.body.el;    // Other entity, which playerEl touched.
      e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
      e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
    });
    
    function makeWall(startX, startZ, endX, endZ){
        var multiplier = 3;
        startX= startX * multiplier;
        startZ= startZ * multiplier;
        endX= endX * multiplier;
        endZ= endZ * multiplier;
        var depth = Math.abs(endZ - startZ);
            if(depth == 0){
                depth = .2;
            }
        // depth= depth * multiplier;
        var width = Math.abs(endX - startX);
            if(width == 0){
                width = .2;
            }
        // width= width * multiplier;    
        var height = 2;
        var centerX = (startX + endX)/2;
        // centerX = centerX * multiplier;
        var centerZ = (startZ + endZ)/2;
        // centerZ = centerZ * multiplier;
        var centerY = 1;
         var radius = 0.1;
        $("#maze1").append('<a-box src="#marble" static-body color="white" width="'+ width + '" height="'+ height + '" depth="'+ depth + '" position="'+ centerX+' '+ centerY+' '+ centerZ+'" ></a-box>');
        $("#maze1").append('<a-cylinder src="#marble"  static-body color="white"  height="'+ height + '" radius="' + radius +'"  position="'+ startX+' '+ centerY+' '+ startZ+'"></a-cylinder ');
    }
    
    makeWall(0, 0, 0, -2);
    makeWall(1, 0, 1, -1);
    makeWall(1, -1, 2, -1);
    makeWall(2, -1, 2, -3);
    makeWall(0, -2, 1, -2);
    makeWall(1, -2, 1, -3);
    
});    