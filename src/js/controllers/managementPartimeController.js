// by dribehance <dribehance.kksdapp.com>
var managementPartimeController = function($scope,$routeParams,partimeServices,platformServices, errorServices, toastServices, localStorageService, config) {
	$scope.token = $routeParams.token;
    toastServices.show();
    partimeServices.queryById({
        token:$scope.token,
        job_id:$routeParams.job_id
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
        partimeServices.save({
            token:$scope.token,
            job_id:$routeParams.job_id
        }).then(function(data){
            toastServices.hide()
            if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            	$scope.result.is_job_collect = 1;
                errorServices.autoHide(data.message);
                platformServices.save({
                    id:$routeParams.job_id
                })      
            }
            else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
    $scope.unsave = function() {
        toastServices.show();
        partimeServices.unsave({
            token:$scope.token,
            job_id:$routeParams.job_id
        }).then(function(data){
            toastServices.hide()
            if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
               	$scope.result.is_job_collect = 0;
                errorServices.autoHide(data.message);
                platformServices.unsave({
                    id:$routeParams.job_id
                })      
            }
            else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
    $scope.dial = function () {
        platformServices.dial({
            telephone:$scope.result.company.telephone
        });
    }
    $scope.getLocation = function() {
        platformServices.getLocation({
            latitude: $scope.result.job.latitude,
            longitude: $scope.result.job.longitude,
            address: $scope.result.job.street,
        });
    }
    $scope.editPartime = function() {
        platformServices.editPartime();
    }
}
