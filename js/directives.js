angular.module('starter.directives', [])
.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$watch(attributes.hideTabs, function(value){
                $rootScope.hideTabs = value;
            });

            scope.$on('$destroy', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
})
.factory('locationJump', function($state, $ionicHistory){

  return {
    goBack: goBack
  };


  /**
   * 后退到历史记录
   * @param depth 后退层级
   */
  function goBack(depth){
    // get the right history stack based on the current view
    var historyId = $ionicHistory.currentHistoryId();
    var history = $ionicHistory.viewHistory().histories[historyId];
    // set the view 'depth' back in the stack as the back view
    // 当前历史记录可能不是最后一个 stack 需要纠正
    var totalHisLength = history.stack.length;
    var adjustLength = totalHisLength - 1 - history.cursor;
    var targetViewIndex = totalHisLength - 1 - depth - adjustLength;
    // remove history from stack
    for(var i = 0, l = depth + adjustLength; i < l ; i++){
      history.stack.pop();
    }
    $ionicHistory.backView(history.stack[targetViewIndex]);
    // navigate to it
    $ionicHistory.goBack();
  }

  //function Jumper(type){
  //  this.type = type;
  //}
});
