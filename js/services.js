angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // 图表测试数据
  var labelTop = {
      normal : {
          label : {
              show : true,
              position : 'center',
              formatter : '{b}',
              textStyle: {
                  baseline : 'bottom',
                  color:'#4E7E82',
                  fontSize:12
              }
          },
          labelLine : {
              show : false
          },
          color:'#4E7E82'
      }
  };
  var labelTop2 = {
      normal : {
          label : {
              show : false,
              position : 'center',
              formatter : '{b}',
              textStyle: {
                  baseline : 'bottom',
                  color:'#4E7E82',
                  fontSize:12
              }
          },
          labelLine : {
              show : false
          },
          color:'#4E7E82'
      }
  };
  var labelFromatter = {
      normal : {
          label : {
              formatter : function (params){
                  return 100 - params.value + ''
              },
              textStyle: {
                  baseline : 'top',
                  fontSize:18
              }
          }
      },
  }
  var labelFromatter2 = {
      normal : {
          label : {
              formatter : function (params){
                  return 100 - params.value + ''
              },
              textStyle: {
                  baseline : '',
                  fontSize:38
              }
          }
      },
  }
  var labelBottom = {
      normal : {
          color: '#E6F2F2',
          label : {
              show : true,
              position : 'center'
          },
          labelLine : {
              show : false
          }
      },
      emphasis: {
          color: 'rgba(0,0,0,0)'
      }
  };
  var labelBottom2 = {
      normal : {
          color: '#E6F2F2',
          label : {
              show : true,
              position : 'center'
          },
          labelLine : {
              show : false
          }
      },
      emphasis: {
          color: 'rgba(0,0,0,0)'
      }
  };
  var radius = [40, 55];
  var radius2 = [60, 50];


  // 气泡图随机测试数据

  function random(){
      var r = parseFloat(Math.random()*33+65, 10).toFixed(1);
      // var r = Math.round(Math.random() * 100);
      // return (r * (r % 2 == 0 ? 1 : -1));
      return r;
  }

  function random2(){
      var r = parseFloat(Math.random()*2+7.5, 10).toFixed(1);
      // var r = Math.round(Math.random() * 12);
      // return (r * (r % 2 == 0 ? 1 : -1));
      return r;
  }

  function randomDataArray() {
      var d = [];
      var len = 100;
      while (len--) {
          d.push([
              random(),
              random2(),
              Math.abs(random()),
          ]);
      }
      //console.log(d);
      return d;
  }
    var labelFromatter = {
        normal : {
            label : {
                formatter : function (params){
                    return 100 - params.value + '%的产品'
                },
                textStyle: {
                    baseline : 'top'
                }
            }
        },
    };


  return {
    op1: {
      animation:false,
        legend: {
          show:false,
          data:[]
        },
        title : {
            show : false
        },
        toolbox: {
            show : false
        },
        series : [
            {
                type : 'pie',
                // center : ['10%', '30%'],
                radius : radius2,
                x: '0%', // for funnel
                itemStyle : labelFromatter2,
                data : [
                    {name:'other', value:8, itemStyle : labelBottom2},
                    {name:'', value:92, itemStyle : labelTop2}
                ]
            }
        ]
    },
    op2: {
      animation:false,
        title : {
          show:false,
            text: '预算 vs 开销（Budget vs spending）',
            subtext: '纯属虚构'
        },
        tooltip : {
          show : true,
            trigger: 'axis'
        },
        legend: {
          show : false,
            orient : 'vertical',
            x : 'right',
            y : 'bottom',
            data:['预算分配（Allocated Budget）','实际开销（Actual Spending）']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },

        polar : [
           {
               indicator : [
                   { text: '担保', max: 6000},
                   { text: '涉诉情况', max: 16000},
                   { text: '行业', max: 30000},
                   { text: '交易对手', max: 38000},
                   { text: '发行机构', max: 52000}
                ]
            }
        ],
        calculable : true,
        series : [
            {
                show:false,
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000],
                        name : '预算分配'
                    },
                     {
                        value : [5000, 14000, 28000, 31000, 42000],
                        name : '实际开销（Actual Spending）'
                    }
                ]
            }
        ]
    },
    op3: {
        animation:false,
        legend: {
          padding:0,
          show:false,
          data:[]
        },
        title : {
          padding:0,
            show : false
        },
        toolbox: {
          padding:100,
            show : false,
        },

        series : [
            {
                padding:10,
                type : 'pie',
                 //center : ['20%', '30%'],
                radius : radius,
                x: '10%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:46, itemStyle : labelBottom},
                    {name:'超过了市场', value:54, itemStyle : labelTop},
                ]
            }
        ]
    },
    op4: {
      animation:false,
      grid:{
        x:50,
        y:50,
        x2:50,
        y2:50
      },
      title : {
        show:false,
      },
      color:[
        '#F5A623','#2AB9A6'
      ],
      tooltip : {
        show:false,
      },
      legend: {

          y:'bottom',
          data:['竞品','本产品']
      },
      toolbox: {
          show : false,
      },
      xAxis : [
          {
              type : 'value',
              scale:true,
              axisLabel : {
                  formatter: '{value}'
              }
          }
      ],
      yAxis : [
          {
              type : 'value',
              scale:true,
              axisLabel : {
                  formatter: '{value} %'
              }
          }
      ],
      series : [
          {
              name:'竞品',
              type:'scatter',
              symbolSize: function (value){
                  return Math.round(value[0] / 20);
              },
              data: randomDataArray()
          },
          {
              name:'本产品',
              type:'scatter',
              symbolSize:10,
              symbol:'circle',
              data: [
                [95, 8.8],
              ],
          }
      ]
    }
  };
})

.factory('products', function(){

  var products = {
    banner:[
      {
        bannerId:     0,
        bannerImg:    "img/banner/banner01.jpg",
        bannerUrl:    "http://www.baidu.com",
        bannerTitle:  "测试banner01"
      },
      {
        bannerId:     1,
        bannerImg:    "img/banner/banner02.jpg",
        bannerUrl:    "http://www.baidu.com",
        bannerTitle:  "测试banner02"
      },
      {
        bannerId:     2,
        bannerImg:    "img/banner/banner03.jpg",
        bannerUrl:    "http://www.baidu.com",
        bannerTitle:  "测试banner03"
      },
    ],
    product:[
      {
        productId:              0,
        productName:            "神华保理1号集合资金信托计划",
        productYield:           8.5,
        productDeadline:        365,
        productIftransferable:  2,
        productProgress:        12
      },
      {
        productId:              1,
        productName:            "东胜投资集合资金信托计划0002",
        productYield:           7.8,
        productDeadline:        365,
        productIftransferable:  2,
        productProgress:        50
      },
      {
        productId:              2,
        productName:            "东胜投资集合资金信托计划0003",
        productYield:           7.8,
        productDeadline:        365,
        productIftransferable:  2,
        productProgress:        38
      },
    ],
    durationProduct:[
      {
        productId:              0,
        productName:            "盛德科技项目贷款集合资金信托计划",
        productYield:           10,
        productDeadline:        365,
        productIftransferable:  2,
        productProgress:        12,
        creationDate:           1420387200
      },
      {
        productId:              1,
        productName:            "哈克农装贷款项目集合资金信托计划",
        productYield:           11,
        productDeadline:        365,
        productIftransferable:  2,
        productProgress:        38,
        creationDate:           1418313600
      },
      {
        productId:              2,
        productName:            "金鑫利粮储贷款项目集合资金信托计划",
        productYield:           11,
        productDeadline:        365,
        productIftransferable:  2,
        productProgress:        38,
        creationDate:           1418572800
      },
    ],
    myProduct:[
      {
        productId:              0,
        productName:            "盛德科技项目贷款集合资金信托计划",
        productYield:           10,
        productDeadline:        365,
        productIftransferable:  1,
        productProgress:        12,
        creationDate:           1420387200,
        holdShare:              1000000,
        historyProducts:        false
      },
      {
        productId:              1,
        productName:            "哈克农装贷款项目集合资金信托计划",
        productYield:           11,
        productDeadline:        365,
        productIftransferable:  2,
        productProgress:        38,
        creationDate:           1418313600,
        holdShare:              3000000,
        historyProducts:        false
      },
      {
        productId:              2,
        productName:            "金鑫利粮储贷款项目集合资金信托计划",
        productYield:           11,
        productDeadline:        365,
        productIftransferable:  2,
        productProgress:        38,
        creationDate:           1418572800,
        holdShare:              5000000,
        historyProducts:        false
      },
      {
        productId:              3,
        productName:            "渤融2号集合资金信托计划",
        productYield:           11,
        productDeadline:        365,
        productIftransferable:  1,
        productProgress:        38,
        creationDate:           1418313600,
        holdShare:              2000000,
        historyProducts:        false
      },
      {
        productId:              4,
        productName:            "渤融2号集合资金信托计划",
        productYield:           11,
        productDeadline:        365,
        productIftransferable:  1,
        productProgress:        38,
        creationDate:           1418313600,
        holdShare:              2000000,
        historyProducts:        true
      },
      {
        productId:              5,
        productName:            "渤融2号集合资金信托计划",
        productYield:           11,
        productDeadline:        365,
        productIftransferable:  1,
        productProgress:        38,
        creationDate:           1418313600,
        holdShare:              2000000,
        historyProducts:        true
      }
    ],
    reservationProduct:[
      {
        productId:              0,
        productName:            "康谷国药系列集合资金信托计划",
        productYield:           11,
        productDeadline:        365,
        productIftransferable:  1,
        productProgress:        38,
        creationDate:           1418313600,
        holdShare:              2000000,
        historyProducts:        false
      }
    ]
  };
  return products;
});
