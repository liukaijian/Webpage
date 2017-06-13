//游戏界面方格数量
var w=43;
var h=16;
var padding=1;
var size=30;
var num=0;
 var defen=document.getElementById("defen");
 function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    w=18;
	 h=24;
	 size=50;
	 var body=document.getElementById("body")
	 var ctrl=document.getElementById("ctrl")
	 var ctr2=document.getElementById("ctr2")
	 body.style.marginLeft="23px";
	 body.style.marginTop="23px";
	 ctrl.style.bottom="100px";
	 ctrl.style.left="40%";
	 ctr2.style.display="none";
  } 
}

browserRedirect();

//游戏界面
function map(){
	/*var w=50;
	var h=20;*/
	/*var size=20;*/
	/*var padding=1;*/
	this.showmap=function(){
		var main=document.createElement("div");
		main.style.backgroundColor="pink";
		main.style.position="absolute";
		document.getElementById("body").appendChild(main);
		for (var x = 0; x < w; x++) {
            for (var y = 0; y < h; y++) {
               var block=document.createElement("div");
                block.style.width=size+"px";
				block.style.height=size+"px";
				block.style.position="absolute";
				block.style.backgroundColor="#F59696";
				block.style.top=padding + y * (size + padding)+"px";
				block.style.left= padding + x * (size + padding)+"px";
                main.appendChild(block);
            }
        }
        main.style.width=(padding+ size) * w + padding+"px";
        main.style.height=(padding + size) * h + padding+"px";
        main.style.border="outset";
	}
}
//食物方块
function food(){
	/*var w=50;
	var h=20;*/
	/*var size=20;*/
	/*padding=1;*/
	this.xfood=0;
	this.yfood=0;
	this.pian=null;
	this.showfood=function(){
		if(this.pian==null){
			this.pian=document.createElement("div");
			this.pian.style.backgroundColor="green";
			this.pian.style.position="absolute";
			this.pian.style.width=size+"px";
			this.pian.style.height=size+"px";
			document.getElementById("body").appendChild(this.pian);
		}
		
		this.yfood=Math.floor(Math.random()*h);
		this.xfood=Math.floor(Math.random()*w);
		this.pian.style.top=padding + this.yfood* (size + padding)+3+"px";
		this.pian.style.left= padding + this.xfood * (size + padding)+3+"px";
		
	}
}
//小蛇
function snake(){
	/*var size=20;*/
	/*padding=1;*/
	this.snakebody=[[0,0,"green",null],[0,1,"green",null],[0,2,"green",null],[0,3,"red",null]];
	this.runright="right";
	this.showsnake=function(){
		for(var i=0;i<this.snakebody.length;i++){
			if(this.snakebody[i][3]===null){
				this.snakebody[i][3]=document.createElement("div");
				this.snakebody[i][3].style.backgroundColor=this.snakebody[i][2];
				this.snakebody[i][3].style.position="absolute";
				this.snakebody[i][3].style.width=size+"px";
				this.snakebody[i][3].style.height=size+"px";
				document.getElementById("body").appendChild(this.snakebody[i][3]);
			}
			this.snakebody[i][3].style.top=padding+this.snakebody[i][0]*(size + padding)+3+"px";
			this.snakebody[i][3].style.left= padding+this.snakebody[i][1]*(size + padding)+3+"px";
			
		}
	}
	/*小蛇运动*/
	this.runsnake=function(){
		for(var i=0;i<this.snakebody.length-1;i++){
			this.snakebody[i][0]=this.snakebody[i+1][0];
			this.snakebody[i][1]=this.snakebody[i+1][1];
		}
		if(this.runright=="right"){
			this.snakebody[this.snakebody.length-1][1]++;
		}else if(this.runright=="left"){
			this.snakebody[this.snakebody.length-1][1]--;
		}else if(this.runright=="top"){
			this.snakebody[this.snakebody.length-1][0]--;
		}else if(this.runright=="bottom"){
			this.snakebody[this.snakebody.length-1][0]++;
		}

		var ysnake=this.snakebody[this.snakebody.length-1][0];
		var xsnake=this.snakebody[this.snakebody.length-1][1];
		for(var k=0;k<this.snakebody.length-1;k++){
			if(xsnake==this.snakebody[k][1] && ysnake==this.snakebody[k][0]){
			alert("游戏结束!\n您只能吃食物!不能咬自己哦! \n您的游戏的得分是:"+num+"分 ,下次继续加油哦!");
			clearInterval(runtime);
			return false;
			}
		}
		if(xsnake==foods.xfood && ysnake==foods.yfood){
			var newjie=[this.snakebody[i][0],this.snakebody[i][1],"green",null];
			this.snakebody.unshift(newjie);
			foods.showfood();
			num+=5;
			defen.innerHTML=num;
		}

		if(xsnake>=w || xsnake<0 || ysnake>=h || ysnake<0){
			alert("游戏结束! \n您的游戏的得分是:"+num+"分 ,下次继续加油哦!");
			clearInterval(runtime);
			return false;
		}
		
		
		this.showsnake();
	}
}
window.onload=function(){
	var speed=400;
	 var add=document.getElementById("add");
	 var remove=document.getElementById("remove");
	add.addEventListener('click',function(){
		speed-=100;
		if(speed<=100){
			alert("已经是最快速度了!再加速蛇就要从屏幕里出来了!")
			speed=100;
		}
		clearInterval(runtime);
		runtime=setInterval("snakes.runsnake()",speed);
		console.log(speed)
	})
	remove.addEventListener('click',function(){
		speed+=200;
		if(speed>900){
			alert("已经是最慢速度了!再减速蛇就要饿死了!")
			speed=900;
		}
		clearInterval(runtime);
		runtime=setInterval("snakes.runsnake()",speed);
		console.log(speed)
	})
	var maps = new map();
	maps.showmap();
	foods=new food();
	foods.showfood();
	/*var*/ snakes=new snake();//保持snakes是全局变量,才能定时循环
	snakes.showsnake();
	runtime=setInterval("snakes.runsnake()",speed);
	/*snakes.runsnake();*/
	document.onkeyup=function(evt){
		var num=evt.keyCode;
		switch(num){
			case 37:
				snakes.runright="left";

				break;
			case 38:
				snakes.runright="top";

				break;
			case 39:
				snakes.runright="right";

				break;
			case 40:
				snakes.runright="bottom";

				break;
		}
	}
	var fromx=0.0,fromy=0.0,endx=0.0,endy=0.0,x=0.0,y = 0.0;
    var panel = document.body;
    panel.addEventListener("touchstart",function(event){
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            fromx = touch.screenX;
            fromy = touch.screenY;
        }
    });
    panel.addEventListener("touchmove",function(event){
        if (event.targetTouches.length == 1) {
            event.preventDefault();
            var touch = event.targetTouches[0];
            endx = touch.screenX;
            endy = touch.screenY;
        }
    });
    panel.addEventListener("touchend",function(event){
        event.preventDefault();
        var move = false;
        x = endx - fromx;
        y = endy - fromy;
        
        if(Math.abs(x/y)>=2.0 && x>=0.0 ){
            //right
            snakes.runright="right";
        }else if(Math.abs(x/y)>=2.0 && x<=0.0){
            //left
          snakes.runright="left";
        }else if(Math.abs(y/x)>=2.0 && y<=0.0){
            //上
            snakes.runright="top";
        }else if(Math.abs(y/x) >=2.0 && y>=0.0){
            //下
            snakes.runright="bottom";
        }
	})
    
}
