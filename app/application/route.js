import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	actions: {
		sessionRequiresAuthentication () {
			this.get('session').authenticate('authenticator:firebase', 'twitter');
		}
	}
});
