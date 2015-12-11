// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby", [
    "ngRoute",
    "mobile-angular-ui",
    "mobile-angular-ui.core",
    "LocalStorageModule",
    "timer"
])
.config(function($routeProvider,$httpProvider,localStorageServiceProvider) {
    $routeProvider
        .when("/index", {
            templateUrl: "home.html",
            reloadOnSearch: false,
            controller: indexController
        })
        .when("/info", {
            templateUrl: "info.html",
            reloadOnSearch: false,
            controller: infoController
        })
        .when("/partime", {
            templateUrl: "partime.html",
            reloadOnSearch: false,
            controller: partimeController
        })
        .when("/ping", {
            templateUrl: "ping.html",
            reloadOnSearch: false,
            controller: pingController
        })
        .when("/partime/company", {
            templateUrl: "company.html",
            reloadOnSearch: false,
            controller: companyController
        })
        .when("/bonus", {
            templateUrl: "bonus.html",
            reloadOnSearch: false,
            controller: bonusController
        })
        .when("/bonus/envelope", {
            templateUrl: "bonus_envelope.html",
            reloadOnSearch: false,
            controller: bonusEnvelopeController
        })
        .when("/bonus/paid", {
            templateUrl: "bonus_paid.html",
            reloadOnSearch: false,
            controller: bonusPaidController
        })
        .when("/bonus/received", {
            templateUrl: "bonus_received.html",
            reloadOnSearch: false,
            controller: bonusReceivedController
        })
        .when("/income", {
            templateUrl: "income.html",
            reloadOnSearch: false,
            controller: incomeController
        })
        .when("/management/info", {
            templateUrl: "management_info.html",
            reloadOnSearch: false,
            controller: managementInfoController
        })
        .when("/management/partime", {
            templateUrl: "management_partime.html",
            reloadOnSearch: false,
            controller: managementPartimeController
        })
        .when("/authenication/company", {
            templateUrl: "authenication_company.html",
            reloadOnSearch: false,
            controller: authenicationCompanyController
        })
        .when("/authenication/car_owner", {
            templateUrl: "authenication_car_owner.html",
            reloadOnSearch: false,
            controller: authenicationCarOwnerController
        })
        .otherwise({
            redirectTo: "/index"
        });
        // $httpProvider.defaults.useXDomain = true;
        // $httpProvider.defaults.withCredentials = true;
        // delete $httpProvider.defaults.headers.common["X-Requested-With"];
        localStorageServiceProvider.setStorageCookie(1/50);
        $httpProvider.interceptors.push('tokenInterceptor');

}).run(function(appServices) {
    // init event such as routechangestart...
    appServices.init();
});
