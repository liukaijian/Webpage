$(function(){
	var goods=[
	{
		goodId:"CD000001",
		goodPhoto:"img/t-shirt.jpg",
		goodName:"夹克衫",
		goodPrice:150,
	},
	{
		goodId:"CD000002",
		goodPhoto:"img/coat.jpg",
		goodName:"风衣",
		goodPrice:180,
	},
	{
		goodId:"CD000003",
		goodPhoto:"img/camputer.jpg",
		goodName:"台式电脑",
		goodPrice:3000,
	},
	{
		goodId:"CD000004",
		goodPhoto:"img/iphone.jpg",
		goodName:"苹果6",
		goodPrice:5000,
	},
	{
		goodId:"CD000005",
		goodPhoto:"img/nikon.jpg",
		goodName:"尼康单反相机",
		goodPrice:2500,
	},
	{
		goodId:"CD000006",
		goodPhoto:"img/shoe.jpg",
		goodName:"运动鞋",
		goodPrice:200,
	}
	]
	
	console.log(goods[0]);
	console.log(goods[1]);
	console.log(goods[2]);
	console.log(goods[3]);
	console.log(goods[4]);
	console.log(goods[5]);

	var allprice=0;
	function addhtml(){
		for(var i=0;i<goods.length;i++){
			var good=goods[i];
			var text="<tr class='goods-table'><td>"+good.goodId+"</td><td><img src="+good.goodPhoto+"></td><td>"+good.goodName+"</td><td>"+good.goodPrice+"</td><td><button class='add'>+</button><span class='count'>0</span><button class='reduce'>-</button></td><td><button class='danger'>删除</button></tr>";
			$("#goods-view").append(text);
		}
		var bottom="<tr><td colspan='2'>总数量:<span class='counts'></span></td><td colspan='2'>总价:"+allprice+"</td><td><button class=''>清空购物车</button></td></tr>";
		$("#goods-view").append(bottom);

	}
	function add(num1,num2,num3){
		var addbtn=$(num1);
		var counts=$(num2);
		for (var i = 0; i < addbtn.length; i++) {
			var add=addbtn[i];
			add.addEventListener('click',function(evt){
				var index=findindex(evt.target,addbtn);
				for (var j = 0; j < counts.length; j++) {
					if(j==index){
						var count=counts[j];
						if(num3==true){
							++count.innerHTML;;
						}else{
							if(count.innerHTML<=0){
								var info=confirm("您确定要删除此商品吗?");
								if(info){
								
								for (var x = 0; x < goods.length; x++) {
									if(x==j){
										delete goods[x];
										$(".goods-table").eq(x).remove();
										
									}
								}
								
								}
							}else{
								--count.innerHTML;;
							}
						}
						
					}
				}

			})
		}

	}
	function findindex(target,list){
		for (var i = 0; i<list.length; i++) {
			if(list[i]==target)return i;
		}
		return -1;
	}
	var dangers="";
	function empty(num1){
		dangers=$(num1);
		for (var i = 0; i < dangers.length; i++) {
			var add=dangers[i];
			add.addEventListener('click',function(evt){
				var index=findindex(evt.target,dangers);
				for (var x = 0; x < goods.length; x++){
					if(x==index){
						delete goods[x];
						$(".goods-table").eq(x).remove();
						
					}
				}
				
			})
		}
	}
	addhtml();
	add(".add",".count",true);
	add(".reduce",".count",false);
	/*empty(".danger");*/
})