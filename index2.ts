function someDependantfunc() {
    console.log('dependant on somelongrunniongfunc');
}
function someLongRunningFunction(callback: { (result: any): void; (arg0: string): void; }) {
    setTimeout(function() {
        callback("Hello");
    }, 5000);
}
 
console.log('Starting...');
 
 
someLongRunningFunction(function(result: any) {
    console.log(result);
    someDependantfunc();
});
 
console.log('...Finishing');