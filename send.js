(function(){

	var send = function($http,$log){

		var good = function(response){
			$log.info('Call went through' );
		};

		var onError = function(response){
			$log.error(response.status);
			$log.error(response.statusText);
			$log.error(response.data);
		};

		var sendUser = function(user){
			return $http.post("http://localhost:8080/users", user)
			.then(good,onError);
		};

		var findUser = function(email){
			$log.info('looking for user ' +email)

			return $http.get("http://localhost:8080/users",
				)
		}

		/*
		@Important  - The service will not work if this section is not included.
		*/	
		return{     // Exports object service to the main angular app. 
			sendUser: sendUser //Function name to be exported 
		};	

	};
	var module = angular.module("mainApp"); //This should be the name of the main angular template 
	module.factory("send",send); // This should be 


}());