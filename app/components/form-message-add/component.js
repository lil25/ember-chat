import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
        addMessage(message) {
            var avatar = 'avatar';
            var username = 'username';
			
            this.sendAction('addMessage', {avatar, username, message});
			
			message = '';
        }
    }
});
