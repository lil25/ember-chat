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
            
            setTimeout(function() {
                $('#chatMessages').animate({
                    scrollTop: $('#chatMessages > ul').height()
                }, 1000);
            }, 300);
        },
        
        loading(transition, originRoute) {
            this.router.one('didTransition', function () {
                setTimeout(function() {
                    $('#chatMessages').animate({
                        scrollTop: $('#chatMessages > ul').height()
                    }, 1000);
                }, 1000);
            });
        }
    }
});
