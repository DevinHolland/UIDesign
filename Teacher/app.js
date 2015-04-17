/**
 * Created by Simon on 4/3/2015.
 */
angular.module('Teacher',['ui.bootstrap'])
.controller('MainCtrl', function($scope){
        $scope.assignments = [
            {title:'Assignment 1' , due : '02/01/2015' , points : '10' , submission:'#'},
            {title:'Assignment 2' , due : '02/23/2015' , points : '25' , submission:'#'},
            {title:'Assignment 3' , due : '03/18/2015' , points : '25' , submission:'#'},
            {title:'Assignment 4' , due : '04/01/2015' , points : '50' , submission:'#'}
        ] ;

        $scope.newAssignment = {};
        $scope.createAssignment = function (){
            $scope.newAssignment.submission = 'submission.html';
            console.log($scope.newAssignment);
            $scope.assignments.push($scope.newAssignment);
            $scope.newAssignment = {};
        }

    });