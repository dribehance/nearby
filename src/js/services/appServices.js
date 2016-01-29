 // by dribehance <dribehance.kksdapp.com>
 // EventHandle
 angular.module("Nearby").factory("appServices", function($rootScope, $window, $location, errorServices, toastServices, platformServices, config) {
     var routeChangeStart = function(e) {
         // do something white routechangestart,eg:
         // toastServices.show();
     }
     var routeChangeSuccess = function(e, currentRoute, prevRoute) {
         // do something white routechangesuccess,eg:
         toastServices.hide();
         errorServices.hide();
         navBarHandler(e, currentRoute, prevRoute);
     }
     var routeChangeError = function(e, currentRoute, prevRoute) {
         // do something white routechangesuccess,eg:
         // $rootScope.back();
     }
     var navBarHandler = function(e, currentRoute, prevRoute) {
         // handle navbar
         var _navbars_b = ["/index", "/licai", "/me", "/", "/signin"];
         if (_navbars_b.contains($location.path())) {
             $rootScope.navbar.bottom = true;
         } else {
             $rootScope.navbar.bottom = false;
         }
         var _navbars_t = ["/bonus", "/bonus/envelope", "/bonus/received", "/bonus/paid", "/fudai/received", "/fudai/willing",
             "/income", "/ping"
         ];
         if (_navbars_t.contains($location.path())) {
             $rootScope.navbar.top = false;
         } else {
             $rootScope.navbar.top = true;
         }
     }
     var onBackKeyDown = function() {
         $rootScope.$apply(function() {
             $rootScope.back();
         });
     }
     return {
         init: function() {
             // native app handle
             platformServices.init();
             // handle browser backkeydown
             if (!platformServices.isNative()) {
                 // handle android backkeydown
                 document.addEventListener("backbutton", onBackKeyDown, false);
                 // backaction
                 $rootScope.back = function() {
                     $window.history.back();
                 }
             }

             // init navbar 
             $rootScope.navbar = {
                 top: true,
                 bottom: true
             };
             $rootScope.staticImageUrl = config.imageUrl;
             // {2:rootScope} binding
             $rootScope.$on("$routeChangeStart", routeChangeStart);
             $rootScope.$on("$routeChangeSuccess", routeChangeSuccess);
             $rootScope.$on("$routeChangeError", routeChangeError);
         }
     }
 });