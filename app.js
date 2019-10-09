var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
    console.log("in my controller...")
    $scope.newUser = {};
    $scope.clickedUser = {};
    
    $scope.users = [
        {username: "Akter", email: "akterh627@gmail.com" },
        {username: "Akter", email: "akterh627@gmail.com",},
        {username: "Akter", email: "akterh627@gmail.com"}
    ];
    

    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
    };
    $scope.selectUser=function(user){
        console.log(user);
        $scope.clickedUser = user;  


    };
    $scope.updateUser=function(){

    };
    $scope.deleteUser =function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1)
    };

});