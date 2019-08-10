define(function () {


    //Do setup work here
    return {

    	typeA:'定期',

    	typeB:'股票',

    	typeC:'黄金',

    	type1:'指数基金',

    	type2:'债券基金',

    	type3:'股票基金',

    	type4:'混合基金',

    	type5:'其他基金',

    	typeE:'债券',


    	/** 计算总的时间花销 modefyData
    	**/
    	costData:function(modefyData,EndData){

    		var nowData = (new Date()).getTime();

            if(typeof EndData !== "undefined"){
                nowData = new Date(EndData).getTime()
            }

    		var arrayLength = modefyData.length;
    		for(var i = 0 ; i < arrayLength; i++ ){
    			modefyData[i].realDate = (new Date(modefyData[i].date)).getTime();	
                modefyData[i].costDate = (nowData - modefyData[i].realDate)/(1000*60*60*24);
    		}
            return modefyData[0].costDate;
    	},

    	/** 年化率计算
    	**/
    	NianHuaLv:function(BuyList,Result){

            var arrayLength = BuyList.length;
            var nianHuaLV = null;

            if(arrayLength==1){
                return nianHuaLV = ((Result - BuyList[0].Money)/BuyList[0].costDate * 365) / Result * 100;
            }else{
                var middleNum = 0;
                var totalMoney = 0;
                for(var i = 0 ; i < arrayLength; i++ ){
                    middleNum = middleNum + BuyList[i].Money*BuyList[i].costDate/365;
                    totalMoney = totalMoney + BuyList[i].Money;
                }
                return  nianHuaLV = (Result - totalMoney ) / middleNum * 100;    
            }


    	}

    }



});