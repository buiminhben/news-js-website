app.controller('detailCtrl', function($scope,$rootScope, $routeParams){
    $rootScope.background = 'text-bg-ligt';
    $scope.tintuc = {};
    for(var i=0; i<$scope.dsTinTuc.length; i++){
        if($scope.dsTinTuc[i].id== $routeParams.id){
            $scope.tintuc = $scope.dsTinTuc[i];
            break;
        }
    }
    $scope.renderStar = function(number){
        var codeStar = '';
        for(var i=0; i<number;i++){
            codeStar += `<i class="fa-solid fa-star"></i>`;
        }
        for(var i=0; i<5-number;i++){
            codeStar += `<i class="fa-regular fa-star"></i>`;
        }
        return codeStar;
    }
    $scope.saoDangChon = 0;
    $scope.saoDuocChon = 0;
    $scope.noiDungDanhGia = '';
    $scope.luuDanhGia = function(){
        $scope.tintuc.comments.unshift({
          
            "user": {
                "id":1,
                "fullname": "Bùi Minh Quân",
                "avatar": "GettyImages-615818598.avif"
            },
            "date":new Date().toLocaleString('sv-SE'),
            "content":   $scope.noiDungDanhGia ,
            "star": $scope.saoDuocChon,
            "like":0
        });
        $scope.saoDuocChon = 0;
        $scope.noiDungDanhGia = '';
        document.querySelector('#close-modal').click();
    }
});