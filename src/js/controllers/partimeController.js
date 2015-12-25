// by dribehance <dribehance.kksdapp.com>
var partimeController = function($scope, $routeParams, $location, platformServices, partimeServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    toastServices.show();
    partimeServices.queryById({
        token: $scope.token,
        job_id: $routeParams.job_id
    }).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.result = data;
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
    $scope.save = function() {
        toastServices.show();
        partimeServices.save({
            token: $scope.token,
            job_id: $routeParams.job_id
        }).then(function(data) {
            toastServices.hide()
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.result.is_job_collect = 1;
                errorServices.autoHide(data.message);
            } else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
    $scope.unsave = function() {
        toastServices.show();
        partimeServices.unsave({
            token: $scope.token,
            job_id: $routeParams.job_id
        }).then(function(data) {
            toastServices.hide()
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.result.is_job_collect = 0;
                errorServices.autoHide(data.message)
            } else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
    $scope.navToCompany = function() {
        $location.path("partime/company").search("company_id", $scope.result.company.company_id).replace();
    }
    $scope.dial = function() {
        platformServices.dial({
            telephone: $scope.result.company.telephone
        });
    }
    $scope.getLocation = function() {
        platformServices.getLocation($scope.result);
    }
    $scope.share = function() {
        platformServices.share($scope.result);
    }
}
