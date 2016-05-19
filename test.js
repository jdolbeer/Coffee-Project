var destinationArray = [];
var pikeTotalBeans = [];
var capTotalBeans = [];
var splTotalBeans = [];
var sluTotalBeans = [];
var seatacTotalBeans = [];
var all = [pikeTotalBeans, capTotalBeans, splTotalBeans, sluTotalBeans, seatacTotalBeans];

for (var i = 0; i < pikeT.length; i++) {
  var sum = 0;
  for (var j = 0; j < all.length; j++) {
    sum += all[j][i];
  }
  destinationArray.push(sum);
}
