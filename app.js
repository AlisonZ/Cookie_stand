'use strict';
function generateRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var hoursOpen = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];
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

Store.prototype.makeAllCells = function(){
  //this makes a row for the store
  var trEl = document.createElement ('tr');
//this makes a cell for the name
  var tdEl = document.createElement ('td');
  //this gives the cell the name of the store
  tdEl.textContent = this.where;
  //this closes that cell and appends it to the row level
  trEl.appendChild(tdEl);
//this makes cell for the totals of the store
  tdEl = document.createElement ('td');
//this is the total number to be displayed
  tdEl.textContent = this.totalCookiesBought;
//this is going to close the cell and append it to the row level
  trEl.appendChild(tdEl);
  tableList.appendChild(trEl);
  for(var i = 0; i < hoursOpen.length; i++){
//this is going to make a new header cell to hold an hour
    tdEl = document.createElement ('td');
//this is going to add the content of the hoursOpen
    tdEl.textContent = this.numOfCookiesBoughtEachHour[i];
//this is going to close each cell and append it to the row level
    trEl.appendChild(tdEl);
  }
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
function makeTableheader(){
  var trEl = document.createElement ('tr');

//this makes a header cell for the empty guy
  var thEl = document.createElement ('th');
  //this gives that cell content, which is nothing
  thEl.textContent = ' ';
  //this closes that cell and appends it to the row level
  trEl.appendChild(thEl);

//this makes a new header cell for the totals only header
  thEl = document.createElement ('th');
//this is what that header cell will say
  thEl.textContent = 'Daily Location Total';
//this is going to close the cell and append it to the row level
  trEl.appendChild(thEl);

  for(var i = 0; i < hoursOpen.length; i++){
//this is going to make a new header cell to hold an hour
    thEl = document.createElement ('th');
//this is going to add the content of the hoursOpen
    thEl.textContent = hoursOpen[i];
//this is going to close each cell and append it to the row level
    trEl.appendChild(thEl);
  }
  tableList.appendChild(trEl);
};

makeTableheader();

firstAndPike.makeAllCells();
seatacAirport.makeAllCells();
capitolHill.makeAllCells();
alki.makeAllCells();
seattleCenter.makeAllCells();

function handleSalesFormSubmit(event) {
  event.preventDefault();

  if(!event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookiePerCust.value || !event.target.where.value) {
    return alert('Field cannot be empty!');
  }

  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookiePerCust = event.target.avgCookiePerCust.value;
  var where = event.target.where.value;

  var newStore = new Store(minCust, maxCust, avgCookiePerCust, where);

  myStores.push(newStore);

  newStore.generateCookiesBoughtEachHour();
  newStore.makeAllCells();

  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookiePerCust.value = null;
  event.target.where.value = null;
}

salesForm.addEventListener('submit', handleSalesFormSubmit);
