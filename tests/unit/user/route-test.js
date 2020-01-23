import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Route | user', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:user');
    assert.ok(route);
  });

  test('navigate function', function (assert) {
    const route = this.owner.lookup('route:user');
    const stub = sinon.stub(route, 'transitionTo');
    route.actions.navigate();
    assert.equal(stub.callCount, 1, 'transitionToSub was called once');
  });
});
