var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];
var allKiosks = [pikePlace, capHill, spl, slu, seatac];
// Start of Constructor
function Kiosk(location, minCustomersHour, maxCustomersHour, avgCupsPerCustomer, avgPoundsPerCustomer) {
  this.location = location;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.avgCupsPerCustomer = avgCupsPerCustomer;
  this.avgPoundsPerCustomer = avgPoundsPerCustomer;
  this.beansPerHour = [];
  this.customersPerHour = [];
  this.cupsPerHour = [];
  this.beansNeededForCupsPerHour = [];
  this.poundPackagesPerHour = [];
  this.dailyCustomersTotal = 0;
  this.dailyCupsTotal = 0;
  this.dailyPoundPackagesTotal = 0;
  this.dailyBeansNeeded = 0;
} // End of Constructor
// Methods
Kiosk.prototype.allTheCustomers = function(min, max) {
  for (var i = 0; i < hours.length; i ++) {
    var customers = Math.floor(Math.random() * (max - min + 1)) + min;
    this.customersPerHour.push(customers);
    this.dailyCustomersTotal += customers;
    console.log(customers);
  }
};
Kiosk.prototype.allTheCups = function() {
  for (var i = 0; i < hours.length; i ++) {
    var cups = Math.ceil(this.customersPerHour[i] * this.avgCupsPerCustomer);
    this.cupsPerHour.push(cups);
    this.dailyCupsTotal += cups;
    this.beansNeededForCupsPerHour.push(cups / 16);
    // console.log(cups);
  }
};
Kiosk.prototype.allThePackages = function() {
  for (var i = 0; i < hours.length; i ++) {
    var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
    this.poundPackagesPerHour.push(poundsPerHour);
    this.dailyPoundPackagesTotal += poundsPerHour;
    // console.log(poundsPerHour);
  }
};
Kiosk.prototype.allTheBeans = function() {
  for (var i = 0; i < hours.length; i ++) {
    var beansHour = Math.ceil(this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]);
    this.beansPerHour.push(beansHour);
    this.dailyBeansNeeded += beansHour;
    // console.log(beansHour);
  }
};
// Instances in Constructor
var pikePlace = new Kiosk('Pike Place Market', 14, 35, 1.2, .34);
var capHill = new Kiosk('Capitol Hill', 12, 28, 3.2, .03);
var spl = new Kiosk('Seattle Public Library', 9, 45, 2.6, .02);
var slu = new Kiosk('South Lake Union', 5, 18, 1.3, .04);
var seatac = new Kiosk('Seattle Tacoma Airport', 28, 44, 1.1, .41);
// Function Calls
pikePlace.allTheCustomers(14, 35);
pikePlace.allTheCups();
pikePlace.allThePackages();
pikePlace.allTheBeans();
capHill.allTheCustomers(12, 28);
capHill.allTheCups();
capHill.allThePackages();
capHill.allTheBeans();
spl.allTheCustomers(9, 45);
spl.allTheCups();
spl.allThePackages();
spl.allTheBeans();
slu.allTheCustomers(5, 18);
slu.allTheCups();
slu.allThePackages();
slu.allTheBeans();
seatac.allTheCustomers(28, 44);
seatac.allTheCups();
seatac.allThePackages();
seatac.allTheBeans();
// Table Creation
var beansTable = document.getElementById('beans-table');
var tdElement = document.createElement('td');

function createHeader() {
  var trElement = document.createElement('tr');
  var emptyCell = document.createElement('th');
  emptyCell.textContent = '';
  trElement.appendChild(emptyCell);
  var dailyTotalCell = document.createElement('th');
  dailyTotalCell.textContent = 'Daily Total';
  trElement.appendChild(dailyTotalCell);
  for (var i = 0; i < hours.length; i++) {
    var hoursCell = document.createElement('th');
    hoursCell.textContent = hours[i];
    trElement.appendChild(hoursCell);
  }
  beansTable.appendChild(trElement);
};
function createRows() {
  var trElement = document.createElement('tr');
  var pikeTotals = document.createElement('td');
  pikeTotals.textContent = pikePlace.dailyBeansNeeded;
  trElement.appendChild(pikeTotals);
  // for (var i = 0; i < pikePlace.beansPerHour.length; i ++) {
  //   var beansPerHourCell = document.createElement('td');
  //   beansPerHourCell.textContent = beansPerHour[i];
  //   trElement.appendChild(beansPerHourCell);
  // }
  beansTable.appendChild(trElement);
}
createHeader();
createRows();
