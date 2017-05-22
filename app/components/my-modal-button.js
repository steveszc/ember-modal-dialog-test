import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowing');
    }
  }
});
