/**
 * Computed props exercise
 * see https://github.com/ConnectedHomes/ember-bootcamp-project/wiki/computed-props
 * @type {Array}
 */
import Component from '@ember/component';
import EmberObject from '@ember/object';
import {A} from '@ember/array';

const data = [EmberObject.create({
  name: 'Joe',
  cars: [{
    make: 'BMW',
    color: 'white'
  }]
}), EmberObject.create({
  name: 'Amy',
  cars: [{
    make: 'Opel',
    color: 'red'
  }, {
    make: 'Fiat',
    color: 'green'
  }]
}), EmberObject.create({
  name: 'Kenny',
  cars: [{
    make: 'Porsche',
    color: 'white'
  }]
}), EmberObject.create({
  name: 'Kate',
  cars: [{
    make: 'BMW',
    color: 'white'
  }, {
    make: 'VolksWagen',
    color: 'yellow'
  }]
})];

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('users', A(data));
    this.set('availableColors', A(['white', 'red', 'green', 'yellow']));
  },

  /**
   * Please replace these props below with computed props
   * @type {Array}
   */
  userNames: [],
  bmwusers: [],
  whiteCarsUsers: [],
  usersWith1Car: [],
  userswithMoreThanOneCar: [],
  allMakes: [] // no repeat of makes

});
