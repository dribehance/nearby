// by dribehance <dribehance.kksdapp.com>
var companyController = function($scope, $routeParams, $location, partimeServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    toastServices.show();
    partimeServices.queryCompanyInfo({
        token: $scope.token,
        company_id: $routeParams.company_id
    }).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.result = data;
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
    $scope.navToPartime = function() {
        $location.path("/partime").search({
            token: $scope.token,
            job_id: $routeParams.job_id
        }).replace()
    }
}
