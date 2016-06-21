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
  };
};

Store.prototype.generateTotalCookiesBought = function(){
  for (var i = 0; i < this.numOfCookiesBoughtEachHour.length; i++ ) {
    this.totalCookiesBought += this.numOfCookiesBoughtEachHour[i];
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
