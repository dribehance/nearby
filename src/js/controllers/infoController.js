// by dribehance <dribehance.kksdapp.com>
var infoController = function($scope, platformServices, errorServices, toastServices, localStorageService, config) {
    $scope.save = function() {

    }
    $scope.unsave = function() {

    }
    $scope.preview_images = ["../images/default.jpg", "../images/bonus_bg.png"]
    $scope.dial = function () {
    	platformServices.dial();
    }
    $scope.getLocation = function() {
        platformServices.getLocation();
    }
    $scope.share = function() {
        platformServices.share();
    }
}
