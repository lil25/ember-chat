import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function() {
        return this.store.find('message');
	},
    
    afterModel: function(messages) {
        console.log(messages.get('length'));
    },
    
    startScroll: function(duration) {
        if(!duration) duration = 1000;

        setTimeout(function() {
            $('#chatMessages').animate({
                scrollTop: $('#chatMessages > ul').height()
            }, 1000);
        }, duration);
    }.on('init'),
    
    handleNewMessage : function() {
        console.log('sdfgdg');
    }.observes('content.length'),
	
	actions: {
		sessionRequiresAuthentication() {
			alert('please login');
		},
		
        sendMessage(message) {
            var self = this;
            const messageModel = this.store.createRecord('message', message);
            messageModel.save().then(
                function() {
                    self.startScroll(300);
                },
                function() {
                }
            );
        }
    }
});
