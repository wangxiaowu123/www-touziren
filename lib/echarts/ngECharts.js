angular.module('ngEcharts', [])
.constant('defaultId', 'echart')
.service('ec', ['defaultId','$http', function (defId,$http) {
    this.charts = {};
    this.getInstance = function (id) {
        var chart = this.charts[id ? id : defId];
        return chart ? chart.instance : undefined;
    };
    this.getOption = function(id){
        var chart = this.charts[id ? id : defId];
        return chart ? chart.option : undefined;
    };
    this.clear = function(){
        angular.forEach(this.charts, function(obj,id){
            obj.instance.dispose();
        });
        this.charts = {};
    };
}])
.directive('echarts', ['ec', 'defaultId', function (ec, defId) {
    return {
        restrict: 'EA',
        template:'<div ng-style={height:height,width:width}></div>',
        replace: true,
        scope:{
            option:'=',
            width:'@',
            height:'@'
        },
        link: function(scope, iElement, iAttrs) {
            var ele = iElement[0],
                id = iAttrs.id || defId;
            if(scope.height){
                ele.style.height = scope.height;
            }
            if(scope.width){
                ele.style.width = scope.width;
            }

            function init(){
                if(!ec.charts[id]){
                    ec.charts[id] = {"instance": echarts.init(ele)};
                }
            };

            function update(newOption){
                if(newOption){
                    var option = angular.copy(newOption);
                    option.id = id;

                    ec.charts[id].option = option;
                    ec.getInstance(id).clear();
                    ec.getInstance(id).setOption(option,true);
                }
            };

            init();

            scope.$watch("option",function(newVal,oldVal){
                update(newVal);
            },true);

            // ng-switch,ng-if会销毁$scope，销毁时需要清空ec
            scope.$on("$destroy",function(){
                ec.clear();
            });
        }
    }
}]);