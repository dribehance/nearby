// by dribehance <dribehance.kksdapp.com>
var pingController = function($scope, $routeParams,platformServices, pingServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    toastServices.show();
    pingServices.queryById({
        token: $scope.token,
        driver_publish_id: $routeParams.driver_publish_id
    }).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.result = data;
        } else {
            errorServices.autoHide("服务器错误");
        }
    });
    $scope.save = function() {
        toastServices.show();
        pingServices.save({
            token: $scope.token,
            driver_publish_id: $routeParams.driver_publish_id
        }).then(function(data) {
            toastServices.hide()
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.result.driver.is_collect = 1;
                errorServices.autoHide(data.message);
            } else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
    $scope.unsave = function() {
        toastServices.show();
        pingServices.unsave({
            token: $scope.token,
            driver_publish_id: $routeParams.driver_publish_id
        }).then(function(data) {
            toastServices.hide()
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.result.driver.is_collect = 0;
                errorServices.autoHide(data.message)
            } else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
    $scope.dial = function() {
        platformServices.dial({
            telephone: $scope.result.driver.telephone
        });
    }
    $scope.getLocation = function() {
        platformServices.getLocation($scope.result);
    }
    $scope.share = function() {
        platformServices.share($scope.result);
    }
}
