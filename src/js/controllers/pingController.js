// by dribehance <dribehance.kksdapp.com>
var pingController = function($scope, $routeParams, platformServices, pingServices, errorServices, toastServices, localStorageService, config) {
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
                platformServices.save({
                    id: $routeParams.driver_publish_id
                })
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
                platformServices.unsave({
                    id: $routeParams.driver_publish_id
                })
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
        platformServices.getLocation({
            from_latitude: $scope.result.driver.from_latitude,
            from_longitude: $scope.result.driver.from_longitude,
            from: $scope.result.driver.from_place,
            destination_latitude: $scope.result.driver.destination_latitude,
            destination_longitude: $scope.result.driver.destination_longitude,
            destination: $scope.result.driver.destination
        });
    }
    $scope.share = function() {
        platformServices.share({
            title: $scope.result.driver.from_place + $scope.result.driver.destination,
            content: $scope.result.driver.driver_name + $scope.result.driver.publish_date + "从" + $scope.result.driver.from_place + "到" + $scope.result.driver.destination,
            thumbnail: $scope.result.driver.images[0].image,
            other: $scope.result
        });
    }
}