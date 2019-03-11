import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Component | computed-props', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const component = this.owner.factoryFor('component:computed-props').create();
    assert.ok(component);
  });
});
