//-- Include module
var gps = require('./gps-manager');

//-- Degrees to radians
var toRad = gps.toRad(48.2320728);
console.log(toRad);

//-- Radians to degrees
var toDeg = gps.toDeg(0.8418084754216004);
console.log(toDeg);

//-- Mid point of two coordinates points
var midPoint = gps.getMiddle(48.2320728, 4.1482735, 48.2320524, 4.1480716);
console.log(midPoint);