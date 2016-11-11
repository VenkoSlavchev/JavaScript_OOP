function example() {
    console.log('Number of arguments: ' + arguments.length);

    for (var i = 0; i < arguments.length; i++) {
        console.log('Argument: ' + (i + 1) + ' - (' + typeof (arguments[i]) + ') ' + arguments[i]);
    }

    console.log('this object is: ' + this);
}
//Test the code
// The function should print the number of its arguments and each of the arguments type. Call the function with different number and type of arguments.

//Here we call the function in global scope
// example('pesho', 43, 54, 'gosho');
// example(false, '43.5', 43.5, true);

//Here we call the function using call and apply functions
//example.call();
//example.apply(null, [1234, 'Goshooooo']);

//Here we call the function in functional scope
// (function testFunction() {
//     example("dsa");
// })();

//Here we call the function over the object using call()
// var testObj = {
//     testParameter : this
// }
// example.call(testObj,testObj.testParameter);
