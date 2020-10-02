var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('DemoListadoCtrl', ['$scope', '$http', function ($scope, $http) {
    function cargarData() {
        $http.get('http://dummy.restapiexample.com/api/v1/employees').then(function (r) {
            $scope.empleados = r.data.data;
        })
    }

    cargarData();

    $scope.registrar = function () {
        var data = {
            employee_name: $scope.nombre,
            employee_age: $scope.edad,
            employee_salary: $scope.salario,
            
        };

        $http.post('http://dummy.restapiexample.com/api/v1/create', data).then(function (r) {
            //cargarData();
            
            $scope.nombre = null;
            $scope.edad = null;
            $scope.salario = null;
            
        })
    }

    $scope.retirar = function (id) {
        if (confirm('¿Estas seguro de eliminar esta publicación?')) {
            $http.delete('http://dummy.restapiexample.com/api/v1/delete/' + id).then(function (r) {
                //cargarData();
            })
        }
    }
}]);

demoControllers.controller('DemoVerCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('http://dummy.restapiexample.com/api/v1/employee/' + $routeParams.id).then(function (r) {
        $scope.empleados = r.data.data;
    })
}]);