//This file contains Container class. It holds an unordered list of objects of class Section, Input field for the heading of each Section and button for adding Sections//
define(function () {
    var Container = (function () {
        function Container() {
            this.addToDOM = function () {
                var wrap = document.getElementById('wrapper');
                var listOfSections = document.createElement('ul');
                var inputFieldForSectionsHeading = document.createElement('input');
                var addSectionsButton = document.createElement('Button');
                listOfSections.setAttribute('id', 'sectionsList');
                inputFieldForSectionsHeading.setAttribute('id', 'sectionHeading');
                inputFieldForSectionsHeading.setAttribute('type', 'text');
                inputFieldForSectionsHeading.setAttribute('placeholder', 'Title...');
                inputFieldForSectionsHeading.addEventListener('click', function () {
                    inputFieldForSectionsHeading.value = '';
                });
                addSectionsButton.setAttribute('id', 'newSection');
                addSectionsButton.setAttribute('type', 'button');
                addSectionsButton.innerHTML = 'New Section';
                wrap.appendChild(listOfSections);
                wrap.appendChild(inputFieldForSectionsHeading);
                wrap.appendChild(addSectionsButton);
            }
        }
        return Container;
    }());
    return Container;
});

