app.controller('mydiaCtrl', function($scope, $http){
    $scope.dsTinTuc = [];
    $http.get("data.json").then(
        function(res){  //thành công
            $scope.dsTinTuc = res.data;
        },
        function(res){ // thất bại

        }
    )
});