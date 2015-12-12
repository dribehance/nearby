// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby").factory("billServices",function($http,config){
	return {
		queryByType:function(input){
			// input->token
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/UserCenter/chargeLog",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		}
	}
});