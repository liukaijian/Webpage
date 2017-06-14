function menuDemo(id1){
	var menu=document.getElementById(id1);
	console.log(menu);
	var oneMenu=menu.getElementsByClassName("menu-li");
	var twoMenu=menu.getElementsByClassName("child-menu");
	console.log(oneMenu,twoMenu);
	if(oneMenu.length != twoMenu.length)throw "menu length !=";
	function findIndex(target,num){
		for(var i=0;i<num.length;i++){
			if(num[i]==target)return i;
		}
		return -1;
	}
	/*显示子菜单*/
	for(var i=0;i<oneMenu.length;i++){
		var one=oneMenu[i];
		one.addEventListener("mouseenter",function(evt){
			var index=findIndex(evt.target,oneMenu);
			/*twoMenu[index].style.display="block";*/
			this.hideAll();
			this.showBlock(index);
			clearInterval(this.run);
		}.bind(this))
	}
	menu.addEventListener("mouseleave",function(evt){
			/*var index=findIndex(evt.target,oneMenu);*/
			/*twoMenu[index].style.display="none";*/
			this.hideAll();
			this.run=setInterval(runTime,3000);
		}.bind(this))
	/*显示子菜单*/
	this.showBlock=function(index){
		twoMenu[index].style.display="block";
	}
	/*隐藏全部子菜单*/
	this.hideAll=function(){
		for(var i=0;i<twoMenu.length;i++){
			twoMenu[i].style.display="none";
		}
	}
	/*默认显示第一个子菜单*/
	this.showBlock(0);

	/*默认子菜单轮流滚动5秒钟*/
	this.min=0;
	var runTime=function(){
		this.hideAll();
		this.showBlock(++this.min-1);
		if(this.min>=twoMenu.length)this.min=0;
	}.bind(this)

	this.run=setInterval(runTime,3000);
}
var list=new menuDemo("menu");
list.showBlock(0);