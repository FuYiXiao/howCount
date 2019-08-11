require([

	//沪深300指数基金
	"./zhishujijin/HuSheng300Lof.js",

	//泰康15
	"./dingtou/taikang15.js",

    //泰康29
    "./dingtou/taikang29.js",

    //长江养老添年享
    "./dingtou/changjiang369.js",

    //长江养老半年享
    "./dingtou/changjiang180.js",

    //安邦31天
    "./dingtou/anbang31.js",

    //易方达消费行业股票
    "./zhishujijin/yifangdaxiaofei.js",

    //前海开源工业4.0
    "./zhishujijin/qinghaigongye4.0.js",
    
    //前海开源祥和债券
    "./zhishujijin/qianhaizhaiquan.js",



	], 

    function (
    ) {

        // 最后的购买列表
        var ReslutList = [];

        // 名称列表
        var EchartNmame = [];

        // 处理数据
       for(var i =0; i< arguments.length ; i++){

            arguments[i].value = Math.floor(arguments[i].NianHuaLv * 100) / 100;
            arguments[i].label = {
                fontSize :'14'
            }
            if(arguments[i].hasEnd==true){
                arguments[i].label.backgroundColor='#336666'
            }

            ReslutList.push( arguments[i] );
       }
       // 数据排序
        ReslutList.sort(function(a, b) {  
            if(a["NianHuaLv"] > b["NianHuaLv"]) {      
                return 1;    
            } else if(a["NianHuaLv"] < b["NianHuaLv"]) {      
                return -1;    
            } else {      
                return 0;    
            }  
        })
        // 处理数据 添加名称
       for(var i =0; i< ReslutList.length ; i++){
            EchartNmame.push(ReslutList[i].name);
       }
        console.log(ReslutList);


        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['年化率']
            },
            xAxis: {
                data: EchartNmame
            },
            yAxis: {},
            series: [{
                name: '年化率',
                type: 'bar',
                data: ReslutList,
                label:{
                    show:true,
                    formatter:function(param){
                        console.log(param);
                        var returnData = param.value +'\n' +
                            '类型：'+param.data.type + '\n'  +
                            '本金：'+param.data.Startoney +'\n'  +
                            '结余：'+param.data.ResultMoney +'\n'  +
                            '天数：'+parseInt( param.data.costData ) +'\n' +
                            '信息：'+param.data.info ;
                        return returnData
                    }
                }
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);



















    }
); 




