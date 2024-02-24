var app = angular.module("myApp", ["ui.router"]);
app.config([
  "$stateProvider",
  "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "./Assets/templates/home.html",
      })
      .state("elements", {
        url: "/elements",
        templateUrl: "./Assets/Templates/elements.html",
      })
      .state("generic", {
        url: "/generic",
        templateUrl: "./Assets/Templates/generic.html",
      });
    //if no match found go to default or home
    $urlRouterProvider.otherwise("/home");
  },
]);

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgb(244, 234, 234)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
