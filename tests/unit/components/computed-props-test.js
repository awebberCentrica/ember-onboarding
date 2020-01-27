import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Component | computed-props', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const component = this.owner.factoryFor('component:computed-props').create();
    assert.ok(component);
  });

  test('it should get all usernames', function (assert) {
    const component = this.owner.factoryFor('component:computed-props').create();
    assert.propEqual(component.get('userNames'), ['Joe', 'Amy', 'Kenny', 'Kate']);
  });

  test('it should get all bmwusers', function (assert) {
    const component = this.owner.factoryFor('component:computed-props').create();
    assert.propEqual(component.get('bmwusers'), ['Joe', 'Kate']);
  });

  test('it should get all whiteCarsUsers', function (assert) {
    const component = this.owner.factoryFor('component:computed-props').create();
    assert.propEqual(component.get('whiteCarsUsers'), ['Joe', 'Kenny', 'Kate']);
  });

  test('it should get all usersWith1Car', function (assert) {
    const component = this.owner.factoryFor('component:computed-props').create();
    assert.propEqual(component.get('usersWith1Car'), ['Joe', 'Kenny']);
  });

  test('it should get all userswithMoreThanOneCar', function (assert) {
    const component = this.owner.factoryFor('component:computed-props').create();
    assert.propEqual(component.get('userswithMoreThanOneCar'), ['Amy', 'Kate']);
  });

  test('it should get allMakes', function (assert) {
    const component = this.owner.factoryFor('component:computed-props').create();
    assert.propEqual(component.get('allMakes'), ['BMW', 'Opel', 'Fiat', 'Porsche', 'VolksWagen']);
  });
});
