import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Route | postcode', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:user/postcode');
    assert.ok(route);
  });
});
