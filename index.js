var rectangle = {
  width: 200, height: 500,
}
console.log (rectangle)

function calcPerim() {
  var width = rectangle.width;
  var height = rectangle.height;
  var result = width + width + height + height;
  console.log("The perimeter of the rectangle is " + result)
}

calcPerim();
var thePerim = calcPerim();
console.log(thePerim);


function calcArea() {
  var width = rectangle.width
  var height = rectangle.height
  var result = height * width
  console.log ("The Area of the rectangle is " + result)
}

calcArea();