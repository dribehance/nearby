// by dribehance <dribehance.kksdapp.com>
var bonusEnvelopeController = function($scope, $location, $routeParams, bonusServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    toastServices.show();
    bonusServices.envelopeBonus({
        token: $scope.token,
        user_bonus_id: $routeParams.user_bonus_id
    }).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && (data.status == config.response.SUCCESS || data.status == 12)) {
        	$scope.bonus = data;
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
    $scope.queryBonusRecords = function() {
        $location.path("/bonus/received").search({
            token: $routeParams.token
        })
    }
    $scope.imageview_src = "../images/bonus_bg.png";
}
