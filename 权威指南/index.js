var type=document.getElementById("type");//品类

var num=document.getElementById("num");//预期销量

var num1=document.getElementById("num1");//销量

var month1=document.getElementById("month1");//季度

var years1=document.getElementById("years1");//年份

var num2=document.getElementById("num2");//对比销量

var month2=document.getElementById("month2");//对比季度

var years2=document.getElementById("years2");//对比年份

var canvas=document.getElementById("canvas");//图线

var title=document.getElementById("title");//品类标题
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var end1=document.getElementById("end1");
var end2=document.getElementById("end2");
var cxt=canvas.getContext("2d");
function main(){
	btn1.onclick=function(){

		title.innerHTML=years1.value+"年"+ type.value;
		write2(num);
		mainmin(num1,month1,"green",150);
	}
	btn2.onclick=function(){
		if(month1.value==month2.value && years1.value==years2.value){
			btn2.onclick="";
			alert("比较日期不能相同!")
		}else{
			end1.style.display="none";
			end2.style.display="block";
			title.innerHTML=years1.value+"年-"+years2.value+"年"+type.value;
			mainmin(num2,month2,"blue",180);
		}
		
	}
}
function mainmin(c1,c2,c3,c4){
	var numnow=c1.value;
	var monum=c2.value;
	var b1=c3;
	var b2;
	var b3=Math.floor(349-(349-150)*(numnow/num.value));
	if(monum==1){
			b2=c4;
			write3(b1,b2,b3);
	}else if(monum==2){
			b2=c4+100;
			write3(b1,b2,b3);
	}else if(monum==3){
			b2=c4+200;
			write3(b1,b2,b3);
	}else if(monum==4){
			b2=c4+300;
			write3(b1,b2,b3);
	}
}
function write(){
	cxt.beginPath();
	cxt.moveTo(80,100);
	cxt.lineTo(80,350);
	cxt.lineTo(550,350);
	cxt.strokeText("销量",70,30);
	cxt.strokeText("日期",560,360);
	cxt.strokeText("1季度",145,370);
	cxt.strokeText("2季度",245,370);
	cxt.strokeText("3季度",345,370);
	cxt.strokeText("4季度",445,370);
	cxt.stroke();
	cxt.closePath();
}
function write2(n1){
	var n=n1.value;
	if(n){
		cxt.strokeText("预售:"+n+"台",50,95);
	}
}
function write3(n1,n2,n3){
	cxt.beginPath();
	cxt.lineWidth=30;
	cxt.strokeStyle=n1;
	cxt.moveTo(n2,349);
	cxt.lineTo(n2,n3);
	cxt.stroke();
	cxt.closePath();
}
function move(){
	a1="";
	a2="";
	a3="";
	title.innerHTML="";
}
main();
write();