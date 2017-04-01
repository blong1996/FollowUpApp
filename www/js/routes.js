angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'profileCtrl'
    })

      .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab4': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.add', {
    url: '/add',
    views: {
      'tab5': {
        templateUrl: 'templates/add.html',
        controller: 'addCtrl'
      }
    }
  })

  .state('tabsController.events', {
    url: '/events',
    views: {
      'tab3': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.home'
      2) Using $state.go programatically:
        $state.go('tabsController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs/tab1/home
      /tabs/tab4/home
  */

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab4': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })



  .state('tabsController.search', {
    url: '/search',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.newEvent', {
    url: '/new-event',
    views: {
      'tab5': {
        templateUrl: 'templates/newEvent.html',
        controller: 'newEventCtrl'
      }
    }
  })
    .state('tabsController.newFollowUp', {
      url: '/new-follow-up',
      views: {
        'tab5': {
          templateUrl: 'templates/newFollowUp.html',
          controller: 'AddCtrl'
        }
      }
    })

  .state('eventDetails', {
    url: '/event-detials',
    templateUrl: 'templates/eventDetails.html',
    controller: 'eventDetailsCtrl'
  })

  .state('followUpDetails', {
    url: '/follow-up-detials',
    templateUrl: 'templates/followUpDetails.html',
    controller: 'followUpDetailsCtrl'
  })

$urlRouterProvider.otherwise('/tabs/tab1/home')



});
