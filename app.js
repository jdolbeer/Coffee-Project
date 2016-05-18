var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];
var allKiosks = [];
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
  this.baristaTotalHours = 0;
  this.baristaHoursNeeded = [];
  allKiosks.push(this);
}
// Methods
Kiosk.prototype.allTheCustomers = function(min, max) {
  for (var i = 0; i < hours.length; i ++) {
    var customers = Math.floor(Math.random() * (max - min + 1)) + min;
    this.customersPerHour.push(customers);
    this.dailyCustomersTotal += customers;
  }
};
Kiosk.prototype.allTheCups = function() {
  for (var i = 0; i < hours.length; i ++) {
    var cups = Math.ceil(this.customersPerHour[i] * this.avgCupsPerCustomer);
    this.cupsPerHour.push(cups);
    this.dailyCupsTotal += cups;
    this.beansNeededForCupsPerHour.push(cups / 16);
    this.baristaTotalHours = (Math.ceil(cups * 2));
    this.baristaHoursNeeded.push(Math.ceil(cups * 2 / 30));
  }
};
Kiosk.prototype.allThePackages = function() {
  for (var i = 0; i < hours.length; i ++) {
    var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
    this.poundPackagesPerHour.push(poundsPerHour);
    this.dailyPoundPackagesTotal += poundsPerHour;
  }
};
Kiosk.prototype.allTheBeans = function() {
  for (var i = 0; i < hours.length; i ++) {
    var beansHour = Math.ceil(this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]);
    this.beansPerHour.push(beansHour);
    this.dailyBeansNeeded += beansHour;
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

function createBeansHeader() {
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
function createBeanRows() {
  for (var i = 0; i < allKiosks.length; i ++) {
    var trElement = document.createElement('tr');
    var allLocations = document.createElement('td');
    allLocations.textContent = allKiosks[i].location;
    trElement.appendChild(allLocations);
    var dailyTotalBeans = document.createElement('td');
    dailyTotalBeans.textContent = allKiosks[i].dailyBeansNeeded;
    trElement.appendChild(dailyTotalBeans);
    for (var j = 0; j < hours.length; j ++) {
      var beanTotalPerHour = document.createElement('td');
      beanTotalPerHour.textContent = allKiosks[i].beansPerHour[j];
      trElement.appendChild(beanTotalPerHour);
    }
    beansTable.appendChild(trElement);
  }
}
var baristasTable = document.getElementById('baristas-table');
var tdElement = document.createElement('td');

function createBaristasHeader() {
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
  baristasTable.appendChild(trElement);
};
function createBaristasRows() {
  for (var i = 0; i < allKiosks.length; i ++) {
    var trElement = document.createElement('tr');
    var allLocations = document.createElement('td');
    allLocations.textContent = allKiosks[i].location;
    trElement.appendChild(allLocations);
    var dailyTotalHours = document.createElement('td');
    dailyTotalHours.textContent = allKiosks[i].baristaTotalHours;
    console.log(baristaTotalHours);
    trElement.appendChild(dailyTotalHours);
    for (var j = 0; j < hours.length; j ++) {
      var baristaTotalHours = document.createElement('td');
      baristaTotalHours.textContent = allKiosks[i].baristaHoursNeeded[j];
      trElement.appendChild(baristaTotalHours);
    }
    baristasTable.appendChild(trElement);
  }
}
createBeansHeader();
createBeanRows();
createBaristasHeader();
createBaristasRows();
