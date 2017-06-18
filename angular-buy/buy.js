var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
	$scope.goods=[
	{
		goodId:"CD000001",
		goodPhoto:"img/t-shirt.jpg",
		goodName:"夹克衫",
		goodPrice:150,
		goodNumber:0,
		goodPayprice:150
	},
	{
		goodId:"CD000002",
		goodPhoto:"img/coat.jpg",
		goodName:"风衣",
		goodPrice:180,
		goodNumber:0,
		goodPayprice:180
	},
	{
		goodId:"CD000003",
		goodPhoto:"img/camputer.jpg",
		goodName:"台式电脑",
		goodPrice:3000,
		goodNumber:0,
		goodPayprice:3000
	},
	{
		goodId:"CD000004",
		goodPhoto:"img/iphone.jpg",
		goodName:"苹果6",
		goodPrice:5000,
		goodNumber:0,
		goodPayprice:5000
	},
	{
		goodId:"CD000005",
		goodPhoto:"img/nikon.jpg",
		goodName:"尼康单反相机",
		goodPrice:2500,
		goodNumber:0,
		goodPayprice:2500
	},
	{
		goodId:"CD000006",
		goodPhoto:"img/shoe.jpg",
		goodName:"运动鞋",
		goodPrice:200,
		goodNumber:0,
		goodPayprice:200
	},
	]

	$scope.buysum=function(){
		var sum=0;
		angular.forEach($scope.goods,function(x){
			sum+=x.goodNumber;
		})
		return sum;
	}
	$scope.pricesum=function(){
		var sum=0;
		angular.forEach($scope.goods,function(x){
			sum+=x.goodPrice*x.goodNumber;
		})
		return sum;
	}
	var findindex=function(id){
		var index=-1;
		angular.forEach($scope.goods,function(x,key){
			if(x.goodId===id){
				index=key;
				return;
			}
		});
		return index;
	}
	$scope.add=function(id){
		var index=findindex(id);
		++$scope.goods[index].goodNumber;
	}
	$scope.remove=function(id){
		var index=findindex(id);
		if($scope.goods[index].goodNumber>1){
			--$scope.goods[index].goodNumber;
		}else{
			var deconfirm=confirm("确定要删除此商品吗?");
			if(deconfirm){
				$scope.empty(id);
			}
		}
		
	}
	$scope.empty=function(id){
		var index=findindex(id);
		$scope.goods.splice(index,1);
	}
	$scope.removeall=function(){
		$scope.goods={};
	}
})