// from data.js
var tableData = data;

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page 
// and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, 
// and comment at the very least.

function populateTable(){
    // Remove previous tbody
    var tbody = d3.select("tbody");
    tbody.remove();
    var table = d3.select("#ufo-table");
    // Append new tbody
    table.append("tbody");
    tbody = d3.select("tbody");
    tableData.forEach(function(event) {
        // Append row
        var row = tbody.append("tr");
        // Append columns
        Object.entries(event).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
  
// Use a date form in your HTML document and 
// write JavaScript code that will listen for events and 
// search through the date/time column to find rows that match user input.

var filterTableButton = d3.select("#filter-btn");

filterTableButton.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element
    var inputDateForm = d3.select("#datetime"); 
  
    // Get the value property of the input element
    var inputDateValue = inputDateForm.property("value");
  
    if (inputDateValue != "" ){
        tableData = data.filter(event => event.datetime === inputDateValue);
    } else {
        tableData;
    }

    populateTable();
});  

// Using multiple input tags and/or select dropdowns, 
// write JavaScript code so the user can to set multiple filters and 
// search for UFO sightings using the following criteria based on the table columns:
// date/time
// city
// state
// country
// shape

var shapeOptions = ["one","two","three"];
var shapeList = d3.select("#shape");
shapeList.selectAll('option').data(shapeOptions).enter()
        .append('option').text(function(d){ return d;});
