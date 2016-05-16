var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];

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
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += cups;
      this.beansNeededForCupsPerHour = cups / 16;
    }
  },
  calcPoundPackagesPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var poundsPerHour = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      this.poundPackagesPerHour.push(poundsPerHour);
      this.dailyPoundPackagesTotal += poundsPerHour;
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i ++) {
      var beansHour = Math.ceil(this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]);
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
      liElement.textContent = hours[i] + this.beansPerHour[i] + ' lbs.' + '[' + this.customersPerHour[i] + ' customers, ' + this.dailyCupsTotal[i] + ' (' + this.beansNeededForCupsPerHour[i] + ', ' + this.poundPackagesPerHour[i] + ')';
      ulElement.appendChild(liElement);
    }
  }
};
pikePlace.render();
