/**
 * Created by admin on 2016/12/28.
 */
var myModule = angular.module("MyModule",[]);

myModule.directive('hello',function () {
    return {
        template:'<div>hello world</div>'
    }
});