var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var allKiosks = [];
var beansTable = document.getElementById('beans-table');
var tdElement = document.createElement('td');
var trElement = document.createElement('tr');
var baristasTable = document.getElementById('baristas-table');
var locationFormName = document.getElementById('new store form');
var allDailyBeans = 0;
var allDailyBaristas = 0;
var totalCoffee = [];
var totalBaristaHours = [];
var pikePlace = new Kiosk('Pike Place Market', 14, 35, 1.2, .34);
var capHill = new Kiosk('Capitol Hill', 12, 28, 3.2, .03);
var spl = new Kiosk('Seattle Public Library', 9, 45, 2.6, .02);
var slu = new Kiosk('South Lake Union', 5, 18, 1.3, .04);
var seatac = new Kiosk('Seattle Tacoma Airport', 28, 44, 1.1, .41);
// Constructor
function Kiosk(locationName, minCustomersHour, maxCustomersHour, avgCupsPerCustomer, avgPoundsPerCustomer) {
  this.locationName = locationName;
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
  this.totalBeans = [];
  allKiosks.push(this);
}
Kiosk.prototype.allTheCustomers = function(min, max) {
  if (this.dailyCustomersTotal === 0) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  }
};
Kiosk.prototype.allTheCups = function() {
  if (this.dailyCupsTotal === 0) {
    for (var i = 0; i < hours.length; i ++) {
      var cups = Math.ceil(this.customersPerHour[i] * this.avgCupsPerCustomer);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += cups;
      this.beansNeededForCupsPerHour.push(cups / 16);
      this.baristaTotalHours = (Math.ceil(cups * 2));
      this.baristaHoursNeeded.push(Math.ceil(cups * 2 / 30));
      var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      this.poundPackagesPerHour.push(poundsPerHour);
      this.dailyPoundPackagesTotal += poundsPerHour;
      var beansHour = Math.ceil(this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]);
      this.beansPerHour.push(beansHour);
      this.dailyBeansNeeded += beansHour;
    }
  }
};
// Functions Calls
function AllTheCalls() {
  for (var i = 0; i < allKiosks.length; i ++) {
    allKiosks[i].allTheCustomers(allKiosks[i].minCustomersHour, allKiosks[i].maxCustomersHour);
    allKiosks[i].allTheCups();
  }
};
function dailyTotalBeans() {
  if (allDailyBeans === 0) {
    for (var i = 0; i < allKiosks.length; i ++) {
      allDailyBeans += allKiosks[i].dailyBeansNeeded;
    }
  }
};
function dailyTotalBaristas() {
  if (allDailyBaristas === 0) {
    for (var i = 0; i < allKiosks.length; i ++) {
      allDailyBaristas += allKiosks[i].baristaTotalHours;
    }
  }
};
function allTotalBeans() {
  var hourlyBeans = 0;
  for (var i = 0; i < hours.length; i ++) {
    hourlyBeans = 0;
    for (var j = 0; j < allKiosks.length; j++) {
      hourlyBeans += allKiosks[j].beansPerHour[i];
    }
    totalCoffee.push(hourlyBeans);
  }
};
function allTotalHours() {
  var hourlyBaristas = 0;
  for (var i = 0; i < hours.length; i ++) {
    hourlyBaristas = 0;
    for (var j = 0; j < allKiosks.length; j ++) {
      hourlyBaristas += allKiosks[j].baristaHoursNeeded[i];
    }
    totalBaristaHours.push(hourlyBaristas);
  }
}
// Table Creation
function createBeansHeader() {
  var trElement = document.createElement('tr');
  var emptyCell = document.createElement('th');
  emptyCell.textContent = 'Location Name';
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
    allLocations.textContent = allKiosks[i].locationName;
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
function createBeansTotal() {
  var trElement = document.createElement('tr');
  var totalCell = document.createElement('td');
  totalCell.textContent = 'TOTAL';
  beansTable.appendChild(trElement);
  trElement.appendChild(totalCell);
  var dailyBeans = document.createElement('td');
  dailyBeans.textContent = allDailyBeans;
  trElement.appendChild(dailyBeans);
  for (var i = 0; i < totalCoffee.length; i ++) {
    var theTotalBeans = document.createElement('td');
    theTotalBeans.textContent = totalCoffee[i];
    trElement.appendChild(theTotalBeans);
  }
};
function createBaristasHeader() {
  var trElement = document.createElement('tr');
  var emptyCell = document.createElement('th');
  emptyCell.textContent = 'Location Name';
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
    allLocations.textContent = allKiosks[i].locationName;
    trElement.appendChild(allLocations);
    var dailyTotalHours = document.createElement('td');
    dailyTotalHours.textContent = allKiosks[i].baristaTotalHours;
    trElement.appendChild(dailyTotalHours);
    for (var j = 0; j < hours.length; j ++) {
      var baristaTotalHours = document.createElement('td');
      baristaTotalHours.textContent = allKiosks[i].baristaHoursNeeded[j];
      trElement.appendChild(baristaTotalHours);
    }
    baristasTable.appendChild(trElement);
  }
}
function createBaristasTotal() {
  var trElement = document.createElement('tr');
  var totalCell = document.createElement('td');
  totalCell.textContent = 'TOTAL';
  baristasTable.appendChild(trElement);
  trElement.appendChild(totalCell);
  var dailyBaristas = document.createElement('td');
  dailyBaristas.textContent = allDailyBaristas;
  trElement.appendChild(dailyBaristas);
  for (var i = 0; i < totalCoffee.length; i ++) {
    var theTotalBaristas = document.createElement('td');
    theTotalBaristas.textContent = totalBaristaHours[i];
    trElement.appendChild(theTotalBaristas);
  }
};
function handleSubmitLocation(event) {
  event.preventDefault();
  if (!event.target.locationName.value || !event.target.minCustomersHour.value || !event.target.maxCustomersHour.value || !event.target.avgCupsPerCustomer.value || !event.target.avgPoundsPerCustomer.value)
  {
    return alert('Fields cannot be empty!');
  }
  var addNewStore = new Kiosk(event.target.locationName.value, parseInt(event.target.minCustomersHour.value), parseInt(event.target.maxCustomersHour.value), event.target.avgCupsPerCustomer.value, event.target.avgPoundsPerCustomer.value);
  event.target.locationName.value = null;
  event.target.minCustomersHour.value = null;
  event.target.maxCustomersHour.value = null;
  event.target.avgCupsPerCustomer.value = null;
  event.target.avgPoundsPerCustomer.value = null;
  beansTable.innerHTML = '';
  baristasTable.innerHTML = '';
  AllTheCalls();
  dailyTotalBeans();
  dailyTotalBaristas();
  createBeansHeader();
  createBeanRows();
  createBeansTotal();
  createBaristasHeader();
  createBaristasRows();
  createBaristasTotal();
}
locationFormName.addEventListener('submit', handleSubmitLocation);
// Calling All Calls
AllTheCalls();
allTotalBeans();
dailyTotalBeans();
allTotalHours();
dailyTotalBaristas();
createBeansHeader();
createBeanRows();
createBeansTotal();
createBaristasHeader();
createBaristasRows();
createBaristasTotal();
