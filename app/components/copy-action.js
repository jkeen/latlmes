import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings:['model.ready:isReady']
});
