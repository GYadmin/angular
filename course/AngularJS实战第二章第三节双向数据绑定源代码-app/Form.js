var userInfoModule = angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope){
        $scope.userInfo={
            email:"123@qq.com",
            password:"123",
            autoLogin:true
        };
        $scope.getFormData=function(){
            console.log($scope.userInfo);
        };
        $scope.setFormData=function(){
            $scope.userInfo={
                email:"345@qq.com",
                password:"4345",
                autoLogin:false
            }
        };
        $scope.resetForm=function(){
           $scope.userInfo={
                email:"123@qq.com",
                password:"123",
                autoLogin:true
            }; 
        }
}])
// var userInfoModule = angular.module('UserInfoModule', []);
// userInfoModule.controller('UserInfoCtrl', ['$scope',
//     function($scope) {
//         $scope.userInfo = {
//             email: "253445528@qq.com",
//             password: "253445528",
//             autoLogin: true
//         };
//         $scope.getFormData = function() {
//             console.log($scope.userInfo);
//         };
//         $scope.setFormData = function() {
//             $scope.userInfo = {
//                 email: 'damoqiongqiu@126.com',
//                 password: 'damoqiongqiu',
//                 autoLogin: false
//             }
//         };
//         $scope.resetForm = function() {
//             $scope.userInfo = {
//                 email: "253445528@qq.com",
//                 password: "253445528",
//                 autoLogin: true
//             };
//         }
//     }
// ])
