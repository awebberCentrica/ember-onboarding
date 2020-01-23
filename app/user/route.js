import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return params.nickname;
  },
  actions: {
    navigate() {
      this.transitionTo('user.change-name');
    }
  }
});
