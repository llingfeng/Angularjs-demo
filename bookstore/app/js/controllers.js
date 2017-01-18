var bookStoreCtrls = angular.module('bookStoreCtrls',[]);

bookStoreCtrls.controller('HelloCtrl',function ($scope) {
    $scope.greeting = 'hello';
    $scope.pageClass="hello";
});

bookStoreCtrls.controller('BookListCtrl',function ($scope) {
    $scope.books = [
        {title:"《Ext江湖》",author:"大漠穷秋"},
        {title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
        {title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
    ];
    $scope.pageClass="list";
})