var domModule = function () {

    function appendChild() {

        var element = arguments[0];
        var appendTo = document.querySelector(arguments[1]);

        appendTo.appendChild(element);
    };

    function removeChild() {

        var from = document.querySelector(arguments[0]);
        var removeElement = from.querySelector(arguments[1]);

        from.removeChild(removeElement);
    };

    function addHandler() {

        var elements = document.querySelectorAll(arguments[0]);
        var event = arguments[1];
        var expression = arguments[2];

        for (i = 0; i < elements.length; i++) {
            elements[i].addEventListener(event, expression);
        }
    };

    function retrieveElements() {

        var elements = document.querySelectorAll(arguments[0]);

        return elements;
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    };
};
//Test the code
// var liElement = document.createElement("li");
// Appends a list item to ul.birds-list
//domModule().appendChild(liElement, ".birds-list");
// Removes the first li child from the bird list
//domModule().removeChild("ul.birds-list","li:first-child");
// Adds a click event to all bird list items
//domModule().addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });
// Retrives all elements of class "bird"
//var elements = domModule().retrieveElements(".bird");
//console.log(elements);


