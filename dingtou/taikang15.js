define( ['../js/type.js'], function (Type) {

	var BuyList = [

		{
			date:"2019-07-22",
			Money:135
		}

	];

	// 最终的收益结果
	var Result = null;

	// 年化率
	var NianHuaLv = 0.035;

    //Do setup work here
    return {

    	name:"泰康安泰15天",

    	id:163407,

    	type:Type.type1,

    	info: '买入',

    	costData: Type.costData(BuyList,Result),

    	BuyList: BuyList,

    	// 计算的年化率
    	NianHuaLv: Type.NianHuaLv(BuyList,Result),

    	// 最终结果
    	Result:Result

    }



});