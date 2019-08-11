define(function () {


    //Do setup work here
    return {

    	typeA:'整存',

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
    	NianHuaLv:function(BuyList,ResultMoney){

            var arrayLength = BuyList.length;
            var nianHuaLV = null;

            if(arrayLength==1){
                return nianHuaLV = ((ResultMoney - BuyList[0].Money)/BuyList[0].costDate * 365) / ResultMoney * 100;
            }else{
                var middleNum = 0;
                var totalMoney = 0;
                for(var i = 0 ; i < arrayLength; i++ ){
                    middleNum = middleNum + BuyList[i].Money*BuyList[i].costDate/365;
                    totalMoney = totalMoney + BuyList[i].Money;
                }
                return  nianHuaLV = (ResultMoney - totalMoney ) / middleNum * 100;    
            }


    	},
        /** 本金计算
        **/
        totalMoney:function(BuyList){
            var arrayLength = BuyList.length;
            var totalMoney = null;

            if(arrayLength==1){
                return totalMoney = BuyList[0].Money;
            }else{
                for(var i = 0 ; i < arrayLength; i++ ){
                    totalMoney = totalMoney + BuyList[i].Money;
                }
                return  totalMoney ;    
            }
        }

    }



});