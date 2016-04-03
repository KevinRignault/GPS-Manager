//------------
// MODULE
//------------
module.exports = {

	/*
	 * toRad
	 * Convert degrees to radians
	 *
	 * val {Float} : Value in degrees
	 *
	 */
	toRad: function(nb){
		return nb * Math.PI / 180;
	},

	/*
	 * toDeg
	 * Convert radians to degrees
	 *
	 * val {Float} : Value in radians
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

	    var bX = Math.cos(lat2) * Math.cos(dLng);
	    var bY = Math.cos(lat2) * Math.sin(dLng);
	    var lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + bX) * (Math.cos(lat1) + bX) + bY * bY));
	    var lng3 = lng1 + Math.atan2(bY, Math.cos(lat1) + bX);

	    //-- Return result
	    return [this.toDeg(lng3), this.toDeg(lat3)];
    }

}