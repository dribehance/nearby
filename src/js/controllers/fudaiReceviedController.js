// by dribehance <dribehance.kksdapp.com>
var fudaiReceivedController = function($scope, $location, $routeParams, bonusServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    $scope.fudai_received = [];
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
        bonusServices.queryReceivedFudai($scope.page).then(function(data) {
            toastServices.hide();
            $scope.page.message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.total_bonus_amount = data.userBonusCount;
                $scope.total_bonus_money = data.userBonusTotalMoney;
                $scope.fudai_received = $scope.fudai_received.concat(data.result.list);
                $scope.no_more = $scope.fudai_received.length == data.result.totalRow ? true : false;
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
    $scope.queryPaidBonus = function() {
        $location.path("/fudai/willing").search({
            token: $scope.token
        }).replace()
    }
    $scope.imageview_src = "../images/bonus_bg.png";
}