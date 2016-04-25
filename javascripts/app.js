(function() {
  var app = angular.module('PortfolioWebsite', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "/templates/_homeView.html"
      })
      .state('projects', {
        url: "/projects",
        templateUrl: "/templates/_projectsView.html"
      })
     .state('contact', {
        url: "/contact",
        templateUrl: "/templates/_contactView.html"
      });
  });
})();
