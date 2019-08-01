define(function () {


    //Do setup work here
    return {

    	typeA:'定投',

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
    	costData:function(modefyData){

    		var nowData = (new Date()).getTime();
    		var arrayLength = modefyData.length;

    		for(var i = 0 ; i < arrayLength; i++ ){
    			modefyData[i].realDate = (new Date(modefyData[i].date)).getTime();
    			if(modefyData.length == 1){
    				var cost = nowData - modefyData[i].realDate;
    				return parseInt(cost/(1000*60*60*24));
    			}	
    		}
    		var cost = modefyData[0].realDate - modefyData[arrayLength-1].realDate;
    		return parseInt(cost/(1000*60*60*24));
    	},

    	/** 年化率计算
    	**/
    	NianHuaLv:function(){





    	}

    }



});