angular.module('todoApp.services', [])
	  .factory('Grades', ['$http', 
	  	function($http){
  		  return{
  		  	
		  	getData:function(callback){
		  		$http.get('/get') // get data after deleted
		  	  	 .success(function(data){
		  	  	 	callback(data);
		  	  	 });
		  	},

		  //--------------------------------------------------------------------------------------------------

			gradeDelete:function(id,callback){
	  			$http.get('/delete/'+id)
	  	  	   	.success(function(data){
	  	  	   	 	callback(data);
	  	  	   	});
	  	  	},

	  	  //--------------------------------------------------------------------------------------------------

		  	addGrade:function(s_no, s_name, s_credit, s_grade, callback){
		  		var dataSubject = {
		  	  		no : s_no,
		  	  		subject : s_name,
		  	  		credit : s_credit,
		  	  		grade : s_grade
		  	  	};

		  	  	$http.get('/insertSubject',{params:dataSubject})
		  	  	.success(function(data){
		  	  			callback(data);
		  	  		});
		  	},

		  //--------------------------------------------------------------------------------------------------

		  	edit:function(grade, callback){
		  		$http.get('/editSubject/'+grade._id,{params:grade})
		  	  	.success(function(data){
		  	  		callback(data);
		  	  	});				  	
		  	}

		  //--------------------------------------------------------------------------------------------------

		  }
	}
]);