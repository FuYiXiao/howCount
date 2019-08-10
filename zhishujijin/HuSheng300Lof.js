define( ['../js/type.js'], function (Type) {

	//从上到下
	var BuyList = [
		{
			date:"2019-07-16",
			Money:135
		},
		{
			date:"2019-07-23",
			Money:135
		},	
		{
			date:"2019-07-30",
			Money:135
		},		
		{
			date:"2019-08-06",
			Money:135
		},




	];

	// 最终的收益结果
	var Result = 525.53;


    //Do setup work here
    return {

    	name:"兴全沪深300指数增强LOF",

    	id:2019081003,

    	type:Type.type1,

    	info: '买入',

    	costData: Type.costData(BuyList),

    	BuyList: BuyList,

    	// 计算的年化率
    	NianHuaLv: Type.NianHuaLv(BuyList,Result),

    	// 最终结果
    	Result:Result

    }



});