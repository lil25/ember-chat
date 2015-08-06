import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addMessage(message) {
            var session = this.get('session');
			var avatar = 'avatar';
            var username = 'username';
			
			if(session) {
				avatar = session.content.secure.twitter.cachedUserProfile.profile_image_url_https;
				username = session.content.secure.twitter.username;
			}
			
            this.sendAction('addMessage', {avatar, username, message});
            
            this.$('input[type="text"]').val('');
        }
    }
});
