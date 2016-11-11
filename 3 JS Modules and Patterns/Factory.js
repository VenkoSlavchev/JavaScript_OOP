// Factory returns objects of Container, Section and Item classes.
define(['Container','Section', 'Item'],function(Container, Section, Item) {
        var Factory = (function () {

            return {
                Container : Container,
                Section : Section,
                Item : Item
            }
        }());
         return Factory;
});


