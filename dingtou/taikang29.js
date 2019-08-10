define( ['../js/type.js'], function (Type) {

	var BuyList = [

		{
			date:"2019-07-18",
			Money:5000
		}

	];

	// 最终的收益结果
	var Result = 5010.21;
    var EndData = "2019-08-10"

    //Do setup work here
    return {

    	name:"泰康安泰29天",

    	id:2019081002,

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