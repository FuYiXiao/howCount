define( ['../js/type.js'], function (Type) {

	var BuyList = [

		{
			date:"2019-07-21",
			Money:1000
		}

	];

	// 最终的收益结果
	var Result = 1001.38;
    var EndData = "2019-08-07"

    //Do setup work here
    return {

    	name:"泰康安泰15天",

    	id:2019081001,

    	type:Type.typeA,

    	info: '买入',

    	costData: Type.costData(BuyList,EndData),

    	BuyList: BuyList,

    	// 计算的年化率
    	NianHuaLv: Type.NianHuaLv(BuyList,Result),

    	// 最终结果
    	Result:Result

    }



});