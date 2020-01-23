import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  inputValue: '',
  hasError: computed('inputValue', function () {
    return this.get('inputValue').length <= 2;
  }),
  actions: {
    saveInfo(inputValue) {
      this.sendAction('updateValue', inputValue);
    }
  }
});
