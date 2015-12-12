// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby").factory("partimeServices",function($http,config){
	return {
		queryById:function(input){
			// input->token,job_id
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/JobManage/jobDetails",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		},
		queryCompanyInfo:function(input) {
			// input->token,company_id
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/JobManage/companyInfo",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		},
		save:function(input) {
			// input->token,job_id
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/JobManage/collect",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		},
		unsave:function(input) {
			// input->token,job_id
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/JobManage/uncollect",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		},
		authenCompany:function(input) {
			// input->token
			return $http({
				// by dribehance <dribehance.kksdapp.com>
			    url: config.url + "/app/InfoManage/identityingCompany",
			    method: "GET",
			    params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
			    return data.data;
			});
		}
	}
});