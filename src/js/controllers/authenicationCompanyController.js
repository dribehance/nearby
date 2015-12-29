// by dribehance <dribehance.kksdapp.com>
var authenicationCompanyController = function($scope, $routeParams, partimeServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    $scope.is_authen = $routeParams.is_authen;
    toastServices.show();
    partimeServices.authenCompany({
        token: $scope.token,
        is_authen:$scope.is_authen
    }).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
        	$scope.result = data;
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
}
