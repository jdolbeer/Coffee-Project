var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];
var allKiosks = [];

function Kiosk(minCustomersHour, maxCustomersHour, avgCupsPerCustomer, avgPoundsPerCustomer, beansPerHour, customersPerHour, cupsPerHour, beansNeededForCupsPerHour, poundPackagesPerHour, dailyCustomersTotal, dailyCupsTotal, dailyPoundPackagesTotal, dailyBeansNeeded) {
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
}
