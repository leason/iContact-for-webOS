var iContactRequest = function(type, url, data, onSuccess, onFailure) {
	this.options = {
		type:	type,
		url: 	icontact.settings.root_url + url,
		onSuccess:onSuccess || function(){},
		onFailure:onFailure || function(){}
	};
	
	this.send = function() {
		Mojo.Log.info("Sending '" + this.options.type + "' request to '" + this.options.url + "'");
		
		new Ajax.Request(
			this.options.url,
			{
				method:type,
				parameters: data,
				onSuccess: this.success,
				onFailure: onFailure,
				evalJSON:"force",
				requestHeaders: {
					"Accept": 		"application/json",
					"Content-type": "application/json",
					"API-Version": 	"2.1",
					"API-Username": icontact.settings.api_username,
					"API-Password": icontact.settings.api_password,
					"API-AppId": 	icontact.settings.app_id
				}
			}
		);
	};
	
	this.success = function(req) {
		var responseObject = req.responseJSON;
		Mojo.Log.info("AJAX Successful ----------> " + this.options.url);
		Mojo.Log.info(responseObject);
		
		this.options.onSuccess.call(this, responseObject);
	}
	
	this.send();
};