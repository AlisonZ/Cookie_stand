'use strict';

var pikeStand = {
  min: 23,
  max: 64,
  avgCookie: 6.3,
  hourlyCustomers:[ ],
  hourlyCookies:[ ],
};
//this function is going to create a random number based on the min and max values that appear in the object
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//this array is to hold 15 elements for each hour that the stands are opened each day
var hoursOpen = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];

// this for-loop is to try and calculate 15 different random numbers to represent number of customers for each hour they are open and store it into an array
for(var i = 0; i < hoursOpen.length; i++){
  var numberOfCustomers = (randomNumber(pikeStand.min, pikeStand.max));
  pikeStand.hourlyCustomers.push(numberOfCustomers);
}
