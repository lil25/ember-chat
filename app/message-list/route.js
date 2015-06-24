import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('message');
	},
	
	actions: {
        sendMessage(message) {
            const messageModel = this.store.createRecord('message', message);
            messageModel.save();
        }
    }
});
