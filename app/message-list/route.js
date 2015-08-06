import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function() {
        return this.store.find('message');
	},
    
    afterModel: function(messages) {
        this.startScroll(1000);
        this.defineAuthor(messages.content);
        
        messages.addObserver('content.length', this, function(sender, key, value, rev) {
            this.defineAuthor(sender.content);
            
            this.startScroll(300);
        });
    },
    
    defineAuthor: function(data) {
        var session = this.get('session');
        
        $.each(data, function(num, obj) {
            if(obj.get('username') == session.content.secure.twitter.username) obj.set('mine', true);
            else obj.set('mine', false);
        });
    },
    
    startScroll: function(delay) {
        if(!delay) delay = 1000;

        setTimeout(function() {
            $('#chatMessages').animate({
                scrollTop: $('#chatMessages > ul').height()
            }, 1000);
        }, delay);
    },
	
	actions: {
		sessionRequiresAuthentication() {
			alert('please login');
		},
		
        sendMessage(message) {
            var self = this;
            const messageModel = this.store.createRecord('message', message);
            messageModel.save();
        }
    }
});
