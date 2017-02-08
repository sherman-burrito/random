var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeRect(0, 0, 200, 100, "blue")
    makeCircle(5, 95, 5, "purple")
    makeCircle(20, 95, 5, "yellow")
    makeCircle(35, 95, 5, "red")
    makeCircle(50, 95, 5, "green")
    makeCircle(65, 95, 5, "pink")
    makeCircle(80, 95, 5, "cyan")
    makeCircle(95, 95, 5, "purple")
    makeCircle(110, 95, 5, "yellow")
    makeCircle(125, 95, 5, "red")
    makeCircle(140, 95, 5, "green")
    makeCircle(155, 95, 5, "pink")
    makeCircle(170, 95, 5, "cyan")
    makeCircle(185, 95, 5, "gray")
    makeEllipse(80, 50, 45, 25, "darkorange")
    makePolygon("60 50 20 80 20 20", "darkorange")
    makeCircle(100, 40, 5, "black", 0.5)
    makeEllipse(103, 60, 15, 5, "black", 0.75)
    makeRect(79, 50, 40, 12, "darkorange")
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(0, 0, 200, 100, "lightseagreen")
    makeEllipse(80, 50, 45, 25, "yellow")
    makePolygon("60 50 20 80 20 20", "yellow")
    makeCircle(100, 40, 5, "black", 0.5)
    makeEllipse(103, 60, 15, 5, "black", 0.75)
    makeRect(79, 50, 40, 12, "yellow")
    makeText(X, 40, 5, 12, 'Roboto', "black")
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeRect(0, 0, 200, 100, "dodgerblue")
    makeEllipse(80, 50, 45, 25, "red")
    makePolygon("60 50 20 80 20 20", "red")
    makeCircle(100, 40, 5, "black", 0.5)
    makeEllipse(103, 60, 15, 5, "black", 0.75)
    makeRect(79, 50, 40, 12, "red")
    makeRect(69, 25, 40, 4, "black")
    makeRect(75, 8, 29, 20, "black")
    makeRect(75, 22, 29, 3, "white")
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    var myNumber = Math.random()
    if(myNumber < 0.33){
    createFirstScene()
    }else if(myNumber < 0.67){
    createSecondScene()
    }else{
    createThirdScene()
    }    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}