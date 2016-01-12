'use strict';

angular.module('myApp.customers', ['ngRoute', 'ui.bootstrap'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view3', {
                    templateUrl: 'view3/view3.html',
                    controller: 'CustomersCtrl'
                });
            }])

        .controller('CustomersCtrl', ["$scope", "$http", function ($scope, $http) {
                $scope.customers = [];
                $scope.nbFormElement = 5;
                $scope.customer = [];
                $scope.progressBarValue = 0;
                $scope.currentPage = 1;
                $scope.itemsPerPage = 4;
                $scope.maxSize = 10; //Number of pager buttons to show

                $http.get("customers.json").success(function (data) {
                    $scope.customers = data;
                    $scope.totalItems = $scope.customers.length;

                });
                $scope.setPage = function (pageNo) {
                    $scope.currentPage = pageNo;
                };

                $scope.setItemsPerPage = function (num) {
                    $scope.itemsPerPage = num;
                    $scope.currentPage = 1; //reset to first paghe
                };
                $scope.success = {
                    show: false,
                    value: "",
                    msg: ""
                };

                $scope.add = function () {
                    $scope.customer.picture = "./assets/img/head.jpg";
                    $scope.customers.push($scope.customer);
                    $scope.success.show = true;
                    $scope.success.value = "success";
                    $scope.success.msg = "success";
                    $scope.totalItems++;
                    $scope.progressBarValue = 0;
                    $scope.customer = undefined;
                };
                $scope.updateProgressBar = function () {
                    $scope.progressBarValue = 0;
                    $scope.success.show = false;
                    for (var key in $scope.customer) {
                        if ($scope.customer[key] !== undefined) {
                            $scope.progressBarValue += 100 / $scope.nbFormElement;
                        }
                    }
                };

            }]);