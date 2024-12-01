const fs = require('fs');
setTimeout(()=>{console.log("Hello from Tier 1")},0)
setImmediate(()=>{console.log("Hello from Setimmediate Fn 1")});

fs.readFile('sample.txt', 'utf-8', ()=>{
    console.log("IO polling start");

    setTimeout(()=>{console.log("Hello from timer 1")},5000);
    setTimeout(()=>{console.log('Hello from timer 2')},2000);
    setImmediate(()=>{console.log("Hello from Immediate Fn 2")});
})

console.log("Hello Google")