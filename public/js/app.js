angular.module('seattleApp', ['uiGmapgoogle-maps'])

.controller('myCtrl', ['$scope', '$http', function($scope, $http){

//-----------------------------map-----------------------------
  $scope.map = { center: { latitude: 47.606, longitude: -122.332 }, zoom: 14 };
//-------------------------------------------------------------

    // $http.get('https://data.seattle.gov/resource/pe9t-raai.json', {})
    // .then(function success(res){
    //     console.log(res);
    //     $scope.results = res.data.data;

    // }, function error(res){

    //   console.log(res);
    // });

}]);