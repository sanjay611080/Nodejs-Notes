"use strict";
function someDependantfunc() {
    console.log('dependant on somelongrunniongfunc');
}
function someLongRunningFunction(callback) {
    setTimeout(function () {
        callback("Hello");
    }, 5000);
}
console.log('Starting...');
someLongRunningFunction(function (result) {
    console.log(result);
    someDependantfunc();
});
console.log('...Finishing');
