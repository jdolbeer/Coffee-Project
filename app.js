var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];
var allKiosks = [pikePlace, capHill, spl, slu, seatac];

function Kiosk(location, minCustomersHour, maxCustomersHour, avgCupsPerCustomer, avgPoundsPerCustomer) {
  this.location = location;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.avgCupsPerCustomer = avgCupsPerCustomer;
  this.avgPoundsPerCustomer = avgPoundsPerCustomer;
  this.beansPerHour = beansPerHour;
  this.customersPerHour = customersPerHour;
  this.cupsPerHour = cupsPerHour;
  this.beansNeededForCupsPerHour = beansNeededForCupsPerHour;
  this.poundPackagesPerHour = poundPackagesPerHour;
  this.dailyCustomersTotal = dailyCustomersTotal;
  this.dailyCupsTotal = dailyCupsTotal;
  this.dailyPoundPackagesTotal = dailyPoundPackagesTotal;
  this.dailyBeansNeeded = dailyBeansNeeded;

  Kiosk.prototype.calculation = function() {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(customers);
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  };
  Kiosk.prototype.calculation = function() {
    for (var i = 0; i < hours.length; i ++) {
      var cups = Math.ceil(this.customersPerHour[i] * this.avgCupsPerCustomer);
      console.log(cups);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += cups;
      this.beansNeededForCupsPerHour = cups / 16;
    }
  };
  Kiosk.prototype.calculation = function() {
    for (var i = 0; i < hours.length; i ++) {
      var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      console.log(poundsPerHour);
      this.poundPackagesPerHour.push(poundsPerHour);
      this.dailyPoundPackagesTotal += poundsPerHour;
    }
  };
  Kiosk.prototype.calculation = function() {
    var beansHour = Math.ceil(this.beansNeededForCupsPerHour + this.poundPackagesPerHour[i]);
    console.log(beansHour);
    this.beansPerHour.push(beansHour);
    this.dailyBeansNeeded += beansHour;
  };
  var pikePlace = new Kiosk('Pike Place Market', 14, 35, 1.2, .34);
  var capHill = new Kiosk('Capitol Hill', 12, 28, 3.2, .03);
  var spl = new Kiosk('Seattle Public Library', 9, 45, 2.6, .02);
  var slu = new Kiosk('South Lake Union', 5, 18, 1.3, .04);
  var seatac = new Kiosk('Seattle Tacoma Airport', 28, 44, 1.1, .41);
};

// var beansTable = document.getElementById('beans-table');
// var thElement = document.createElement('th');
// var headings = [];
// var pikePlaceMarket = [];
// var capitolHill = [];
// var southLakeUnion = [];
// var seattlePublicLibrary = [];
// var seattleTacomaAirport = [];
//
// for (var j = 0; j < arrayTableContent.length; j ++) {
//   var trElement = document.createElement('tr');
//   for (var i = 0; i < headings.length; i ++) {
//     var thElement = document.createElement('th');
//     thElement.textContent = [i];
//     thElement.appendChild(thElement);
//   }
// }
// beansTable.appendChild(trElement);
Kiosk.render();
