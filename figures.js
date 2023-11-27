//square
function squarePerimeter(squareSide){     
    return squareSide * 4; 
}  
function squareArea (squareSide){     
    return squareSide * squareSide; 
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
function triangleType(){
    const side1 = parseFloat(document.getElementById("InputTriangle1").value);
    const side2 = parseFloat(document.getElementById("InputTriangle2").value);
    const side3 = parseFloat(document.getElementById("InputTriangle3").value);
    if (side1 === side2 && side2 === side3){
        result = "equilateral"
    }else if (side1 === side2 || side1 === side3 || side2 === side3){
        result = "isosceles"
    }else{
        result = "scalene"
    }
    alert(result);
}

function calPerimeter(triangle1Side, triangle2Side, triangle3Side){ 
    p = (triangle1Side + triangle2Side + triangle3Side);
    return p;
}

function calArea (triangle1Side, triangle2Side, triangle3Side){
    s = ((triangle1Side + triangle2Side + triangle3Side) / 2);
    area = Math.sqrt(s*((s - triangle1Side)*(s - triangle2Side)*(s - triangle3Side)))
    return area
}

function trianglePerimeter(){
    const side1 = parseFloat(document.getElementById("InputTriangle1").value);
    const side2 = parseFloat(document.getElementById("InputTriangle2").value);
    const side3 = parseFloat(document.getElementById("InputTriangle3").value);

    const perimeter =  calPerimeter(side1, side2, side3);
    alert(perimeter);
}

function triangleArea(){
    const side1 = parseFloat(document.getElementById("InputTriangle1").value);
    const side2 = parseFloat(document.getElementById("InputTriangle2").value);
    const side3 = parseFloat(document.getElementById("InputTriangle3").value);

    const area =  calArea(side1, side2, side3);
    alert(area);
}



const PI = Math.PI;
//circle
function circlePerimeter(radius){     
    return  (2 * PI * radius); 
}  
function circleArea (radius){     
    return (radius * radius * PI); 
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