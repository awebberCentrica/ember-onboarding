import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return {
      nickname: params.nickname,
      newName: ''
    };
  },
  actions: {
    navigate() {
      this._navigate();
    },
    setNewName(updateValue) {
      const model = this.controller.get('model');
      model.newName = updateValue;
    }
  },
  _navigate() {
    this.transitionTo('user.change-name');
  }
});
