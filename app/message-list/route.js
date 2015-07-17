import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function() {
		return this.store.find('message');
	},
	
	actions: {
		sessionRequiresAuthentication() {
			alert('please login');
		},
		
        sendMessage(message) {
            const messageModel = this.store.createRecord('message', message);
            messageModel.save();
        }
    }
});
