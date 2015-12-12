// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby").factory("pingServices",function($http,config){
	return {
		queryById:function(input){
			// input->token,driver_publish_id
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/Pingche/pingcheListDetails",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		},
		save:function(input) {
			// input->token,driver_publish_id
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/Pingche/collect",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		},
		unsave:function(input) {
			// input->token,driver_publish_id
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/Pingche/uncollect",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		}
	}
});