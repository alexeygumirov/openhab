(function(x){
    var result = ",";
    var json = JSON.parse(x);
        try
        {
			if ( json._type == 'location' ) {
				result = json.lat + "," + json.lon;
			}
        }
        catch (e)
        {
            result = ",";
        }
    return result;
})(input)
