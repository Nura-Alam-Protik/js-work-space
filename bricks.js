function brickCalculator(floor)
{ 
    
    if ( floor <= 10){
        var bricks = 15*1000*floor;
        console.log(bricks);

    }
    
    else if( floor <= 12){
        var bricks = 150000 + 1000*12* (floor - 10);
        console.log(bricks);
    }
    else if( floor > 12){
        var bricks = 174000 + 1000*10* (floor - 12);
        console.log(bricks);
    }
}

var totalBricks = brickCalculator(29);
console.log(totalBricks);