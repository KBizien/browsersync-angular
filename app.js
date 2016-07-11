/*/////////////////////////
/* ANGULAR APP
/*////////////////////////

angular.module('app', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('page1', {
        url: "/",
        templateUrl: "partials/page1.html"
      })
      .state('page2', {
        url: "/page",
        templateUrl: "partials/page2.html"
      });
}]);
