'use strict';
//this function is going to create a random number based on the min and max values that appear in the object
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//this array is to hold 15 elements for each hour that the stands are opened each day
var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Store(minimumCust, maximumCust, avgCookiePerCust, where){
  this.minimumCust = minimumCust;
  this.maximumCust = maximumCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.where = where;
};

var firstAndPike = new Store(23, 65, 6.3, 'First and Pike');
var seatacAirport = new Store(3, 24, 1.2, 'Seatac Airport');
var seattleCenter = new Store(11, 38, 3.7, 'Seattle Center');
var capitolHill = new Store(20, 38, 2.3, 'Capitol Hill');
var alki = new Store (2, 16, 4.6, 'Alki');



// var pikeStand = {
//   min: 23,
//   max: 64,
//   avgCookie: 6.3,
//   hourlyCustomers:[],
//   hourlyCookies:[],
//   sum:0,
//
// // this for-loop is to try and calculate 15 different random numbers to represent number of customers for each hour they are open and store it into an array
//   generateHourlyCustomer: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var numberOfCustomers = randomNumber(this.min, this.max);
//       this.hourlyCustomers.push(numberOfCustomers);
//     }
//   },
//
//   //now have to multiply average cookie by each random number in the hourlyCustomers array and have them saved to hourlyCookies
//   generateHourlyCookies: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       var cookiesBought = Math.round(this.avgCookie * this.hourlyCustomers[j]);
//       this.hourlyCookies.push(cookiesBought);
//     }
//
//     for (var c = 0; c < pikeStand.hourlyCookies.length; c++ ) {
//       pikeStand.sum += pikeStand.hourlyCookies[c];
//     }
//     console.log('sum', pikeStand.sum);
//   }
// };
//
// pikeStand.generateHourlyCustomer();
// pikeStand.generateHourlyCookies();
//
// var ulElement = document.getElementById('pikeCookies');
// for (var i = 0; i < pikeStand.hourlyCustomers.length; i++){
//   // console.log(pikeStand.hourlyCookies[i]);
//   var listItem = document.createElement('li');
//   listItem.textContent = hoursOpen[i] + ': ' + pikeStand.hourlyCookies[i] + ' cookies.';
//   ulElement.appendChild(listItem);
// }
// var sumElement = document.createElement('li');
// sumElement.textContent = 'Total:' + ' ' + pikeStand.sum + ' cookies.';
// ulElement.appendChild(sumElement);
//
//
// //SECOND SHOP
// var seatacStand = {
//   min: 3,
//   max: 24,
//   avgCookie: 1.2,
//   hourlyCustomers:[],
//   hourlyCookies:[],
//   sum:0,
//
//   generateHourlyCustomer: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var numberOfCustomers = randomNumber(this.min, this.max);
//       this.hourlyCustomers.push(numberOfCustomers);
//     }
//   },
//   generateHourlyCookies: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       var cookiesBought = Math.round(this.avgCookie * this.hourlyCustomers[j]);
//       this.hourlyCookies.push(cookiesBought);
//     }
//
//     for (var c = 0; c < seatacStand.hourlyCookies.length; c++ ) {
//       seatacStand.sum += seatacStand.hourlyCookies[c];
//     }
//     console.log('sum', seatacStand.sum);
//   }
// };
//
// seatacStand.generateHourlyCustomer();
// seatacStand.generateHourlyCookies();
//
// var ulElement = document.getElementById('seatacCookies');
// for (var k = 0; k < seatacStand.hourlyCustomers.length; k++){
//   var listItem = document.createElement('li');
//   listItem.textContent = hoursOpen[k] + ': ' + seatacStand.hourlyCookies[k] + ' cookies.';
//   ulElement.appendChild(listItem);
// }
// var sumElement = document.createElement('li');
// sumElement.textContent = 'Total: ' + seatacStand.sum + ' cookies.';
// ulElement.appendChild(sumElement);
// // STORE THREE!!
// var centerStand = {
//   min: 11,
//   max: 38,
//   avgCookie: 3.7,
//   hourlyCustomers:[],
//   hourlyCookies:[],
//   sum:0,
//
//   generateHourlyCustomer: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var numberOfCustomers = randomNumber(this.min, this.max);
//       this.hourlyCustomers.push(numberOfCustomers);
//     }
//   },
//
//   generateHourlyCookies: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       var cookiesBought = Math.round(this.avgCookie * this.hourlyCustomers[j]);
//       this.hourlyCookies.push(cookiesBought);
//       // get hourly cookies count
//       // console.log(pikeStand.hourlyCookies);
//     }
//
//     for (var c = 0; c < centerStand.hourlyCookies.length; c++ ) {
//       centerStand.sum += centerStand.hourlyCookies[c];
//       // console.log('cookies in loop', pikeStand.hourlyCookies[c]);
//     }
//     console.log('sum', centerStand.sum);
//   }
// };
//
// centerStand.generateHourlyCustomer();
// centerStand.generateHourlyCookies();
//
// var ulElement = document.getElementById('centerCookies');
// for (var k = 0; k < centerStand.hourlyCustomers.length; k++){
//   // console.log(pikeStand.hourlyCookies[i]);
//   var listItem = document.createElement('li');
//   listItem.textContent = hoursOpen[k] + ': ' + centerStand.hourlyCookies[k] + ' cookies.';
//   ulElement.appendChild(listItem);
// }
// var sumElement = document.createElement('li');
// sumElement.textContent = 'Total: ' + centerStand.sum + ' cookies.';
// ulElement.appendChild(sumElement);
//
// //STORE FOUR!!!
// var capitolStand = {
//   min: 20,
//   max: 38,
//   avgCookie: 2.3,
//   hourlyCustomers:[],
//   hourlyCookies:[],
//   sum:0,
//   generateHourlyCustomer: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var numberOfCustomers = randomNumber(this.min, this.max);
//       this.hourlyCustomers.push(numberOfCustomers);
//     }
//   },
//   generateHourlyCookies: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       var cookiesBought = Math.round(this.avgCookie * this.hourlyCustomers[j]);
//       this.hourlyCookies.push(cookiesBought);
//     }
//
//     for (var c = 0; c < capitolStand.hourlyCookies.length; c++ ) {
//       capitolStand.sum += capitolStand.hourlyCookies[c];
//     }
//     console.log('sum', capitolStand.sum);
//   }
// };
//
// capitolStand.generateHourlyCustomer();
// capitolStand.generateHourlyCookies();
//
// var ulElement = document.getElementById('capitolCookies');
// for (var a = 0; a < capitolStand.hourlyCustomers.length; a++){
//   var listItem = document.createElement('li');
//   listItem.textContent = hoursOpen[a] + ': ' + capitolStand.hourlyCookies[a] + ' cookies.';
//   ulElement.appendChild(listItem);
// }
// var sumElement = document.createElement('li');
// sumElement.textContent = 'Total: ' + capitolStand.sum + ' cookies.';
// ulElement.appendChild(sumElement);
//
// //FIFTH STORE
// var alkiStand = {
//   min: 2,
//   max: 16,
//   avgCookie: 4.6,
//   hourlyCustomers:[],
//   hourlyCookies:[],
//   sum:0,
//
// // this for-loop is to try and calculate 15 different random numbers to represent number of customers for each hour they are open and store it into an array
//   generateHourlyCustomer: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var numberOfCustomers = randomNumber(this.min, this.max);
//       this.hourlyCustomers.push(numberOfCustomers);
//     }
//   },
//   //now have to multiply average cookie by each random number in the hourlyCustomers array and have them saved to hourlyCookies
//   generateHourlyCookies: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       var cookiesBought = Math.round(this.avgCookie * this.hourlyCustomers[j]);
//       this.hourlyCookies.push(cookiesBought);
//       // get hourly cookies count
//       // console.log(pikeStand.hourlyCookies);
//     }
//
//     for (var c = 0; c < alkiStand.hourlyCookies.length; c++ ) {
//       alkiStand.sum += alkiStand.hourlyCookies[c];
//       // console.log('cookies in loop', pikeStand.hourlyCookies[c]);
//     }
//     console.log('sum', alkiStand.sum);
//   }
// };
//
// alkiStand.generateHourlyCustomer();
// alkiStand.generateHourlyCookies();
//
// var ulElement = document.getElementById('alkiCookies');
// for (var a = 0; a < alkiStand.hourlyCustomers.length; a++){
//   var listItem = document.createElement('li');
//   listItem.textContent = hoursOpen[a] + ': ' + alkiStand.hourlyCookies[a] + ' cookies.';
//   ulElement.appendChild(listItem);
// }
// var sumElement = document.createElement('li');
// sumElement.textContent = 'Total: ' + alkiStand.sum + ' cookies.';
// ulElement.appendChild(sumElement);
