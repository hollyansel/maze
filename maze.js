

$(document).ready(function(){    

   
      var size = 10;
    var cells = [];
    var newCells = [];
    var wasHere = [];
    var alive = true;
    var runs = 100;
    for (var a = 0; a < size; a++){
        cells[a]= [];
        for (var b = 0; b < size; b++){
          cells[a][b]= false;

        }
    }
    for (var c = 0; c < size; c++){
        wasHere[c]= [];
        for (var d = 0; d < size; d++){
          wasHere[c][d]= false;
        }
    }
    var startX = (size/2) - 1;
    var startY = 0;
    var endX = (size/2) - 1 ;
    var endY = size-1;
    
    
    for (var e = 0; e < size; e++){
      newCells[e]= [];
      for (var f = 0; f < size; f++){
        newCells[e][f]=false;
      }
    } 
    
    function createMaze(){
      startingAlive();
  

      for(var i = 0; i < 100; i++){
        makeMaze();
        cells[startX][startY] = true;
        cells[endX][endY] = true;
      }
      
      while(solutionExists(startX, startY) === false){
        startingAlive();
        for(var i = 0; i < 100; i++){
          makeMaze();
          cells[startX][startY] = true;
          cells[endX][endY] = true;
        }
      }  
        
      cells[startX][startY] = true;
      cells[endX][endY] = true; 
        
        
    }
    
    function makeMaze(){
    
      
        for(var x = 0; x < size; x++){
            for (var y = 0; y < size; y++) {
              
                var neighbors = findNeighbors(x, y);
                if(cells[x][y] == alive && (neighbors >= 1 && neighbors <= 4)){
                    newCells[x][y] = cells[x][y];
                }else if(cells[x][y] != alive && neighbors == 3){
                    makeCellAlive(x, y);  
                }
            }
               
        }
        cells = newCells;
        return cells;
    }
    
    function findNeighbors(x, y){
          var neighbors = 0;
            if(x === 0){
              if(y > 0 && cells[x][y-1] == alive){
                neighbors++;
              }
              if(y < (size - 1) && cells[x][y+1] == alive){
                neighbors++;
              }
              if(x < (size - 1) && y > 0 && cells[x+1][y-1] == alive){
                neighbors++;
              }
              if(x < (size - 1) && cells[x+1][y] == alive){
                neighbors++;
              }
              if(x < (size - 1) && y < (size - 1) && cells[x+1][y+1] == alive){
                neighbors++;
              }
            }
            if(x == size){
              if(x > 0 && y > 0 && cells[x-1][y-1] == alive){
                neighbors++;
              }
              if(x > 0 && cells[x-1][y] == alive){
                neighbors++;
              }
              if(x > 0 && y < (size - 1) && cells[x-1][y+1] == alive){
                neighbors++;
              }
              if(y > 0 && cells[x][y-1] == alive){
                neighbors++;
              }
              if(y > (size - 1) && cells[x][y+1] == alive){
                neighbors++;
              }
            }
            if(y === 0){
              if(x > 0 && cells[x-1][y] == alive){
                neighbors++;
              }
              if(x < (size - 1) && cells[x+1][y] == alive){
                neighbors++;
              }
              if(x > 0 && y < (size - 1) && cells[x-1][y+1] == alive){
                neighbors++;
              }
              if(y < (size - 1) && cells[x][y+1] == alive){
                neighbors++;
              }
              if(x < (size - 1) && y < (size - 1) && cells[x+1][y+1] == alive){
                neighbors++;
              }
            }
            if(y == size){
              if(x > 0 && y > 0 && cells[x-1][y-1] == alive){
                neighbors++;
              }
              if(y > 0 && cells[x][y-1] == alive){
                neighbors++;
              }
              if(x < (size - 1) && y > 0 && cells[x+1][y-1] == alive){
                neighbors++;
              }
              if(x > 0 && cells[x-1][y] == alive){
                neighbors++;
              }
              if(x < (size - 1) && cells[x+1][y] == alive){
                neighbors++;
              }
            }
            else if (x !== 0 && x!= size && y!== 0 && y!= size){
              if(x > 0 && y > 0 && cells[x-1][y-1] == alive){
                neighbors++;
              }
              if(y > 0 && cells[x][y-1] == alive){
                neighbors++;
              }
              if(y > 0 && x < (size - 1) && cells[x+1][y-1] == alive){
                neighbors++;
              }
              if(x > 0 && cells[x-1][y] == alive){
                neighbors++;
              }
              if(x < (size - 1) && cells[x+1][y] == alive){
                neighbors++;
              }
              if(x > 0 && y < (size - 1) && cells[x-1][y+1] == alive){
                neighbors++;
              }
              if(y < (size - 1) && cells[x][y+1] == alive){
                neighbors++;
              }
              if(x < (size - 1) && y < (size - 1) && cells[x+1][y+1] == alive){
                neighbors++;
              }
            }
        return neighbors;
    }

    function makeCellAlive(x, y){
        newCells[x][y] = alive;
    }
    
    function startingAlive(){
      
      for(var i = 0; i < size; i++){
        for(var j = 0; j < size; j++){
            cells[i][j] = Math.random() >= 0.8;
        }
      }
      cells[startX][startY] = true;
      cells[endX][endY] = true;
    }
    
    
    function solutionExists(x,y) {
      if (x == endX && y == endY){
        return true;
      }  
      if (cells[x][y] == false || wasHere[x][y]){
        return false;
      }   
      
      wasHere[x][y] = true;
      
      if (x != 0){ 
          if (solutionExists(x-1, y) === true) { 
              return true;
          }
      }    
      if (x != size - 1){ 
          if (solutionExists(x+1, y) === true) { 
              return true;
          }
      }    
      if (y != 0){  
          if (solutionExists(x, y-1) === true) { 
              return true;
          }
      }    
      if (y != size - 1){ 
          if (solutionExists(x, y+1) === true) { 
              return true;
          }
      }    
      return false;
    }
    
 
    createMaze();
    console.log(cells);
     
});     
    