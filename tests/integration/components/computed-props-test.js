import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, fillIn, click, find} from '@ember/test-helpers';
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
    await render(hbs`{{computed-props}}`);
    assert.equal(find('div#user-list').children.length, 4);
    await fillIn('input#username', 'alex');
    await fillIn('input#carMake', 'BMW');
    await fillIn('select#carColour', 'red');
    await click('button#addNewUser');
    assert.equal(find('div#user-list').children.length, 5);
  });

  test('it removes a car correctly', async function (assert) {
    await render(hbs`{{computed-props}}`);
    const userElm = find('div#user-list').children[0];
    const carList = userElm.querySelector('div#car-list');
    assert.equal(carList.children.length, 1);
    await click(carList.querySelector('button'));
    assert.equal(carList.children.length, 0);
  });

  test('it adds a car correctly', async function (assert) {
    await render(hbs`{{computed-props}}`);
    const userElm = find('div#user-list').children[0];
    const carList = userElm.querySelector('div#car-list');
    assert.equal(carList.children.length, 1);
    await fillIn(userElm.querySelector('input'), 'Merc');
    await fillIn('select', 'red');
    await click(userElm.querySelector('button.add-btn'));
    assert.equal(carList.children.length, 2);
  });
});
