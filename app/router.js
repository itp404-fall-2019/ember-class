import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('organization', { path: '/organizations/:org' }, function() {
    this.route('user', { path: '/users/:login' });
  });
});
