import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, fillIn, click} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | computed-props', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{computed-props}}`);

    assert.ok(this.element.textContent.trim());

  });

  test('it adds a new user to the list correctly', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`{{computed-props}}`);
    await fillIn('input#username', 'alex');
    await fillIn('input#carMake', 'BMW');
    await fillIn('select#carColour', 'red');
    await click('button#addNewUser');
    const component = this.owner.lookup('component:computed-props');
    const users = component.get('users');
    assert.propEqual(users[users.length - 1], {
      name: 'alex',
      cars: [{
        make: 'BMW',
        color: 'red'
      }]
    });

  });
});
