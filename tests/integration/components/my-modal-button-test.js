import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('my-modal-button', 'Integration | Component | my modal button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{my-modal-button}}`);

  assert.equal(this.$('button').text().trim(), 'Click Me', 'shows button with text');
  this.$('button').click();
  assert.equal(Ember.$('#ember-testing h2').text().trim(), 'Oh hai there!', 'Shows text inside the modal');

});
