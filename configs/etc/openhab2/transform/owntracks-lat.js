(function(x){
    var result = "";
    var json = JSON.parse(x);
        try
        {
			if ( json._type == "location" ) {
				result = json.lat;
			}
        }
        catch (e)
        {
            result = "ERR";
        }
    return result;
})(input)
