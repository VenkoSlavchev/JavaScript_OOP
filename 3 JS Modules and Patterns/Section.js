//This file holds Section class. The section has name and section heading text. Inside the class the Sections are represented as list items. //
// Every list item itself contains section heading, unordered list, which hold objects of Item class, input field for Items text and button for adding new Items  //
define(function () {
    var Section = (function () {
        function Section(name, sectionHeadingText) {
            this._name = name;
            this._title = sectionHeadingText;
            this.addToDOM = function () {
                var container = document.getElementById('sectionsList');
                var section = document.createElement('li');
                var itemsWrapper = document.createElement('div');
                var sectionHeading = document.createElement('h3');
                var listForItems = document.createElement('ul');
                var inputFieldForItemText = document.createElement('input');
                var addItemButton = document.createElement('Button');
                section.setAttribute('class', 'toDoSections');
                itemsWrapper.setAttribute('id', 'itemBox');
                sectionHeading.innerHTML = sectionHeadingText;
                listForItems.setAttribute('id', 'itemsList');
                inputFieldForItemText.setAttribute('id', 'itemText');
                inputFieldForItemText.setAttribute('type', 'text');
                inputFieldForItemText.setAttribute('placeholder', 'Add Item...');
                inputFieldForItemText.addEventListener('click',function () {
                    inputFieldForItemText.value = '';
                });
                addItemButton.setAttribute('id','newItemButton');
                addItemButton.setAttribute('type', 'button');
                addItemButton.innerHTML = '+';
                section.appendChild(itemsWrapper);
                section.appendChild(inputFieldForItemText);
                section.appendChild(addItemButton);
                itemsWrapper.appendChild(sectionHeading);
                itemsWrapper.appendChild(listForItems);
                container.appendChild(section);
            }
        }
        return Section;
    }());
    return Section;
});

