'use strict';
function generateRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var myStores = [];

function Store(minCust, maxCust, avgCookiePerCust, where){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.where = where;
  this.numOfHourlyCust = [];
  this.numOfCookiesBoughtEachHour = [];
  this.totalCookiesBought = 0;
  myStores.push(this);
};

Store.prototype.generateHourlyCustomer = function(){
  for(var i = 0; i < hoursOpen.length; i++){
    this.numOfHourlyCust[i] = generateRandomNum(this.minCust, this.maxCust);
  };
};
Store.prototype.generateCookiesBoughtEachHour = function(){
  this.generateHourlyCustomer();
  for(var i = 0; i < hoursOpen.length; i++){
    this.numOfCookiesBoughtEachHour[i] = Math.round(this.avgCookiePerCust * this.numOfHourlyCust[i]);
    this.totalCookiesBought += this.numOfCookiesBoughtEachHour[i];
  };
};

var firstAndPike = new Store(23, 65, 6.3, 'First and Pike');
var seatacAirport = new Store(3, 24, 1.2, 'Seatac Airport');
var seattleCenter = new Store(11, 38, 3.7, 'Seattle Center');
var capitolHill = new Store(20, 38, 2.3, 'Capitol Hill');
var alki = new Store (2, 16, 4.6, 'Alki');

firstAndPike.generateCookiesBoughtEachHour();
seatacAirport.generateCookiesBoughtEachHour();
seattleCenter.generateCookiesBoughtEachHour();
capitolHill.generateCookiesBoughtEachHour();
alki.generateCookiesBoughtEachHour();

///now to make the table
var tableList = document.getElementById('salesData');
  //this makes a row for the header

var trEl = document.createElement ('tr');

//this makes a header cell for the empty guy
var thEl = document.createElement ('th');
  //this gives that cell content, which is nothing
thEl.textContent = ' ';
  //this closes that cell and appends it to the row level
trEl.appendChild(thEl);


//this makes a new header cell for the totals only header
var thEl = document.createElement ('th');
//this is what that header cell will say
thEl.textContent = 'Daily Location Total';
//this is going to close the cell and append it to the row level
trEl.appendChild(thEl);


function makeTableheader(){
  for(var i = 0; i < hoursOpen.length; i++){
//this is going to make a new header cell to hold an hour
    var thEl = document.createElement ('th')
//this is going to add the content of the hoursOpen
    thEl.textContent = hoursOpen[i];
//this is going to close each cell and append it to the row level
    trEl.appendChild(thEl);
  }
};

makeTableheader();

tableList.appendChild(trEl);




// var tdEl = document.createElement ('td');
// tdEl.textContent = 'hello';
// thEl.appendChild(tdEl);
