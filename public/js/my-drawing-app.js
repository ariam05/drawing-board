var path;
var currentColor = 'black'
var currentWidth = 5

tool.onMouseDown = function(event) { //This code in this function is called whenever the mouse is clicked.
    path = new Path();     // Create a new path each time.
    path.add(event.point);
    path.strokeColor = currentColor;
    path.strokeWidth = currentWidth;
    console.log(event.point); //this commands log to the Console the coordinates of the mouse click. Feel free to delete it! 
}
tool.onMouseDrag = function(event) {
    path.add(event.point); //Add points to the path as the user drags their mouse.
}

$('#default').on('click', function (e) { //jquery click event code for our "pencil" button.
    currentColor = 'black';  //change the color to black
    currentWidth = 5;       //change the width to 5
})
$('#thick-green').on('click', function (e) { //jquery button click code for our "green paint" button.
    currentColor = 'green';
    currentWidth = 15;
})
$('#thick-blue').on('click', function (e) { //jquery button click code for our "blue paint" button.
    currentColor = 'blue';
    currentWidth = 15;
})
$('#thick-red').on('click', function (e) { //jquery button click code for our "red paint" button.
    currentColor = 'red';
    currentWidth = 15;
})
$('#thick-yellow').on('click', function (e) { //jquery button click code for our "yellow paint" button.
    currentColor = 'yellow';
    currentWidth = 15;
})
$('#eraser').on('click', function (e) { //jquery button click code for our eraser button.
    currentColor = 'white';
    currentWidth = 20;
})