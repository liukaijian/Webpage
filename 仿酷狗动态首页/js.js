$(function(){
	/*轮播图*/
	function runimgall(numimg,numbtn,numright,numleft,numClass){
		var i=0;
		var run;
		$(numimg).eq(i).show();
		$(numbtn).hover(function(){
			clearInterval(run);
			i=$(this).index();
			donghua(numimg,numbtn,numClass);
		},function(){
			runimg();
		});
		function runimg(){
			run=setInterval(function(){
				donghua(numimg,numbtn,numClass);
				i++;
				if(i>=6){
					i=0
				}
			},3000)
		}
		runimg();
		$(numleft).click(function(){
			clearInterval(run);
			i--;
			if(i<0){
				i=5;
			}
			donghua(numimg,numbtn,numClass);
			runimg();
		});
		$(numright).click(function(){
			clearInterval(run);
			i++;
			if(i>5){
				i=0;
			}
			donghua(numimg,numbtn,numClass);
			runimg();
		});
		function donghua(img,btn,cls){
			$(img).eq(i).fadeIn().siblings().fadeOut();
			$(btn).eq(i).addClass(cls).siblings().removeClass(cls);
		}
		
	}
		

	runimgall(".imgs",".btns","#right","#left","bg");


	/*下拉菜单*/
	function droplist(){
		$("#drop-list").hover(function(){
			$("#dropdown").css("display","block");
			$("#drop-list img").attr("src","img/上拉.png");
		},function(){
			$("#dropdown").css("display","none");
			$("#drop-list img").attr("src","img/下拉.png");
		})
	}
	droplist();
	/*换图片*/
	function findimg(data,hoverimgurl,afterimgurl){
		$(data).hover(function(){
			$(this).find("img").attr("src",hoverimgurl);
		},function(){
			$(this).find("img").attr("src",afterimgurl);
		})
	}
	findimg(".nav-list li:first-child","img/五星 (2).png","img/五星.png");
	findimg(".nav-list li:nth-child(2)","img/音乐 (2).png","img/音乐.png");
	findimg(".nav-list li:nth-child(3)","img/耳机 (3).png","img/耳机.png");
	findimg(".nav-list li:nth-child(4)","img/白吃 (1).png","img/白吃.png");
	findimg(".nav-list li:last-child","img/商城 (1).png","img/商城.png");
	findimg(".play","img/播放 (1).png","img/播放.png");

	/*换图片*/
	$(".play").hover(function(){
		$(this).find("span").css("color"," rgb(22,154,243)");
		$(this).find("img").attr("src","img/播放 (1).png");
	},function(){
		$(this).find("span").css("color"," rgb(85,85,85)");
		$(this).find("img").attr("src","img/播放.png");
	});
	/*轮播列表图*/
	$(".imgsize").hover(function(){
		$("#left").show();
		$("#right").show();

	},function(){
		$("#left").hide();
		$("#right").hide();
	});
	$(".btn").hover(function(){
		$("#left").show();
		$("#right").show();

	});
	$("#left").hover(function(){
		$(this).show();
		$("#right").show();
	});
	$("#right").hover(function(){
		$(this).show();
		$("#left").show();
	});
	/*显示div阴影*/
	function showblock(data){
		$(data).hover(function(){
			$(this).find(".cover").css("display","block");
		},function(){
			$(this).find(".cover").css("display","none");
		})
	}
	showblock(".left-block");
	showblock(".center");
	showblock(".right-list");
	showblock(".nmr1");
	showblock(".nmr2");
	showblock(".nmr3");
	showblock(".top-list-block");
	showblock(".station-right-img");
	/*轮播歌曲列表*/
	var j=0;
	$(".ka").eq(0).show();
	$(".ka").eq(0).find("ul").eq(0).show();
	$(".xuanxiang").hover(function(){
		$(this).css("color","rgb(22,154,243)").siblings().css("color","black");
		var i=$(this).index();
		$(".ka").eq(i).show().siblings(".ka").hide();
		$(".ka").eq(i).find("ul").eq(0).show();
		j=0;
		$(".runnum1").html(j+1);
		$(".runnum2").html(j+1);
		$(".runnum3").html(j+1);
		$(".runnum4").html(j+1);
	})
	/*点击翻页列表*/
	function musiclist(num1,num2,num3,num4){
		$(num1).click(function(){
			j--;
			if(j<=0){
				j=0;

			}
			$(num3).eq(j).show().siblings().hide();
			$(num4).html(j+1);
		})
		$(num2).click(function(){
			j++;
			if(j>=2){
				j=2;
			}
			$(num3).eq(j).show().siblings().hide();
			$(num4).html(j+1);
		})
	}
	musiclist(".runbtnl1",".runbtnr1",".ka-list1 ul",".runnum1");
	musiclist(".runbtnl2",".runbtnr2",".ka-list2 ul",".runnum2");
	musiclist(".runbtnl3",".runbtnr3",".ka-list3 ul",".runnum3");
	musiclist(".runbtnl4",".runbtnr4",".ka-list4 ul",".runnum4");
	/*播放播放显示下载图标*/
	$(".ka li").hover(function(){
		$(this).find(".only-download").show();
	},function(){
		$(".only-download").hide();
	})
	/*点击元素变换颜色*/
	$(".top-list-block").hover(function(){
		$(this).find("p").css("color"," rgb(22,154,243)");
	},function(){
		$(this).find("p").css("color"," rgb(85,85,85)");
	});
	/*歌曲轮播框*/
	$(".station-ka").eq(0).show();
	$(".station-ka").eq(0).find(".hide").eq(0).show();
	function stationShowImg(numbtn,img){
		$(numbtn).hover(function(){
			$(this).css("backgroundColor","rgb(133, 172, 248)").siblings().css("backgroundColor","lightgrey");
			var a=$(this).index();
			$(img).eq(a).show().siblings().hide();
		})
	}
	stationShowImg(".btnsc",".station-ka-list1 .hide");
	stationShowImg(".btns-america",".station-ka-list2 .hide");
	stationShowImg(".btns-korea",".station-ka-list3 .hide");
	/*歌曲轮播*/
	$(".xx").hover(function(){
		$(this).css("color","rgb(22,154,243)").siblings().css("color","black");
		var i=$(this).index();
		$(".station-ka").eq(i).show().siblings(".station-ka").hide();
		$(".station-ka").eq(i).find(".hide").eq(0).show();
	})

});