define( ['../js/type.js'], function (Type) {

	//从上到下
	var BuyList = [
		{
			date:"2019-07-16",
			Money:150
		},
		{
			date:"2019-07-23",
			Money:150
		},	
		{
			date:"2019-07-30",
			Money:150
		},		
		{
			date:"2019-08-06",
			Money:150
		},




	];

	// 最终的收益结果
	var ResultMoney = 601.16;
	var EndData ;

    //Do setup work here
    return {

    	name:"前海开源祥和债券",

    	id:2019081003,

    	//类型
    	type:Type.type2,

    	// 其他信息
    	info: '定投',

       // 是否已经停止
        hasEnd:(typeof EndData == 'undefined' ? false : true),
        
        // 花费时间
    	costData: Type.costData(BuyList,EndData),
    	// 购买清单
    	BuyList: BuyList,

    	// 计算的年化率
    	NianHuaLv: Type.NianHuaLv(BuyList,ResultMoney),

    	// 最终结果
    	ResultMoney:ResultMoney,

        // 初始金额
        Startoney:Type.totalMoney(BuyList) 

    }



});