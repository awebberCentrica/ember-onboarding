import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, find, click, fillIn} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | input-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{input-group}}`);

    assert.ok(this.element, 'component rendered');
    assert.equal(find('button').innerHTML, '');
    assert.equal(find('label').innerHTML, '');
    assert.equal(find('input').value, '');

    // Template block usage:
    await render(hbs`
      {{#input-group}}{{/input-group}}
    `);

    assert.ok(this.element, 'component rendered');
  });

  test('it should change the label text', async function (assert) {
    await render(hbs`{{input-group inputLabel='postcode'}}`);
    assert.equal(find('label').innerHTML, 'postcode');
  });

  test('it should use the default property correctly', async function (assert) {
    await render(hbs`{{input-group defaultValue='John'}}`);
    assert.equal(find('input').value, 'John');
  });

  test('it should set the button label correctly', async function (assert) {
    await render(hbs`{{input-group buttonLbl='Save'}}`);
    assert.equal(find('button').innerHTML, 'Save');
  });

  test('it should validate the input field and not display error message', async function (assert) {
    await render(hbs`{{input-group}}`);
    await fillIn('input', 'testing');
    const component = this.owner.lookup('component:input-group');
    component.set('inputValue', 'testing');
    assert.equal(component.get('hasError'), false);
    assert.notOk(find('div.error'), 'No error block found');
  });

  test('it should validate the input field and display error message', async function (assert) {
    await render(hbs`{{input-group}}`);
    const component = this.owner.lookup('component:input-group');
    component.set('inputValue', 'te');
    assert.equal(component.get('hasError'), true);
    assert.ok(find('div.error'), 'Has error block displayed');
  });

  test('it should send action with correct value', async function (assert) {
    this.set('externalAction', (actual) => {
      assert.equal(actual, 'testing', 'submitted value is passed to external action');
    });

    await render(hbs`{{input-group updateValue=externalAction}}`);
    await fillIn('input', 'testing');
    await click('button#save-btn');
  });
});
