var icontact = {
	// Handle for the application database.  Used to store account id and client folder id
	db: null,
	currentAccount:null,
	settings: {
		root_url: "",
		app_id: "Tqar2yMY8h9WX0bOppWdeeRet9qXyEZh",
		api_username: "leason-dev",
		api_password: "weboscode"
	},
	
	init: function(){
		// Open or create the database
		db = new Mojo.Depot({name:"iContactAccounts", version:1, estimatedSize:25000, replace: false}, 
			     this.dbOpenOK.bind(this), this.dbOpenFail.bind(this)); 
		
	},
	
	dbOpenOK: function() { 
	    Mojo.Log.info("........","Database opened OK"); 
	    db.simpleGet("feedList", 
	    		this.setupAccount.bind(this), 
	    		this.retrieveAccount.bind(this)
	    ); 
	},
	
	dbOpenFail: function(transaction, result) { 
		Mojo.Log.warn("Can't open feed database (#", result.message, "). All feeds will be reloaded."); 
		Mojo.Controller.errorDialog("Can't open feed database (#" + result.message + "). All feeds will be reloaded."); 
	},
	
	setupAccount: function(a) {
		if(a === null) {
			Mojo.Log.info("Got empty account from db.");
			var req = new iContactRequest("get", "/a", {}, 
				function(accounts){
					Mojo.Log.info("Got response!");
				},
				function(request){
					Mojo.Log.info("Error with request");
				}
			);
		} else {
			Mojo.Log.info("Got account from db.");
			this.currentAccount = a;
		}
	},
	
	retrieveAccount: function() {
		Mojo.Log.info("Need to retrieve account details from the service");
	}
	
};