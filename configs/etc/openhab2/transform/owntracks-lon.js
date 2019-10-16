(function(x){
    var result = "";
    var json = JSON.parse(x);
        try
        {
			if ( json._type == "location" ) {
				result = json.lon;
			}
        }
        catch (e)
        {
            result = "ERR";
        }
    return result;
})(input)
