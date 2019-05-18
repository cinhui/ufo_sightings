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
    // Get the value property of the input element
    var dateValue = d3.select("#datetime").property("value");
    //console.log(inputDateValue);
    var cityName = d3.select("#cityname").property("value");
    //console.log(inputCityName);
    var stateValue = d3.select('#statename').property("value");
    //console.log(stateValue);
    var countryValue = d3.select('#countryname').property("value");
    //console.log(countryValue);
    var shapeValue = d3.select('#shapename').property("value");
    //console.log(shapeValue);    

    if (dateValue != "" ){
        tableData = data.filter(event => event.datetime === dateValue);
    } else {
        tableData = data;
    }

    if (cityName != "" ){
        tableData = tableData.filter(event => event.city === cityName);
    } else {
        tableData;
    }

    if (stateValue != "" ){
        tableData = tableData.filter(event => event.state === stateValue);
    } else {
        tableData;
    }

    if (countryValue != "" ){
        tableData = tableData.filter(event => event.country === countryValue);
    } else {
        tableData;
    }

    if (shapeValue != "" ){
        tableData = tableData.filter(event => event.shape === shapeValue);
    } else {
        tableData;
    }
    populateTable();
});  

// Using multiple input tags and/or select dropdowns, 
// write JavaScript code so the user can to set multiple filters and 
// search for UFO sightings using the following criteria based on the table columns:
// city, state, country, shape

// Populate the dropdown menus with unique values from the data

var stateOptions = Array.from(new Set(data.map(item=>item.state)));
stateOptions.unshift("");
var stateList = d3.select("#statename");
stateList.selectAll('option').data(stateOptions).enter()
        .append('option').attr("value", function (d) { return d; }).text(function(d){ return d;});
//console.log(stateOptions);

var countryOptions = Array.from(new Set(data.map(item=>item.country)));
countryOptions.unshift("");
var countryList = d3.select("#countryname");
countryList.selectAll('option').data(countryOptions).enter()
        .append('option').attr("value", function (d) { return d; }).text(function(d){ return d;});
//console.log(countryOptions);

var shapeOptions = Array.from(new Set(data.map(item=>item.shape)));
shapeOptions.unshift("");
var shapeList = d3.select("#shapename");
shapeList.selectAll('option').data(shapeOptions).enter()
        .append('option').attr("value", function (d) { return d; }).text(function(d){ return d;});
//console.log(shapeOptions);
