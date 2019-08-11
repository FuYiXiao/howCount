define( ['../js/type.js'], function (Type) {
    //购买清单
	var BuyList = [

		{
			date:"2019-07-21",
			Money:1000
		}

	];

	// 最终的收益结果
	var ResultMoney = 1001.38;
    //结束日期
    var EndData = "2019-08-07";

   
    return {

    	name:"泰康安泰15天",

    	id:2019081001,

        //类型
    	type:Type.typeA,
        // 其他信息
    	info: '15天',

        // 是否已经停止
        hasEnd:(typeof EndData == 'undefined' ? false : true),
        
        // 花费时间
    	costData: Type.costData(BuyList,EndData),
        // 购买清单
    	BuyList: BuyList,

    	// 计算的年化率
    	NianHuaLv: Type.NianHuaLv(BuyList,ResultMoney),

    	// 最终金额
    	ResultMoney:ResultMoney,

        // 初始金额
        Startoney:Type.totalMoney(BuyList) 

    }



});