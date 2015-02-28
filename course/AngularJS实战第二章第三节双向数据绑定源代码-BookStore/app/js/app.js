var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives','ngCookies'
]);

bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list', {
        templateUrl: 'tpls/bookList.html',
        controller: 'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});

bookStoreApp.run(['$rootScope', '$window', '$location', '$log', '$cookieStore',function ($rootScope, $window, $location, $log, $cookieStore) {  
    var locationChangeStartOff = $rootScope.$on('$locationChangeStart', locationChangeStart);  
    var locationChangeSuccessOff = $rootScope.$on('$locationChangeSuccess', locationChangeSuccess); 

    // var routeChangeStartOff = $rootScope.$on('$routeChangeStart', routeChangeStart);  
    // var routeChangeSuccessOff = $rootScope.$on('$routeChangeSuccess', routeChangeSuccess);  
  
    function locationChangeStart(event) {  
       $cookieStore.put('name','free');

        $log.log('locationChangeStart');
        // $log.log(arguments);  
    }  
  
    function locationChangeSuccess(event) {  
        $log.log('locationChangeSuccess');  
        // $log.log(arguments);  
    } 

    // function routeChangeStart(event) {  
    //     $log.log('routeChangeStart');  
    //     $log.log(arguments);  
    // }  
  
    // function routeChangeSuccess(event) {  
    //     $log.log('routeChangeSuccess');  
    //     $log.log(arguments);  
    // }  
}]); 
