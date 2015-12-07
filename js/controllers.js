angular.module('starter.controllers', [])

.controller('TabCtrl', function($scope, $ionicTabsDelegate, $ionicModal, $ionicTabsDelegate, $timeout,$ionicPopup) {
  $scope.selectTabWithIndex = function(index) {
    // $ionicTabsDelegate.select(index);
  }
  // 登录注册窗口
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.doLogin = function() {
    localStorage.token="aaaaa"
    $scope.modal.hide();
      // 一个提示对话框
   var alertPopup = $ionicPopup.alert({
       title: 'login',
       template: '登陆成功'
     });
    
      $timeout(function() {
      alertPopup.close(); //由于某种原因3秒后关闭弹出
   }, 1000);
    
  };

  
 

  // 财富首页
  $ionicModal.fromTemplateUrl('templates/tab-wealth.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.wealthModal = modal;
  });

  // test modald
  $scope.login = function() {
    if(localStorage.token=="" ||  localStorage.token==undefined){
          $scope.modal.show();
    }else{
          window.location.href="#/tab/wealth";
         }
  };

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
})

.controller('HomeCtrl', function($scope, $rootScope, $ionicModal, $timeout, $ionicTabsDelegate, $ionicHistory, products,$ionicPopup) {
  $scope.products = products;

  // alert($ionicHistory.currentHistoryId());

  // 登录注册窗口
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // test modald
  $scope.login = function() {
    //alert(localStorage.token);
    if(localStorage.token=="" || localStorage.token==undefined){
          $scope.modal.show();
    }else {
      alert("已经成功登陆");
    }
  };
  // 点击登录
  $scope.doLogin = function() {
    localStorage.token="aaaaa"
    $scope.modal.hide();
      // 一个提示对话框
   var alertPopup = $ionicPopup.alert({
       title: 'login',
       template: '登陆成功'
     });
    
      $timeout(function() {
      alertPopup.close(); //1秒后关闭弹出
   }, 1000);
 
    
  };


  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };


  // 手机专享
  $ionicModal.fromTemplateUrl('templates/home/mobileExclusive.html', {
    scope: $scope,
  }).then(function(modal) {
    $scope.mobileEx = modal;
  });

  // test modald
  $scope.showMobileEx = function() {
    $scope.mobileEx.show();
  };

  // Triggered in the login modal to close it
  $scope.closeMobileEx = function() {
    $scope.mobileEx.hide();
  };

  // 邀请好友
  $ionicModal.fromTemplateUrl('templates/share.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.shareModal = modal;
  });

  // 邀请好友页面
  $scope.showShare = function() {
    if(localStorage.token=="" ||  localStorage.token==undefined){
      $scope.modal.show();
    }else{
        $scope.shareModal.show();
    }
  
  };

  // 关闭邀请好友
  $scope.closeShare = function() {
    $scope.shareModal.hide();
  };

  // Triggered in the login modal to close it
  $scope.doRefresh = function() {
    $scope.$broadcast('scroll.refreshComplete');
  };

})

// 投资首页
.controller('InvestCtrl', function($scope, products) {
  $scope.products = products;
})

// 投资》存续期列表
.controller('DurationListCtrl', function($scope, products) {
  $scope.products = products;
})

// 投资》存续期产品详情
.controller('DurationInfoCtrl', function($scope, $ionicModal,$ionicPopup, products,Chats) {
  $scope.products = products;

  // 舆情分析详细页
  $ionicModal.fromTemplateUrl('templates/sentiment-content.html', {
    scope: $scope,
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // test modald
  $scope.showNews = function() {
    $scope.modal.show();
  };

  // Triggered in the login modal to close it
  $scope.closeNews = function() {
    $scope.modal.hide();
  };


    // 查看专家点评
    $scope.showAlert1 = function() {
       var alertPopup = $ionicPopup.alert({
         title: '专家机构点评',
         template: '<div class="consultant-box"><img src="img/icon-user-01.png"><hr>本产品本息覆盖率10倍以上，抵押物价值充足，融资方将该项目股权100%质押给信托公司，并由信托公司对资金使用进行监管，保障及风控措施充分，安全边际较高。<br/><p>了解产品产品详情请查看：产品H5说明、信托合同、信托计划书</p></div>'
       });
       alertPopup.then(function(res) {
         console.log('Thank you for not eating my delicious ice cream cone');
       });
     };

    // 查看专家点评
    $scope.showAlert2 = function() {
       var alertPopup = $ionicPopup.alert({
         title: '可交易市场列表',
         template: '<div class="consultant-box"><ul><li>大连金融资产交易所</li><li>安徽省金融资产交易所</li><li>武汉金融资产交易所</li><li>浙江金融资产交易中心</li></ul></div>'
       });
       alertPopup.then(function(res) {
         console.log('Thank you for not eating my delicious ice cream cone');
       });
     };



  $scope.openH5 = function(){
    window.open('http://viewer.maka.im/k/SHS6B8YH?from=message&isappinstalled=0', '_blank', 'location=no');
  }


  // 标签切换
  $scope.tab = [true,false,false];

  $scope.tabs = function(i){
    switch(i)
    {
    case 1:
      $scope.tab = [true,false,false];
      break;
    case 2:
      $scope.tab = [false,true,false];
      break;
    case 3:
      $scope.tab = [false,false,true];
      break;
    default:
      $scope.tab = [true,false,false];
    }
  }

  $scope.option0 = Chats.op1;
  $scope.option = Chats.op2;
  $scope.option1 = Chats.op3;
  $scope.option2 = Chats.op4;


})

// 我的资产》持有中的产品
.controller('MyWealthInfoCtrl', function($scope,Chats) {
  // 标签切换
  $scope.tab = [true,false,false];

  $scope.tabs = function(i){
    switch(i)
    {
    case 1:
      $scope.tab = [true,false,false];
      break;
    case 2:
      $scope.tab = [false,true,false];
      break;
    case 3:
      $scope.tab = [false,false,true];
      break;
    default:
      $scope.tab = [true,false,false];
    }
  }

  $scope.option2 = Chats.op4;

})

.controller('ExpertCtrl', function($scope) {

})


.controller('PinfoCtrl', function($scope, $ionicPopup, $rootScope, $ionicHistory,products) {

 $scope.products = products;
  // alert($ionicHistory.currentHistoryId());

  $scope.openH5 = function(){
    window.open('http://viewer.maka.im/k/SHS6B8YH?from=message&isappinstalled=0', '_blank', 'location=no');
  };
  $scope.submitMessage = function(){
    if(localStorage.token=="" || localStorage.token==undefined){
      $scope.modal.show();
    }else {
      alert("提交留言成功");
    }
  };

  $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: '信托经理介绍',
       template: '<div class="consultant-box"><img style="float: left;" src="img/icon-user-01.png"><span>工商管理硕士，多年金融投资经验，熟悉信托产品，精通资产管理和资产配置。理财风格倾向于稳健中追求高收益，帮助客户轻松投资实现最大化。</span><hr><h4 class="font-green">过往项目<h4><ul class="jingli"><li>拥有15年证券从业经历。通过他的积极管理，东新公司在过去4年较为恶劣的市场环境中，仍然获得了及其良好的全球投资表现</li><li>重庆经济广播电台、重庆有限电视台等重庆多家主流媒体理财栏目的特邀嘉宾和金融理财专业顾问</li><li>经历三</li><ul></div>'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

})

.controller('PindexCtrl', function($scope,$ionicHistory,$ionicNavBarDelegate,$ionicModal,$ionicPopup,Chats) {

  $ionicNavBarDelegate.showBackButton(true);
  // alert($ionicHistory.currentHistoryId());

  // 舆情分析详细页
  $ionicModal.fromTemplateUrl('templates/sentiment-content.html', {
    scope: $scope,
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // test modald
  $scope.showNews = function() {
    $scope.modal.show();
  };

  // Triggered in the login modal to close it
  $scope.closeNews = function() {
    $scope.modal.hide();
  };


  // 查看专家点评
  $scope.showAlert1 = function() {
     var alertPopup = $ionicPopup.alert({
       title: '专家机构点评',
       template: '<div class="consultant-box"><img src="img/icon-user-01.png"><hr>本产品本息覆盖率10倍以上，抵押物价值充足，融资方将该项目股权100%质押给信托公司，并由信托公司对资金使用进行监管，保障及风控措施充分，安全边际较高。<br/>了解产品详情清产看产品H5说明、信托合同、信托计划书</div>'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

  // 查看专家点评
  $scope.showAlert2 = function() {
     var alertPopup = $ionicPopup.alert({
       title: '可交易市场列表',
       template: '<div class="consultant-box"><ul><li>大连金融资产交易所</li><li>安徽省金融资产交易所</li><li>武汉金融资产交易所</li><li>浙江金融资产交易中心</li></ul></div>'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };


  // 调用填出H5
  $scope.openH5 = function(){
    var ref = window.open('http://viewer.maka.im/k/SHS6B8YH?from=message&isappinstalled=0', '_blank', 'location=no,closebuttoncaption=换回应用,toolbarposition=top')
    .addEventListener('loadstart', function() {
        ref.executeSript({
          code: "alert('页面加载成功拉！');"
        });
    });
  };

  //产品安全性提问

  $scope.Safetyconsultation = function() {
    var html =''
    html += '<div class="consultant-box">';
    html += '<textarea class="Htextarea" placeholder="请输入你的问题"></textarea>';
    html += '<div class="list">';
      html += '<label class="item item-radio">';
        html += '<input type="radio" name="group">';
        html += '<div class="radio-content">';
        html += '<div class="item-content">常见问题1</div>';
        html += '<i class="radio-icon ion-checkmark"></i>';
        html += '</div>';
      html += '</label>';
    html += '<label class="item item-radio">';
    html += '<input type="radio" name="group">';
    html += '<div class="radio-content">';
    html += '<div class="item-content">常见问题2</div>';
    html += '<i class="radio-icon ion-checkmark"></i>';
    html += '</div>';
    html += '</label>';
    html += '</div>';

    html += '</div>';
    var alertPopup = $ionicPopup.alert({
      title: '产品安全性提问',
      template: html,
      subTitle: '', // String (可选)。弹窗的子标题。
      okText: '提交', // String (默认: 'OK')。OK按钮的文字。
      okType: '', // String (默认: 'button-positive')。OK按钮的类型。

    });
    alertPopup.then(function(res) {
      console.log('安全性问题提问');
    });
  };


  // 标签切换
  $scope.tab = [true,false,false,false];

  $scope.tabs = function(i){
    switch(i)
    {
    case 1:
      $scope.tab = [true,false,false,false];
      break;
    case 2:
      $scope.tab = [false,true,false,false];
      break;
    case 3:
      $scope.tab = [false,false,true,false];
      break;
    case 4:
      $scope.tab = [false,false,false,true];
      break;
    default:
      $scope.tab = [true,false,false,false];
    }
  }

  $scope.option0 = Chats.op1;
  $scope.option = Chats.op2;
  $scope.option1 = Chats.op3;
  $scope.option2 = Chats.op4;

})

.controller('Pindex2Ctrl', function($scope) {
  // 废弃
})

// 舆情分析列表
.controller('SentimentCtrl', function($scope) {

})

// 我的财富首页
.controller('WealthCtrl', function($scope,$state,$ionicModal) {

  $scope.myWealthList = function(tabId){
    $state.go('tab.myWealthList',{
      tabId:tabId
    });
  }
  $scope.myGiftPack = function(){
    $state.go('tab.myGiftPack');
  }


    // 邀请好友
    $ionicModal.fromTemplateUrl('templates/share.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.shareModal = modal;
    });

    // 邀请好友页面
    $scope.showShare = function() {
      $scope.shareModal.show();
    };
    // 关闭邀请好友
    $scope.closeShare = function() {
      $scope.shareModal.hide();
    };



})

// 我的财富列表，包括：持有中、可变现、历史产品、我的预约
.controller('MyWealthCtrl', function($scope,$stateParams,products) {

  $scope.tabId = $stateParams.tabId;
  $scope.products = products;

  // 标签切换
  $scope.tab = [true,false,false,false];
  $scope.tabs = function(i){
    switch(i)
    {
    case '1':
      $scope.tab = [true,false,false,false];
      break;
    case '2':
      $scope.tab = [false,true,false,false];
      break;
    case '3':
      $scope.tab = [false,false,true,false];
      break;
    case '4':
      $scope.tab = [false,false,false,true];
      break;
    default:
      $scope.tab = [true,false,false,false];
    }
  }

  $scope.tabs($scope.tabId);
})

// 变现页面
.controller('MyWealthCashCtrl', function($scope) {

})
// 变现里程碑
.controller('MyWealthCashingCtrl', function($scope) {

})
// 我的礼包
.controller('MyGiftPackCtrl', function($scope) {

})

// 更多首页
.controller('MoreCtrl', function($scope) {

})

.controller('PtestCtrl', function($scope) {

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('TestCtrl',function($scope){
  $scope.doSomething=function(){

  }
});

















