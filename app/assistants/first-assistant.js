function FirstAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

FirstAssistant.prototype.setup = function() {
    this.buttonAttributes = {};

    this.controller.setupWidget("btnContacts", this.buttonAttributes, {
        "label" : "Contacts",
        "buttonClass" : "",
        "disabled" : false    	
    }); 
   Mojo.Event.listen(this.controller.get("btnContacts"), Mojo.Event.tap, 
       this.loadContacts.bind(this));

   this.controller.setupWidget("Tracking", this.buttonAttributes, {
       "label" : "Tracking",
       "buttonClass" : "",
       "disabled" : false    	
   }); 
  Mojo.Event.listen(this.controller.get("btnTracking"), Mojo.Event.tap, 
      this.loadTracking.bind(this));

};

FirstAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

FirstAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

FirstAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};

FirstAssistant.prototype.loadContacts = function(event){
	Mojo.Controller.stageController.pushScene("contacts");
};

FirstAssistant.prototype.loadTracking = function(event){
	Mojo.Controller.stageController.pushScene("tracking");
};