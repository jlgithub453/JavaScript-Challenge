// from data.js
var tData = data;

// YOUR CODE HERE!
function createtable(tableData){
var tableRef = document.getElementsByTagName('tbody')[0];

for (var i = 0; i < tableData.length; i++) {

  
// Insert a row in the table at the last row
var newRow   = tableRef.insertRow(tableRef.rows.length);

// Insert a cell in the row at index 0
var newCell  = newRow.insertCell(0);

// Append a text node to the cell
var newText  = document.createTextNode(tableData[i].datetime);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(1);

// Append a text node to the cell
var newText  = document.createTextNode(tableData[i].city);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(2);

// Append a text node to the cell
var newText  = document.createTextNode(tableData[i].state);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(3);

// Append a text node to the cell
var newText  = document.createTextNode(tableData[i].country);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(4);

// Append a text node to the cell
var newText  = document.createTextNode(tableData[i].shape);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(5);

// Append a text node to the cell
var newText  = document.createTextNode(tableData[i].durationMinutes);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(6);

// Append a text node to the cell
var newText  = document.createTextNode(tableData[i].comments);
newCell.appendChild(newText);

}}


createtable(tData)

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  

  var filteredData = tData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);
  d3.select("tbody").html("");
  
  createtable(filteredData)

})
