// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby").factory("bonusServices", function($http, config) {
    return {
        queryBonus: function(input) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/bonusList",
                method: "GET",
                params: angular.extend({}, config.common_params, input)
            }).then(function(data) {
                return data.data;
            });
        },
        envelopeBonus: function(input) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/getBonus",
                method: "GET",
                params: angular.extend({}, config.common_params, input)
            }).then(function(data) {
                return data.data;
            });
        },
        queryPaidBonus: function(input) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/postBonusRecord",
                method: "GET",
                params: angular.extend({}, config.common_params, input)
            }).then(function(data) {
                return data.data;
            });
        },
        queryReceivedBonus: function(input) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/getBonusRecord",
                method: "GET",
                params: angular.extend({}, config.common_params, input)
            }).then(function(data) {
                return data.data;
            });
        },
        queryReceivedFudai: function(input) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/JubaopanManage/getBonusRecord",
                method: "GET",
                params: angular.extend({}, config.common_params, input)
            }).then(function(data) {
                return data.data;
            });
        },
        queryWillingFudai: function(input) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/JubaopanManage/postBonusRecord",
                method: "GET",
                params: angular.extend({}, config.common_params, input)
            }).then(function(data) {
                return data.data;
            });
        }
    }
});