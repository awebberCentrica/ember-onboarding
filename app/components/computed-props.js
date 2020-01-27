/**
 * Computed props exercise
 * see https://github.com/ConnectedHomes/ember-bootcamp-project/wiki/computed-props
 * @type {Array}
 */
import Component from '@ember/component';
import EmberObject from '@ember/object';
import {computed} from '@ember/object';
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
    this.newCarColor = '';
    const newArr = [];
    data.forEach((item) => {
      const obj = {};
      Object.assign(obj, item);
      obj.cars = [...item.cars];
      newArr.push(obj);
    });
    this.set('users', A(newArr));
    this.set('availableColors', A(['white', 'red', 'green', 'yellow']));
  },

  /**
   * Please replace these props below with computed props
   * @type {Array}
   */
  userNames: computed.map('users', function (user) {
    return user.name;
  }),
  bmwusers: computed('users', function () {
    const bmwUsers = [];
    this.get('users').forEach((user) => {
      const foundCar = user.cars.find((car) => car.make === 'BMW');
      if (foundCar) {
        bmwUsers.push(user.name);
      }
    });
    return bmwUsers;
  }),
  whiteCarsUsers: computed('users', function () {
    const whiteCarUsers = [];
    this.get('users').forEach((user) => {
      const foundCar = user.cars.find((car) => car.color === 'white');
      if (foundCar) {
        whiteCarUsers.push(user.name);
      }
    });
    return whiteCarUsers;
  }),
  usersWith1Car: computed('users', function () {
    const usersWith1Car = [];
    this.get('users').forEach((user) => {
      if (user.cars.length === 1) {
        usersWith1Car.push(user.name);
      }
    });
    return usersWith1Car;
  }),
  userswithMoreThanOneCar: computed('users', function () {
    const usersWithMoreThan1Car = [];
    this.get('users').forEach((user) => {
      if (user.cars.length > 1) {
        usersWithMoreThan1Car.push(user.name);
      }
    });
    return usersWithMoreThan1Car;
  }),
  allMakes: computed('users', function () {
    const makeOfCar = [];
    this.get('users').forEach((user) => {
      user.cars.forEach((car) => {
        if (!makeOfCar.includes(car.make)) {
          makeOfCar.push(car.make);
        }
      });
    });
    return makeOfCar;
  }),
  actions: {
    setNewCarColor(color) {
      this.set('newCarColor', color);
    },
    addNewUser() {
      this.get('users').pushObject({
        name: this.get('newUsername'),
        cars: [{
          make: this.get('newCarMake'),
          color: this.get('newCarColor')
        }]
      });
      this.set('newUsername', '');
      this.set('newCarMake', '');
      this.set('newCarColor', '');
    },
    removeCar(userIndex, carIndex) {
      this.get('users')[userIndex].cars.removeAt(carIndex, 1);
    },
    addNewCar(userIndex) {
      this.get('users')[userIndex].cars.pushObject({
        make: this.get('userCarMake'),
        color: this.get('newCarColor')
      });
    }
  }

});
