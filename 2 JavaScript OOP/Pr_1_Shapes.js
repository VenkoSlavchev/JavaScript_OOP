var arrayOfShapes = [];
var index = 1;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
document.getElementById('shapeSelect').addEventListener('change', addAdditionalFields);
document.getElementById('z-indexUp').addEventListener('click', increaseZIndex);
document.getElementById('z-indexDown').addEventListener('click', decreaseZINdex);
document.getElementById('submit').addEventListener('click', getOptionValues);
document.getElementById('deleteShapes').addEventListener('click', clearCanvas);
var Shape = (function () {
    function Shape(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    Shape.prototype.draw = function drawShape() {
    };
    function Circle(r) {
        this.r = r;
        this.name = 'Circle';
    }

    Circle.prototype = new Shape();
    Circle.prototype.toString = function () {
        return ('Radius is : ' + this.r + ' Color is ' + this.color);
    };
    Circle.prototype.draw = function () {
        context.arc(this.x, this.y, this.r, 0, 270);
        context.fillStyle = this.color;
        context.fill();
    };

    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.name = 'Rectangle';
    }

    Rectangle.prototype = new Shape();
    Rectangle.prototype.toString = function () {
        return ('Witdh is  : ' + this.width + ' Height is : ' + this.height + ' Color is ' + this.color);
    };
    Rectangle.prototype.draw = function () {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    function Triangle(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.name = 'Triangle';
    }

    Triangle.prototype = new Shape();
    Triangle.prototype.toString = function () {
        return ('Point 1 is x: ' + this.p1.x + ' y:' + this.p1.y + ' ' + ' Point 2 is x: ' + this.p2.x + ' y:' + this.p2.y + ' ' +
        'Point 3 is x: ' + this.p3.x + ' y:' + this.p3.y + ' Color is ' + this.color);
    };
    Triangle.prototype.draw = function () {
        context.beginPath();
        context.moveTo(this.p1.x, this.p1.y);
        context.lineTo(this.p2.x, this.p2.y);
        context.lineTo(this.p3.x, this.p3.y);
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
    };

    function Segment(p1, p2) {

        this.p1 = p1;
        this.p2 = p2;
        this.name = 'Segment';
    }

    Segment.prototype = new Shape();
    Segment.prototype.toString = function () {
        return ('Point 1 is x: ' + this.p1.x + ' y:' + this.p1.y + ' ' + ' Point 2 is x: ' + this.p2.x + ' y:' + this.p2.y + ' Color is ' + this.color);
    };
    Segment.prototype.draw = function () {
        context.beginPath();
        context.strokeStyle = this.color;
        context.moveTo(this.p1.x, this.p1.y);
        context.lineTo(this.p2.x, this.p2.y);
        context.stroke();
    };
    function Point(x, y) {
        Shape.call(this, x, y);
        this.name = 'Point';
    }

    Point.prototype = new Shape();
    Point.prototype.toString = function () {
        return ('x is : ' + this.x + ' y is : ' + this.y + ' Color is ' + this.color);
    };
    Point.prototype.draw = function () {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, 1, 1);
    };

    return {
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Segment: Segment,
        Point: Point
    }
}());
function addAdditionalFields() {
    var selectValue = document.getElementById('shapeSelect').value;
    var clearOptions = (function () {
        var options = document.getElementById('options');
        while (options.firstChild) {
            options.removeChild(options.firstChild);
        }
    })();
    var createFields = function (tagName, text, parentID, attributeType, attributeValue) {
        var createdElement = document.createElement(tagName);
        var textToElement = document.createTextNode(text + ' : ');
        createdElement.appendChild(textToElement);
        createdElement.style.width = '25%';
        createdElement.style.margin = '1%';
        createdElement.setAttribute(attributeType, attributeValue);
        var options = document.getElementById(parentID);
        options.appendChild(createdElement);
    };
    switch (selectValue) {
        case 'Rectangle' :
            createFields('span', 'Width', 'options', 'id', 'Width');
            createFields('input', 'Width', 'options', 'type', 'text');
            createFields('span', 'Height', 'options', 'id', 'Height');
            createFields('input', 'Height', 'options', 'type', 'text');
            break;
        case 'Segment' :
            createFields('span', 'X2', 'options', 'id', 'X2');
            createFields('input', 'X2', 'options', 'type', 'text');
            createFields('span', 'Y2', 'options', 'id', 'Y2');
            createFields('input', 'Y2', 'options', 'type', 'text');
            break;
        case 'Circle' :
            createFields('span', 'Radius', 'options', 'id', 'Radius');
            createFields('input', 'Radius', 'options', 'type', 'text');
            break;
        case 'Triangle' :
            createFields('span', 'X2', 'options', 'id', 'X2');
            createFields('input', 'X2', 'options', 'type', 'text');
            createFields('span', 'Y2', 'options', 'id', 'Y2');
            createFields('input', 'Y2', 'options', 'type', 'text');
            document.getElementById('options').insertBefore(document.createElement('br'), document.getElementById('X3'));
            createFields('span', 'X3', 'options', 'id', 'X3');
            createFields('input', 'X3', 'options', 'type', 'text');
            createFields('span', 'Y3', 'options', 'id', 'Y3');
            createFields('input', 'Y3', 'options', 'type', 'text');
            break;
    }
}
function getOptionValues() {
    var selectValue = document.getElementById('shapeSelect').value;
    var textArea = document.getElementById('textArea');
    var x1 = document.getElementById('X1').nextSibling.value;
    var y1 = document.getElementById('Y1').nextSibling.value;
    var color = document.getElementById('color').nextSibling.value;

    function validateInput(input) {

        if ((input === null) || (input === null) || (input === '') || (input === '') || (isNaN(parseInt(input))) || (isNaN(parseInt(input))) || (input === undefined)
            || input == undefined) {
            alert('All fields must be numbers and not empty');
            return false
        } else
            return true

    }

    switch (selectValue) {
        case 'Point' :
            if (validateInput(x1) && validateInput(y1)) {
                var point = new Shape.Point(x1, y1);
                point.color = color;
                textArea.value += 'Point - ' + point.toString() + '\n';
                putShapeInDrawnShapes(point);
                point.draw();
                break;
            } else break;

        case 'Rectangle' :
            var width = document.getElementById('Width').nextSibling.value;
            var height = document.getElementById('Height').nextSibling.value;
            if (validateInput(x1) && validateInput(y1) && validateInput(width) && validateInput(height)) {
                var rect = new Shape.Rectangle(width, height);
                rect.color = color;
                rect.x = x1;
                rect.y = y1;
                textArea.value += 'Rectangle - ' + rect.toString() + '\n';
                putShapeInDrawnShapes(rect);
                rect.draw();
                break;
            } else break;

        case 'Segment' :
            var x2 = document.getElementById('X2').nextSibling.value;
            var y2 = document.getElementById('Y2').nextSibling.value;
            if (validateInput(x1) && validateInput(y1) && validateInput(x2) && validateInput(y2)) {
                var segment = new Shape.Segment(new Shape.Point(x1, y1), new Shape.Point(x2, y2));
                segment.color = color;
                textArea.value += 'Segment - ' + segment.toString() + '\n';
                putShapeInDrawnShapes(segment);
                segment.draw();
                break;
            } else break;

        case 'Circle' :
            var radius = document.getElementById('Radius').nextSibling.value;
            if (validateInput(x1) && validateInput(y1) && validateInput(radius)) {
                var circle = new Shape.Circle(radius);
                circle.x = x1;
                circle.y = y1;
                circle.color = color;
                textArea.value += 'Circle - ' + circle.toString() + '\n';
                putShapeInDrawnShapes(circle);
                circle.draw();
                break;
            } else break;

        case 'Triangle' :
            var tx2 = document.getElementById('X2').nextSibling.value;
            var ty2 = document.getElementById('Y2').nextSibling.value;
            var x3 = document.getElementById('X3').nextSibling.value;
            var y3 = document.getElementById('Y3').nextSibling.value;
            if (validateInput(x1) && validateInput(y1) && validateInput(tx2) && validateInput(ty2) && validateInput(x3) && validateInput(y3)) {
                var triangle = new Shape.Triangle(new Shape.Point(x1, y1), new Shape.Point(tx2, ty2), new Shape.Point(x3, y3));
                triangle.color = color;
                textArea.value += 'Triangle - ' + triangle.toString() + '\n';
                putShapeInDrawnShapes(triangle);
                triangle.draw();
                break;
            } else break;

    }
}
function putShapeInDrawnShapes(shape) {
    var drawnShapes = document.getElementById('drawnShapes');
    var newOption = document.createElement('option');
    var newShape = shape;
    newOption.text = index + ' ' + shape.name;
    drawnShapes.add(newOption);
    arrayOfShapes.push(newShape);
    console.log(arrayOfShapes);
    index++;
}
function increaseZIndex() {
    var selectedShapeToChange = document.getElementById('drawnShapes').value;
    var indexOfElementToDraw = parseInt(selectedShapeToChange) - 1;
    var elementToDraw = arrayOfShapes[indexOfElementToDraw];
    elementToDraw.draw();
}
function decreaseZINdex() {
    var selectedShapeToChange = document.getElementById('drawnShapes').value;
    var indexOfElementToDraw = parseInt(selectedShapeToChange) - 1;
    for (var el = 0; el < arrayOfShapes.length; el++) {
        if (el !== indexOfElementToDraw) {
            arrayOfShapes[el].draw();
        }
    }
}
function clearCanvas() {
    context.clearRect(0, 0, 300, 500);
}
//Test the code via html Geometry_API
