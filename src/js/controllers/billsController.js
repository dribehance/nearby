// by dribehance <dribehance.kksdapp.com>
var billsController = function($scope, $routeParams,SharedState, billServices, errorServices, toastServices, localStorageService, config) {
    $scope.token = $routeParams.token;
    $scope.bills = [];
    $scope.page = {
        token: $scope.token,
        type: 0,
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
        billServices.queryByType($scope.page).then(function(data) {
            toastServices.hide();
            $scope.page.message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.bills = $scope.bills.concat(data.result.list);
                $scope.no_more = $scope.bills.length == data.result.totalRow ? true : false;
            } else {
                errorServices.autoHide("服务器错误");
            }
            if ($scope.no_more) {
                $scope.page.message = "没有了";
            }
            $scope.page.number++;
        })

    }
    $scope.input = {};
    $scope.input.types = {
        "0": "全部",
        "1": "提现",
        "2": "充值",
        "3": "红包",
        "4": "推广收入",
        "5": "流量支出",
        "6": "其他(升级VIP)"

    }
    $scope.getType = function(type) {
        return $scope.input.types[type];
    }
    $scope.selectType = function(type) {
        SharedState.turnOff("bill_type_panel")
        $scope.input.type = type;
        $scope.bills = [];
        $scope.page = {
            token: $scope.token,
            type: type,
            pageNumber: 1,
            pageSize: 10,
            message: "点击加载更多"
        }
        $scope.no_more = false;
        $scope.loadMore();
    };
    $scope.loadMore();
}
