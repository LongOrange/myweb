/**
 * Created by Administrator on 2017/1/12.
 */
'use strict';
;
(function(){
    var app=angular.module('mySpaceApp',[]);

    app.controller('spaceCtrl',['$scope','$http',function($scope,$http){
        var pro=$http.get('data/nav.json',{cache:true});
        console.log(pro);
        pro.then(function(rep){
            console.log(rep);
            $scope.navs=rep.data;
        },function(rep){
            console.log(rep)
        });

        var intro=$http({
            method:'GET',
            url:'data/intro.json'
        });
        intro.then(function(data,status,config){
            console.log(data.data.intro);
            $scope.intros=data.data.intro;
        },function(data,status,config){
            console.log(data+" "+status);
        });
        console.log(intro);
    }])
})();