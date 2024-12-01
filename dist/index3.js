"use strict";
// Data source (simulating fetched data)
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];
// Fetches data from the array
function fetchData(callback) {
    console.log('Fetching data...');
    const data = users; // Use the correct variable name
    callback(data);
}
// Processes the fetched data
function processData(data, callback) {
    console.log('Processing data...');
    const processedData = data.map(user => (Object.assign(Object.assign({}, user), { active: true }))); // Use the correct variable name
    setTimeout(() => callback(processedData), 0);
}
// Logs the processed data
function logData(processedData) {
    console.log('Logging data:', processedData);
}
// Initiating the data processing pipeline
fetchData(data => {
    processData(data, processedData => {
        logData(processedData);
    });
});
console.log("not waiting");
// console.log("waiting")
