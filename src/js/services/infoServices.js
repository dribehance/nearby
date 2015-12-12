// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby").factory("infoServices",function($http,config){
	return {
		queryById:function(input){
			// input->info_id,user_latitude,user_longitude
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/InfoManage/details",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		},
		manageById:function(input){
			// same as queryInfoById
			// input->info_id,user_latitude,user_longitude
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/InfoManage/details",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		},
		save:function(input) {
			// input->token,info_id
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/InfoManage/collect",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		},
		unsave:function(input) {
			// input->token,info_id
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/InfoManage/uncollect",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		}
	}
});