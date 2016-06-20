'use strict';
//this function is going to create a random number based on the min and max values that appear in the object
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//this array is to hold 15 elements for each hour that the stands are opened each day
var hoursOpen = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];

var pikeStand = {
  min: 23,
  max: 64,
  avgCookie: 6.3,
  hourlyCustomers:[],
  hourlyCookies:[],

// this for-loop is to try and calculate 15 different random numbers to represent number of customers for each hour they are open and store it into an array
  generateHourlyCustomer: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var numberOfCustomers = randomNumber(this.min, this.max);
      this.hourlyCustomers.push(numberOfCustomers);
    }
  },
  //now have to multiply average cookie by each random number in the hourlyCustomers array and have them saved to hourlyCookies
  generateHourlyCookies: function(){
    for(var j = 0; j < hoursOpen.length; j++){
      var cookiesBought = this.avgCookie * this.hourlyCustomers[j];
      this.hourlyCookies.push(cookiesBought);
    }
  }
};

pikeStand.generateHourlyCustomer();
pikeStand.generateHourlyCookies();

var olElement = document.getElementById('cookies');
for (var i = 0; i < pikeStand.hourlyCustomers.length; i++){
  console.log(pikeStand.hourlyCookies[i]);
  var listItem = document.createElement('li');
  listItem.textContent = hoursOpen[i] + ' ' + pikeStand.hourlyCookies[i];
  olElement.appendChild(listItem);
}


// pikeStand.listSales = function(){
//   for(var i = 0; i<openHours.length; i++){
//
// //   }
// };
