// by dribehance <dribehance.kksdapp.com>
var bonusPaidController = function($scope, $routeParams, $location, bonusServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    $scope.bonus_paid = [];
    $scope.page = {
        token: $scope.token,
        pageNumber: 1,
        pageSize: 10,
        message: "点击加载更多"
    }
    $scope.loadMore = function() {
        if ($scope.no_more) {
            return;
        }
        toastServices.show();
        $scope.page.message = "正在加载...";
        bonusServices.queryPaidBonus($scope.page).then(function(data) {
            toastServices.hide();
            $scope.page.message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.bonus_paid = $scope.bonus_paid.concat(data.result.list);
                $scope.no_more = $scope.bonus_paid.length == data.result.totalRow ? true : false;
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
    $scope.queryReceivedBonus = function() {
        $location.path("/bonus/received").search({
            token: $routeParams.token
        }).replace();
    }
    $scope.imageview_src = "../images/bonus_bg.png";
}
