/**
 * @see http://forum.ionicframework.com/t/how-can-i-use-ionichistory-to-go-back-2-views/16176/8
 */
// 用于控制多入口的浏览跳转
angular.module('app').factory('locationJump', function($state, $ionicHistory){

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
