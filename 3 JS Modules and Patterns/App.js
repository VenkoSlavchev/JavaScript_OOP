'use strict';
(function () {
    requirejs.config({

        paths: {
            'Factory': 'Factory'
        }
    })
})();

require(['Factory'], function (Factory) {
    var sectionCounter = 0;
    var newContainer = new Factory.Container;
    newContainer.addToDOM();
    document.getElementById('newSection').addEventListener('click', function () {
        if (document.getElementById('sectionHeading').value === '') {
            throw new TypeError('Invalid input!!! Input must be string');
        } else {
            var newSection = new Factory.Section('Section' + sectionCounter, document.getElementById('sectionHeading').value);
            newSection.addToDOM();
            sectionCounter++;
            // sectionsArray is array that will holds every section we create
            var sectionsArray = [];
            // allListItemsNodes is Nodes list not an Array
            var allListItemsNodes = document.getElementsByTagName('li');
            //Here we create sectionsInArray to be converted as Array of sectionsList nodes in order for us to use forEach function
            var sectionsInArray = Array.prototype.slice.call(allListItemsNodes, 0);
            sectionsInArray.forEach(function (sec) {
                if (sec.getAttribute('class') === 'toDoSections') {
                    sectionsArray.push(sec);
                }
            });
            for (var count = 0; count < sectionsArray.length; count++) {
                //In this case variable count is mutable and to be used down in the closure needs to be given as parameter of IIFE(Imediately invoked function expression)
                (function (tmpCount) {
                    if ((sectionsArray.length - tmpCount) === 1) {
                        sectionsArray[tmpCount].lastElementChild.addEventListener('click', function () {
                            if (sectionsArray[tmpCount].childNodes[1].value === '') {
                                throw new TypeError('Invalid input!!! Input must be string');
                            } else {
                                var newItem = new Factory.Item(sectionsArray[tmpCount].childNodes[1].value, tmpCount);
                                newItem.addToDOM();
                                var inputsList = document.getElementsByTagName('input');
                                var inputsInArray = Array.prototype.slice.call(inputsList, 0);
                                inputsInArray.forEach(function (element) {
                                    if (element.getAttribute('type') === 'checkbox') {
                                        element.addEventListener('change', function () {
                                            if (element.checked) {
                                                element.nextElementSibling.style.backgroundColor = 'green';
                                            } else {
                                                element.nextElementSibling.style.backgroundColor = 'white';
                                            }
                                        })
                                    }

                                })
                            }

                        })
                    }
                })(count);
            }
        }
    })
});

//Test the code through html file Modules










