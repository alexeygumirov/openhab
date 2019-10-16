(function(x){
    var result = "";
    var json = JSON.parse(x);
        try
        {
                result = json.contact;
                if (json.contact)
                {
                        result="CLOSED";
                }
                else
                {
                        result="OPEN";
                }
        }
        catch (e)
        {
                result = "";
        }
    return result;
})(input)
