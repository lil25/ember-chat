import DS from 'ember-data';

export default DS.Model.extend({
    avatar: DS.attr('string'),
    username: DS.attr('string'),
    message: DS.attr('string'),
    mine: false
});
