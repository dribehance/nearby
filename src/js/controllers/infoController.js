// by dribehance <dribehance.kksdapp.com>
var infoController = function($scope, platformServices, errorServices, toastServices, localStorageService, config) {
    $scope.getLocation = function() {
    	platformServices.getLocation();
    }
}
