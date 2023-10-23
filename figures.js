//square
function squarePerimeter(squareSide){     
    return squareSide * 4; 
}  
function squareArea (squareSide){     
    return squareSide *  squareSide; 
}

function calculatePerimeterSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const perimetre =  squarePerimeter(value);
    alert(perimetre);
}

function calculateAreaSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const area =  squareArea(value);
    alert(area);
}

//triangle
function trianglePerimeter(triangle1Side, triangle2Side, triangle3Side){     
    return triangle1Side + triangle2Side + triangle3Side; 
}  
function triangleArea (triangle1Side, triangle2Side){     
    return (triangle1Side * triangle2Side)/2; 
}

function calculatePerimeterTriangle(){
    const input = document.getElementById("InputTriangle");
    const value = input.value;

    const perimeter =  trianglePerimeter(value);
    alert(perimeter);
}

function calculateAreaTriangle(){
    const input = document.getElementById("InputTriangle");
    const value = input.value;

    const area =  triangleArea(value);
    alert(area);
}
const PI = Math.PI;
//circle
function circlePerimeter(radius){     
    return  "2 * PI * radius"; 
}  
function circleArea (radius){     
    return "radius * radius * PI"; 
}

function CircleP(){
    const input = document.getElementById("InputCircle");
    const value = input.value;
    const perimeterC =  circlePerimeter(value);
    alert(perimeterC);
}

function calculateAreaCircle(){
    const input = document.getElementById("InputCircle");
    const value = input.value;

    const areaC =  circleArea(value);
    alert(areaC);
}