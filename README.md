# GPS-Manager [WIP]
Node.js module to manage gps coordinates points

## Installation

```
npm install gps-manager
```

## Usage

###.toRad(val) 
Convert degrees to radians

- `val`: Degree value  


###.toDeg(val)
Convert radians to degrees

- `val`: Radian value


###.getMiddle(lat1,lng1,lat2,lng2)
Get midpoint of two gps coordinates points

- `lat1`: Point 1 latitude
- `lng1`: Point 1 longitude
- `lat2`: Point 2 latitude
- `lng2`: Point 2 longitude 


###.getDistance(lat1,lng1,lat2,lng2)
Get distance between two gps coordinates points

- `lat1`: Point 1 latitude
- `lng1`: Point 1 longitude
- `lat2`: Point 2 latitude
- `lng2`: Point 2 longitude 

## Example

```javascript
var gps = require('gps-manager');

//-- Convert to radians
var toRad = gps.toRad(48.2320728);

//-- Convert to degrees
var toDeg = gps.toDeg(0.8418084754216004);

//-- Mid point of two coordinates points
var midPoint = gps.getMiddle(48.2320728, 4.1482735, 48.2320524, 4.1480716);

//-- Distance between two coordinates points
var distance = gps.getDistance(48.2320728, 4.1482735, 48.2320524, 4.1480716);
```
