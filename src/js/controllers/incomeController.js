// by dribehance <dribehance.kksdapp.com>
var incomeController = function($scope, $routeParams, platformServices, errorServices, toastServices, localStorageService, config) {
    $scope.income = $routeParams.income;
    $scope.share_code = $routeParams.share_code;
    $scope.share = function() {
        platformServices.share();
    }
}
