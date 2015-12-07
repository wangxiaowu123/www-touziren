// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
  'starter.directives',
  'ngEcharts'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');


  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');

  // remove back button text completely
  $ionicConfigProvider.backButton.previousTitleText(false).text('');;



  // $ionicConfigProvider.views.swipeBackEnabled(false);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabCtrl'
  })

  // 首页
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  // 产品信息页
  .state('tab.home-pinfo', {
    url: '/home/pinfo',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-pinfo.html',
        controller: 'PinfoCtrl'
      }
    }
  })

  // 跑分第一页
  .state('tab.home-pindex', {
    url: '/home/pindex',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-pindex.html',
        controller: 'PindexCtrl'
      }
    }
  })

  // 跑分第二页
  .state('tab.home-pindex2', {
    url: '/home/pindex2',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-pindex2.html',
        controller: 'Pindex2Ctrl'
      }
    }
  })

  // 舆情分析列表
  .state('tab.home-sentiment', {
    url: '/home/sentiment',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-sentiment.html',
        controller: 'SentimentCtrl'
      }
    }
  })

  // 专家推荐
  .state('tab.home-expert', {
    url: '/home/expert',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-expert.html',
        controller: 'ExpertCtrl'
      }
    }
  })


  // 投资首页
  .state('tab.invest', {
    url: '/invest',
    views: {
      'tab-invest': {
        templateUrl: 'templates/tab-invest.html',
        controller: 'InvestCtrl'
      }
    }
  })

  // 投资详细页
  .state('tab.invest-pinfo', {
    url: '/invest/pinfo',
    views: {
      'tab-invest': {
        templateUrl: 'templates/tab-pinfo.html',
        controller: 'PinfoCtrl'
      }
    }
  })

  // 投资》存续期产品列表
  .state('tab.durationList', {
    url: '/invest/durationList',
    views: {
      'tab-invest': {
        templateUrl: 'templates/invest/durationList.html',
        controller: 'DurationListCtrl'
      }
    }
  })

  // 投资》存续期产品详情
  .state('tab.durationInfo', {
    url: '/invest/durationInfo',
    views: {
      'tab-invest': {
        templateUrl: 'templates/invest/durationInfo.html',
        controller: 'DurationInfoCtrl'
      }
    }
  })

  // 跑分第一页
  .state('tab.invest-pindex', {
    url: '/invest/pindex',
    views: {
      'tab-invest': {
        templateUrl: 'templates/tab-pindex.html',
        controller: 'PindexCtrl'
      }
    }
  })


  // 财富首页
  .state('tab.wealth', {
    url: '/wealth',
    views: {
      'tab-wealth': {
        templateUrl: 'templates/tab-wealth.html',
        controller: 'WealthCtrl'
      }
    }
  })

  // 财富》产品列表页面，包括：持有中、可变现、历史产品、我的预约
  .state('tab.myWealthList', {
    url: '/wealth/myWealth/:tabId',
    views: {
      'tab-wealth': {
        templateUrl: 'templates/wealth/myWealthList.html',
        controller: 'MyWealthCtrl'
      }
    }
  })

  // 财富》我的资产》持有中
  .state('tab.myWealthInfo', {
    url: '/wealth/myWealthInfo',
    views: {
      'tab-wealth': {
        templateUrl: 'templates/wealth/myWealthInfo.html',
        controller: 'MyWealthInfoCtrl'
      }
    }
  })

  // 财富》我的资产》变现
  .state('tab.myWealthCash', {
    url: '/wealth/myWealthCash',
    views: {
      'tab-wealth': {
        templateUrl: 'templates/wealth/myWealthCash.html',
        controller: 'MyWealthCashCtrl'
      }
    }
  })

  // 财富》我的资产》变现里程碑
  .state('tab.myWealthCashing', {
    url: '/wealth/myWealthCashing',
    views: {
      'tab-wealth': {
        templateUrl: 'templates/wealth/myWealthCashing.html',
        controller: 'MyWealthCashingCtrl'
      }
    }
  })
  // 财富》我的礼包
  .state('tab.myGiftPack', {
    url: '/wealth/myGiftPack',
    views: {
      'tab-wealth': {
        templateUrl: 'templates/wealth/myGiftPack.html',
        controller: 'MyGiftPackCtrl'
      }
    }
  })
  //更多
  .state('tab.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'templates/tab-more.html',
        controller: 'MoreCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

      .state('tab.more-test', {
        url: '/more/test',
        views: {
          'tab-more': {
            templateUrl: 'templates/tab-test.html',
            controller: 'TestCtrl'
          }
        }
      })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
