//------------
// MODULE
//------------
module.exports = {

	/*
	 * toRad
	 * Convert degrees to radians
	 *
	 * val {Float} : Degrees value
	 *
	 */
	toRad: function(val){
		return val * Math.PI / 180;
	},

	/*
	 * toDeg
	 * Convert radians to degrees
	 *
	 * val {Float} : Radians value
	 *
	 */
	toDeg: function(val){
		return val * (180 / Math.PI);
	},

	/*
	 * getMiddle
	 * Get middle of two coordinates points
	 *
	 * lat1 {Float} : Point 1 latitude
	 * lng1 {Float} : Point 1 longitude
	 * lat2 {Float} : Point 2 latitude
	 * lng2 {Float} : Point 2 longitude
	 *
	 */
    getMiddle: function(lat1, lng1, lat2, lng2) {
    	//-- Longitude difference
	    var dLng = this.toRad(lng2 - lng1);

	    //-- Convert to radians
	    lat1 = this.toRad(lat1);
	    lat2 = this.toRad(lat2);
	    lng1 = this.toRad(lng1);

	    //-- Get middle point
	    var bX = Math.cos(lat2) * Math.cos(dLng);
	    var bY = Math.cos(lat2) * Math.sin(dLng);
	    var lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + bX) * (Math.cos(lat1) + bX) + bY * bY));
	    var lng3 = lng1 + Math.atan2(bY, Math.cos(lat1) + bX);

	    //-- Return result
	    return [this.toDeg(lng3), this.toDeg(lat3)];
    },

    /*
	 * getMiddle
	 * Get distance between two coordinates points
	 *
	 * lat1 {Float} : Point 1 latitude
	 * lng1 {Float} : Point 1 longitude
	 * lat2 {Float} : Point 2 latitude
	 * lng2 {Float} : Point 2 longitude
	 *
	 */
    getDistance: function(lat1, lng1, lat2, lng2){
    	var R = 6371000; // meters

    	//-- Latitude / Longitude differences
    	var dLat = this.toRad(lat2-lat1);
		var dLng = this.toRad(lng2-lng1);

    	//-- Convert to radians
		var lat1 = this.toRad(lat1);
		var lat2 = this.toRad(lat2);

		//-- Get distance
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng/2) * Math.sin(dLng/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

		var d = R * c;

		//-- Return result
		return d;
    }

}