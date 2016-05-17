var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];

var numb = 123.23454;
numb = numb.toFixed(2);

var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calcCupsPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var cups = Math.ceil(this.customersPerHour[i] * this.avgCupsPerCustomer);
      console.log(cups);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += cups;
      this.beansNeededForCupsPerHour = cups / 16;
    }
  },
  calcPoundPackagesPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      console.log(poundsPerHour);
      this.poundPackagesPerHour.push(poundsPerHour);
      this.dailyPoundPackagesTotal += poundsPerHour;
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var beansHour = Math.ceil(parseFloat(this.beansNeededForCupsPerHour + this.poundPackagesPerHour[i]).toFixed(2));
      console.log(beansHour);
      this.beansPerHour.push(beansHour);
      this.dailyBeansNeeded += beansHour;
    }
  },
  render: function() {
    pikePlace.calcCustomersPerHour(pikePlace.minCustomersHour, pikePlace.maxCustomersHour);
    pikePlace.calcCupsPerHour();
    pikePlace.calcPoundPackagesPerHour();
    pikePlace.calcBeansPerHour();
    var ulElement = document.getElementById('pike');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs. ' + '[' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + 'cups' + ' (' + this.beansNeededForCupsPerHour + ' lbs.), ' + this.poundPackagesPerHour[i] + ' lbs. to-go]';
      ulElement.appendChild(liElement);
    }
  }
};
pikePlace.render();

var capHill = {
  locationName: 'Capitol Hill',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calcCupsPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var cups = Math.ceil(this.customersPerHour[i] * this.avgCupsPerCustomer);
      console.log(cups);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += cups;
      this.beansNeededForCupsPerHour = cups / 16;
    }
  },
  calcPoundPackagesPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      console.log(poundsPerHour);
      this.poundPackagesPerHour.push(poundsPerHour);
      this.dailyPoundPackagesTotal += poundsPerHour;
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var beansHour = Math.ceil(this.beansNeededForCupsPerHour + this.poundPackagesPerHour[i]);
      console.log(beansHour);
      this.beansPerHour.push(beansHour);
      this.dailyBeansNeeded += beansHour;
    }
  },
  render: function() {
    capHill.calcCustomersPerHour(capHill.minCustomersHour, capHill.maxCustomersHour);
    capHill.calcCupsPerHour();
    capHill.calcPoundPackagesPerHour();
    capHill.calcBeansPerHour();
    var ulElement = document.getElementById('capitol');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs. ' + '[' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + 'cups' + ' (' + this.beansNeededForCupsPerHour + ' lbs.), ' + this.poundPackagesPerHour[i] + ' lbs. to-go]';
      ulElement.appendChild(liElement);
    }
  }
};
capHill.render();
var seaLibrary = {
  locationName: 'Seattle Public Library',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calcCupsPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var cups = Math.ceil(this.customersPerHour[i] * this.avgCupsPerCustomer);
      console.log(cups);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += cups;
      this.beansNeededForCupsPerHour = cups / 16;
    }
  },
  calcPoundPackagesPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      console.log(poundsPerHour);
      this.poundPackagesPerHour.push(poundsPerHour);
      this.dailyPoundPackagesTotal += poundsPerHour;
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var beansHour = Math.ceil(this.beansNeededForCupsPerHour + this.poundPackagesPerHour[i]);
      console.log(beansHour);
      this.beansPerHour.push(beansHour);
      this.dailyBeansNeeded += beansHour;
    }
  },
  render: function() {
    seaLibrary.calcCustomersPerHour(seaLibrary.minCustomersHour, seaLibrary.maxCustomersHour);
    seaLibrary.calcCupsPerHour();
    seaLibrary.calcPoundPackagesPerHour();
    seaLibrary.calcBeansPerHour();
    var ulElement = document.getElementById('spl');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs. ' + '[' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + 'cups' + ' (' + this.beansNeededForCupsPerHour + ' lbs.), ' + this.poundPackagesPerHour[i] + ' lbs. to-go]';
      ulElement.appendChild(liElement);
    }
  }
};
seaLibrary.render();
var slu = {
  locationName: 'South Lake Union',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calcCupsPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var cups = Math.ceil(this.customersPerHour[i] * this.avgCupsPerCustomer);
      console.log(cups);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += cups;
      this.beansNeededForCupsPerHour = cups / 16;
    }
  },
  calcPoundPackagesPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      console.log(poundsPerHour);
      this.poundPackagesPerHour.push(poundsPerHour);
      this.dailyPoundPackagesTotal += poundsPerHour;
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var beansHour = Math.ceil(this.beansNeededForCupsPerHour + this.poundPackagesPerHour[i]);
      console.log(beansHour);
      this.beansPerHour.push(beansHour);
      this.dailyBeansNeeded += beansHour;
    }
  },
  render: function() {
    slu.calcCustomersPerHour(slu.minCustomersHour, slu.maxCustomersHour);
    slu.calcCupsPerHour();
    slu.calcPoundPackagesPerHour();
    slu.calcBeansPerHour();
    var ulElement = document.getElementById('slu');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs. ' + '[' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + 'cups' + ' (' + this.beansNeededForCupsPerHour + ' lbs.), ' + this.poundPackagesPerHour[i] + ' lbs. to-go]';
      ulElement.appendChild(liElement);
    }
  }
};
slu.render();
var seatac = {
  locationName: 'Seattle Tacoma Airport',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calcCupsPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var cups = Math.ceil(this.customersPerHour[i] * this.avgCupsPerCustomer);
      console.log(cups);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += cups;
      this.beansNeededForCupsPerHour = cups / 16;
    }
  },
  calcPoundPackagesPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      console.log(poundsPerHour);
      this.poundPackagesPerHour.push(poundsPerHour);
      this.dailyPoundPackagesTotal += poundsPerHour;
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var beansHour = Math.ceil(this.beansNeededForCupsPerHour + this.poundPackagesPerHour[i]);
      console.log(beansHour);
      this.beansPerHour.push(beansHour);
      this.dailyBeansNeeded += beansHour;
    }
  },
  render: function() {
    seatac.calcCustomersPerHour(seatac.minCustomersHour, seatac.maxCustomersHour);
    seatac.calcCupsPerHour();
    seatac.calcPoundPackagesPerHour();
    seatac.calcBeansPerHour();
    var ulElement = document.getElementById('seatac');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs. ' + '[' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + 'cups' + ' (' + this.beansNeededForCupsPerHour + ' lbs.), ' + this.poundPackagesPerHour[i] + ' lbs. to-go]';
      ulElement.appendChild(liElement);
    }
  }
};
seatac.render();
