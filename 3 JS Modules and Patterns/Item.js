//This file holds an Item class. Every Item objects holds item text and index of the parent section. Every item object is represented as list item and contains checkbox to
// mark the task as done and span element where the text is written.
define(function() {
    var Item = (function () {
        function Item(itemText,sectionIndex) {
            this._content = itemText;
            this._sectionIndex = sectionIndex;
            this.addToDOM = function () {
                // itemParentSection holds the place in section where the item itself must be added
                var sectionsParent = document.getElementById('sectionsList');
                var itemParentSection = sectionsParent.childNodes[sectionIndex].childNodes[0];
                var item = document.createElement('li');
                var check = document.createElement('input');
                var itemTextBox = document.createElement('span');
                item.setAttribute('id', 'itemInList');
                check.setAttribute('id', 'checkBox');
                check.setAttribute('type', 'checkbox');
                itemTextBox.setAttribute('id', 'itemTextBox');
                itemTextBox.innerHTML = itemText;
                item.appendChild(check);
                item.appendChild(itemTextBox);
                itemParentSection.appendChild(item);
            }
        }
        return Item;
    }());
    return Item;
});