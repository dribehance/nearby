// by dribehance <dribehance.kksdapp.com>
var authenicationCompanyController = function($scope, $routeParams, partimeServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    toastServices.show();
    partimeServices.authenCompany({
        token: $scope.token
    }).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
        	$scope.is_authen = $routeParams.is_authen;
        	$scope.result = data;
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
}
