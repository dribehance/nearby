// by dribehance <dribehance.kksdapp.com>
var bonusController = function($scope, $location, $routeParams,bonusServices, platformServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    $scope.bonus_list = [];
    $scope.page = {
        token:$scope.token,
        pageSize: 10,
        pageNumber: 1,
        message: "点击加载更多"
    }
    $scope.loadMore = function() {
        if ($scope.no_more) {
            return;
        }
        toastServices.show();
        $scope.page.message = "正在加载...";
        bonusServices.queryBonus($scope.page).then(function(data) {
            toastServices.hide();
            $scope.page.message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.bonus_list = $scope.bonus_list.concat(data.result.list);
                $scope.no_more = $scope.bonus_list.length == data.result.totalRow ? true : false;
            } else {
                errorServices.autoHide("服务器错误");
            }
            if ($scope.no_more) {
                $scope.page.message = "没有了";
            }
            $scope.page.number++;
        })

    }
    $scope.loadMore();
    $scope.queryBonusRecords = function() {
        $location.path("/bonus/received").search({
            token: $scope.token
        })
    }
    $scope.envelopeBonus = function(user_bonus_id) {
        $location.path("/bonus/envelope").search({
            token: $scope.token,
            user_bonus_id: user_bonus_id
        });
    }
    $scope.sendBonus = function() {
        platformServices.sendBonus();
    }
    $scope.imageview_src = "../images/bonus_bg.png";
}
