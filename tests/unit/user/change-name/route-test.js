import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Route | user/change-name', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:user/change-name');
    assert.ok(route);
  });
});
