function ContactsAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

ContactsAssistant.prototype.setup = function() {
	var list = [];
	var number = 10;
	
	for(var i = 0; i < number; i++) {
		list.push({name: "Person "+i, email: "Email "+i});
	}    

	//render the items in a list using a partial template.
	var content = Mojo.View.render({collection: list, template: 'contacts/contact'});
	$('contacts').update(content);  
};

ContactsAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

ContactsAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

ContactsAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
