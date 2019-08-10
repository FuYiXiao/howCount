require([

	//沪深300指数基金
	"./zhishujijin/HuSheng300Lof.js",

	//泰康15
	"./dingtou/taikang15.js",

    //泰康29
    "./dingtou/taikang29.js",

	], 

    function (
    ) {


        var ReslutList = [];
        var EchartNmame = [];
       for(var i =0; i< arguments.length ; i++){
            arguments[i].value = arguments[i].NianHuaLv;
            ReslutList.push( arguments[i] );
            EchartNmame.push(arguments[i].name)
       }

        ReslutList.sort(function(a, b) {  
            if(a["NianHuaLv"] > b["NianHuaLv"]) {      
                return 1;    
            } else if(a["NianHuaLv"] < b["NianHuaLv"]) {      
                return -1;    
            } else {      
                return 0;    
            }  
        })

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
                    show:true
                }
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

















    }
); 




