// by dribehance <dribehance.kksdapp.com>
var managementInfoController = function($scope,$routeParams,infoServices, platformServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    toastServices.show();
    infoServices.queryById({
        token:$scope.token,
        info_id:$routeParams.info_id,
        user_latitude:$routeParams.user_latitude,
        user_longitude:$routeParams.user_longitude
    }).then(function(data){
        toastServices.hide()
        if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.result = data;    
        }
        else {
            errorServices.autoHide("服务器错误");
        }
    })
    $scope.save = function() {
        toastServices.show();
        infoServices.save({
            token:$scope.token,
            info_id:$routeParams.info_id
        }).then(function(data){
            toastServices.hide()
            if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.result.is_collect = 1;
                errorServices.autoHide(data.message);        
            }
            else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
    $scope.unsave = function() {
        toastServices.show();
        infoServices.unsave({
            token:$scope.token,
            info_id:$routeParams.info_id
        }).then(function(data){
            toastServices.hide()
            if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.result.is_collect = 0;
                errorServices.autoHide(data.message)        
            }
            else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
    $scope.dial = function () {
    	platformServices.dial();
    }
    $scope.getLocation = function() {
        platformServices.getLocation();
    }
    $scope.editInfo = function() {
        platformServices.editInfo();
    }
}
