/*头部导航条鼠标悬停显示列表*/
function showList(data1,data2,data3){
	$(data1).hover(function(){
		$(this).css({
			"background-color":"white",
			"border":"1px #ccc solid",
			"border-bottom":"none"
		});
		$(data2).css("display","block");
		$(data3).css("display","none");
	},function(){
		$(this).css({
			"background-color":"rgb(225,225,225)",
			"border-top":"1px rgb(225,225,225) solid",
			"border-left":"1px rgb(225,225,225) solid",
			"border-right":"1px rgb(225,225,225) solid",
		});
		$(data2).css("display","none");
		$(data3).css("display","block");
	})
}
showList(".header-nav-showone",".header-nav-hideone");
showList(".header-nav-showtwo",".header-nav-hidetwo");
showList(".header-nav-showthree",".header-nav-hidethree");
showList(".header-nav-showfour",".header-nav-hidefour",".header-nav-showfive-img");


/*导航条显示列表*/
$(".header-nav-showfive").hover(function(){
	$(".header-nav-hidefive").css("display","block");
	$(".header-nav-showfive-img").css("display","none");
},function(){
	$(this).css({
		"background-color":"rgb(225,225,225)",
		"border":"none"
	});
	$(".header-nav-hidefive").css("display","none");
	$(".header-nav-showfive-img").css("display","block");
})
/*购物车鼠标悬停效果*/
function showListbuy(data1,data2){
	$(data1).hover(function(){
		$(data2).css("display","block");
	},function(){
		$(data2).css("display","none");
	})
}
showListbuy(".header-main-buy",".header-main-buy div");

/*二级菜单*/
function showmenu(data1,data2,data3,data4){
	var i;
	$(data3).hover(function(){
		$(data1).hover(function(){
			$(data4).show();
			i=$(this).index();
			$(data2).eq(i).show().siblings().hide();
		})
	},function(){
		$(data2).eq(i).hide();
		$(data4).hide();
	})
}
showmenu(".twice-menu li",".twice-menu-show>li",".article-one-menu",".twice-menu-show");

/*轮播图*/
	function runimgall(numimg,numbtn,numright,numleft,color){
		var i=0;
		var run;
		var num=$(numimg).length;
		$(numimg).eq(i).show();
		$(numbtn).hover(function(){
			clearInterval(run);
			i=$(this).index();
			donghua(numimg,numbtn);
		},function(){
			runimg();
		});
		function runimg(){
			run=setInterval(function(){
				donghua(numimg,numbtn);
				i++;
				if(i>=num){
					i=0
				}
			},3000)
		}
		runimg();
		$(numleft).click(function(){
			clearInterval(run);
			i--;
			if(i<0){
				i=num-1;
			}
			donghua(numimg,numbtn);
			runimg();
		});
		$(numright).click(function(){
			clearInterval(run);
			i++;
			if(i>num-1){
				i=0;
			}
			donghua(numimg,numbtn);
			runimg();
		});
		function donghua(img,btn){
			$(img).eq(i).fadeIn().siblings().fadeOut();
			$(btn).eq(i).css("background-color","red").siblings().css("background-color",color);
		}
		
	}
		
	$(".btn").hover(function(){
		$(".turn").show();
	})
	runimgall(".article-three .wheels",".article-three .article-wheel li",".article-three #hide-right",".article-three #hide-left","rgb(150,150,150)");

	runimgall(".imgs",".btns","#right","#left","white");
	runimgall(".article-two-right ul:first-child li",".article-two-right ul:last-child li","","","black");
	runimgall(".article-six-list-list-img li",".cover-btns li",".cover-right",".cover-left","white");
	runimgall(".cover-text-lists li",".cover-btns li",".cover-right",".cover-left","white");
	showListbuy(".img",".turn");
	showListbuy(".turn",".turn");

	/*轮播按钮显示*/
	$('.article-three>div:nth-child(2)').hover(function(){
	   		$('#hide-left').show();
	   		$('#hide-right').show();
	  	},function(){
	   		$('#hide-left').hide();
	   		$('#hide-right').hide();
	  	})
	$(".article-aside-choose>li").eq(0).show();
	showChooseCards(".hover-card",".move-line",".article-aside-choose-block",20);

	/*显示隐藏页面*/
	function showChooseCards(data1,data2,data3,data4){
		$(data1).hover(function(){
			$(data1).css("color","rgb(100,100,100)");
			var i=$(this).index();
			console.log(i)
			$(this).css("color","red");
			$(data2).stop().animate({left:i*data4+'px'},90);
			$(data3).eq(i).show().siblings().hide();
		})
	}
	$(".article-three-block-main-content").eq(0).show();
	showChooseCards(".article-three-right-nav-choose",".article-three-block .move-line",".article-three-block-main-content",37);
	/*初始化显示*/
	function showinit(data1,data2){
		$(data1).eq(0).css({"background-color":"red","color":"white"}).find("span").css("border-top","4px red solid");
		$(data2).eq(0).show().siblings().hide();
	}
	showinit(".showone li",".hideone li");
	showinit(".showtwo li");
	showinit(".showthree li");
	showinit(".showfour li");
	/*显示隐藏页面*/
	function showPayPage(data1,data2){
		$(data1).hover(function(){
			$(this).css({"background-color":"red","color":"white"}).siblings().css({"background-color":"white","color":" rgb(100,100,100)"});;
			$(this).find("span").css("border-top","4px red solid").parent().siblings().find("span").css("border-top","4px white solid");
			var i=$(this).index();
			$(data2).eq(i).show().siblings().hide();
		})
	}
	showPayPage(".showone li",".hideone li");
	
	/*左右轮播*/
	function turnblock(data1,data2,data3){
			var iswidth=$(data1).width();
			$(data2).hover(function(){
				$(this).css({"background-color":"red","color":"white"}).siblings().css({"background-color":"white","color":" rgb(100,100,100)"});
				$(this).find("span").css("border-top","4px red solid").parent().siblings().find("span").css("border-top","4px white solid");
				var i=$(this).index();
				$(data3).animate({left:'-'+(i*(iswidth+9))+"px"},100);
			})
		}
	turnblock(".hidetwo li",".showtwo li",".hidetwo");
	turnblock(".hidethree li",".showthree li",".hidethree");
	turnblock(".hidefour li",".showfour li",".hidefour");

	/*12宫格的动画显示效果*/
	function wheelshow(data1,data2,data3,data4,data5,data6){
		$(data1).mouseenter(function(){
			$(data2).stop().animate({bottom:"40px"},100).css("border-right","1px rgb(225,225,225) solid").eq(3).css("border-right","none");
			$(this).css({"border-right":"none","border-top":"2px red solid"}).siblings().css('border-top',"1px rgb(100,100,100) solid");
			$(data1).css("border-right","none");
			var i=$(this).index();
			$(data3).eq(i).show().siblings().hide();
			$(data4).stop().animate({bottom:"30px"},100);
			$(data5).hide();
			$(data6).show();
		})
	}
	wheelshow(".article-aside-footer-choose",".uphide",".aside-up",".article-aside-footer-turn",".aside-hide",".close");
	/*12宫格的动画隐藏效果*/
	function clickHide(data1,data2,data3,data4,data5){
		$(data1).click(function(){
			$(data2).find(data3).stop().animate({bottom:"0px"},100);
			$(data2).css({'border-top':"1px rgb(100,100,100) solid",'border-right':"1px rgb(100,100,100) solid"}).eq(3).css("border-right","none");
			$(data3).css('border',"none");
			$(data4).stop().animate({bottom:"0px"},100);
			$(data5).show();
			$(this).hide();
		})
	}
	clickHide(".close",".article-aside-footer-choose",".uphide",".article-aside-footer-turn",".aside-hide");

	/*图片移动*/
	function sportImg(data1,data2,data3){
		$(data1).hover(function(){
			$(this).find(data2).stop().animate({bottom:"5px"});
			$(this).find(data3).css("color","red");
		},function(){
			$(this).find(data2).stop().animate({bottom:"0px"});
			$(this).find(data3).css("color","rgb(150,150,150");
		})
	}
	sportImg(".article-two-center-ul-ul div","img","p");

	/*鼠标悬停图片移动*/
	 function sportLeftImg(data1,data2,data3,data4){
		$(data1).hover(function(){
			console.log("1")
			$(this).find(data2).stop().animate({left:data3+"px"});
		},function(){
			$(this).find(data2).stop().animate({left:data4+"px"});
		})
	}
	sportLeftImg(".article-three-left-main li","div",-5,0);
	sportLeftImg(".article-four-lists",".article-four-lists-right",58,52);
	sportLeftImg(".article-six-list:nth-child(1) .article-six-list-list li","div:nth-child(2)",0,8);
	sportLeftImg(".article-six-list:nth-child(2) .article-six-list-list li","div:nth-child(2)",0,8);
	sportLeftImg(".article-six-list:nth-child(3) .article-six-list-list>li:last-child li","div:nth-child(2)",-8,0);
	sportLeftImg(".article-seven-block-main-list",".move-left",-8,0);
	sportLeftImg(".article-seven-block-main-list-list","div:last-child",72,80);

	/*左右轮播*/
	function lunbo(data1,dataleft,dataright,data2,data3){
		var i=0;
		var iswidth=$(data1).width();
		$(dataright).click(function(){
			runleft();
		})
	  // 上一个按钮
	  	$(dataleft).click(function(){
	   		i--;
			if(i==-1) {
				i=$(data1).length-2;
				$(data2).css({left:-($(data1).length-1)*iswidth});
	   		}
	   		$(data2).animate({left:-i*iswidth});

	  	})
	  //设置按钮的显示和隐藏
	  	$(data3).hover(function(){
	   		$(dataleft).show();
	   		$(dataright).show();
	  	},function(){
	   		$(dataright).hide();
	   		$(dataleft).hide();
	  	})

	  	function runleft(){
	   		i++;
	   		if(i==$(data1).length) {
	   		 	i=1;
	    		$(data2).css({left:0});
	  		};
	   		$(data2).stop().animate({left:-i*iswidth});
	  	}
	 }
	 lunbo(".article-two-center-ul>li",'.article-two-center-left','.article-two-center-right','.article-two-center-ul','.article-two-center');
	 lunbo(".band-list",".click-left",".click-right",".move-band",".band-footer");
	 lunbo(".band-list1",".click-left1",".click-right1",".move-band1",".band-footer1");
	 lunbo(".band-list2",".click-left2",".click-right2",".move-band2",".band-footer2");
	 lunbo(".band-list3",".click-left3",".click-right3",".move-band3",".band-footer3");
	 lunbo(".band-list4",".click-left4",".click-right4",".move-band4",".band-footer4");
	 lunbo(".band-list5",".click-left5",".click-right5",".move-band5",".band-footer5");
	 lunbo(".band-list6",".click-left6",".click-right6",".move-band6",".band-footer6");
	 lunbo(".band-list7",".click-left7",".click-right7",".move-band7",".band-footer7");
	 lunbo(".band-list8",".click-left8",".click-right8",".move-band8",".band-footer8");
	 lunbo(".band-list9",".click-left9",".click-right9",".move-band9",".band-footer9");
	 lunbo(".band-list10",".click-left10",".click-right10",".move-band10",".band-footer10");
	 lunbo(".band-list11",".click-left11",".click-right11",".move-band11",".band-footer11");
	 lunbo(".band-list12",".click-left12",".click-right12",".move-band12",".band-footer12");
	 lunbo(".band-list13",".click-left13",".click-right13",".move-band13",".band-footer13");
	 lunbo(".band-list14",".click-left14",".click-right14",".move-band14",".band-footer14");
	 
	 /*隐藏搜索框显示*/
	$(window).scroll(function(){
		var top=$(".article-two").offset().top;
		if($(this).scrollTop()>=top){
			$("#navbar").css("top","0px");
		}else if($(this).scrollTop()<top){
			$("#navbar").css("top","-55px");
		}
	})
