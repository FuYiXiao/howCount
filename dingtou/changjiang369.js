define( ['../js/type.js'], function (Type) {

	var BuyList = [

		{
			date:"2019-07-15",
			Money:5000
		}

	];

	// 最终的收益结果
	var ResultMoney = 5015.34;
    //结束日期
    var EndData ;

    //Do setup work here
    return {

    	name:"长江养老添年享",

    	id:2019081002,
        //类型
    	type:Type.typeA,
        // 其他信息
    	info: '365天',

    	costData: Type.costData(BuyList,EndData),

        // 是否已经停止
        hasEnd:(typeof EndData == 'undefined' ? false : true),

    	BuyList: BuyList,

    	// 计算的年化率
    	NianHuaLv: Type.NianHuaLv(BuyList,ResultMoney),

    	// 最终结果
    	ResultMoney:ResultMoney,

        // 初始金额
        Startoney:Type.totalMoney(BuyList)

    }



});