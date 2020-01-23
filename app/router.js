import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('welcome', {path: '/'});
  this.route('computed');
  this.route('user', {path: '/user/:nickname'}, function () {
    this.route('postcode');
    this.route('change-name');
  });

});

export default Router;
