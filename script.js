$(document).ready(function(){

    var playerEl = document.getElementById("player");
    playerEl.addEventListener('collide', function (e) {
        
        console.log('Player has collided with body #' + e.detail.body.id);
        if(e.detail.body.id == 2){
            alert("Winner");
        }

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
    
    makeWall(0, 0, 0, -3);
    makeWall(1, 0, 8, 0);
    makeWall(1, -1, 5, -1);
    makeWall(1, -2, 2, -2);
    makeWall(2, -2, 2, -3);
    makeWall(2, -2, 4, -2);
    makeWall(0, -3, 1, -3);
    makeWall(0, -3, 0, -7);
    makeWall(2, -3, 5, -3);
    makeWall(5, -1, 5, -4);
    makeWall(5, -3, 6, -3);
    makeWall(5, -1, 7, -1);
    makeWall(7, -1, 7, -2);
    makeWall(7, -1, 6, -2);
    makeWall(7, -2, 7, -3);
    makeWall(7, -3, 7, -4);
    makeWall(7, -3, 9, -3);
    makeWall(8, -2, 9, -2);
    makeWall(8, 0, 8, -1);
    makeWall(8, 0, 9, 0);
    makeWall(9, 0, 9, -1);
    makeWall(6, -4, 7, -4);
    makeWall(2, -4, 4, -4);
    makeWall(4, -4, 4, -5);
    makeWall(4, -5, 6, -5);
    makeWall(3, -5, 4, -5);
    makeWall(1, -3, 1, -5);
    makeWall(1, -5, 3, -5);
    makeWall(0, -7, 5, -7);
    makeWall(6, -7, 10, -7);
    makeWall(9, -2, 9, -3);
    makeWall(9, -3, 9, -4);
    makeWall(9, -4, 10, -4);
    makeWall(10, 0, 10, -7);
    makeWall(1, -6, 1, -7);
    makeWall(2, -6, 3, -6);
    makeWall(3, -5, 3, -6);
    makeWall(4, -6, 6, -6);
    makeWall(6, -5, 6, -6);
    makeWall(8, -4, 8, -5);
    makeWall(7, -5, 7, -7);
    makeWall(9, -5, 10, -5);
    makeWall(9, -6, 10, -6);
    makeWall(9, -6, 9, -7);
    makeWall(8, -6, 8, -7);
    
    
    
});    