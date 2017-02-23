window.onload=function(){
    /*背景左移*/
    var otg=document.getElementById("background-pic");//背景
    otg.style.backgroundImage="url(img/background-pic.jpg)";//背景图片
    otg.style.visibility="visible";//显示背景
    var odal=document.getElementById("window-dall");//获取窗口
    /*画面左移动*/
    otg.style.animation="pic 0.8s linear both";
    /*获取选项卡*/
    var dp=document.getElementById("dCardoPeashooter");
    /*结束提示框*/
    /*默认结束为成功提示框*/
    var end=document.getElementById("show");
    /*修改成功提示框为失败提示框*/
    function endBorder() {
        var endTwo = document.getElementById("show");
        var block = endTwo.getElementsByTagName("h2");
        block.item(0).innerHTML = "闯关失败!";
        endTwo.style.display="block";
    }
    /*规则提示框*/
    var one=document.getElementById("one");
    /*点击植物提示框*/
    var two=document.getElementById("two");
    /*显示僵尸*/
    // 获取存放僵尸的容器,设置容器位置
    var jsBlock= document.getElementById("dzombie");
    jsBlock.style.left = (odal.offsetWidth-jsBlock.offsetWidth) + "px";
    /*创建开场僵尸*/
    function Js(){
        var js = document.createElement("div");
        js.style.position = "absolute";
        var img = document.createElement("img");
        img.src="img/1.gif";
        img.setAttribute("class", "js-img");
        js.appendChild(img);
        var imgtwo = document.createElement("img");
        imgtwo.src= "img/shadow.png";
        imgtwo.setAttribute("class", "shadow-img");
        js.appendChild(imgtwo);
        return js;
    }
    /*创建僵尸对象*/
    function makeJs(){
        this.blood=10;
    }
    /* 创建行走僵尸*/
    makeJs.prototype.walkJs=function(){
        var mj = document.createElement("div");
        mj.style.position = "absolute";
        var img = document.createElement("img");
        img.src="img/Zombie.gif";
        img.setAttribute("class", "js-img");
        mj.appendChild(img);
        var imgtwo = document.createElement("img");
        imgtwo.src= "img/shadow.png";
        imgtwo.setAttribute("class", "shadow-img");
        mj.appendChild(imgtwo);
        mj.setAttribute("class","runJs");
        mj.style.top="220px";
        mj.style.left="700px";
        odal.appendChild(mj);
        this.run=setInterval(function(){
            mj.style.left=mj.offsetLeft-1+"px";
        },80);
        this.mjs= mj;
    }
    /*无头行走*/
    makeJs.prototype.noHead=function(){
        var img=this.mjs;
        var imgs=img.getElementsByTagName("img");
        imgs[0].src="img/ZombieLostHead.gif";
    }
    /*停止行走*/
    makeJs.prototype.stopWalk=function(){
        clearInterval(this.run);
        this.run=null;
    }
    /*掉头僵尸*/
    makeJs.prototype.lostHead=function(){
        var img=document.createElement("img");
        img.src="img/ZombieHead.gif";
        img.style.position="absolute";
        img.style.left=this.mjs.offsetLeft+50+"px";
        img.style.top=this.mjs.offsetTop+"px";
        img.style.zIndex=888;
        odal.appendChild(img);
        setTimeout(function(){
            odal.removeChild(img);
        },800)
    }
    /*有头吃植物*/
    makeJs.prototype.HeadEat=function(){
        this.stopWalk();
        var img=this.mjs.getElementsByTagName("img");
        img[0].src="img/ZombieAttack.gif";
    }
    /*有头吃完食物行走*/
    makeJs.prototype.headEatWalk=function(){
        var img=this.mjs.getElementsByTagName("img");
        img[0].src="img/Zombie.gif";
    }
    /*无头吃植物*/
    makeJs.prototype.noHeadEat=function(){
        this.stopWalk();
        var img=this.mjs.getElementsByTagName("img");
        img[0].src="img/ZombieLostHeadAttack.gif";
    }
    /* 创建倒下僵尸*/
    makeJs.prototype.noWalkJs=function(){
        this.stopWalk();
        var img=this.mjs.getElementsByTagName("img");
        img[0].src="img/ZombieDie.gif";

    }
    /*僵尸死亡*/
    makeJs.prototype.overJs=function(){
        /* this.mjs.style.display="none";*/
        odal.removeChild(this.mjs);
    }
    /*草坪对象*/
    function greenCP(){
        this.sods=this.caodi();
    }
    /*草坪*/
    greenCP.prototype.caodi=function(){
        var sod = document.createElement("div");
        sod.setAttribute("class","caoping");
        odal.appendChild(sod);
        sod.style.animation="cao 0.7s linear both";
        return sod;
    }
    /*滚*/
    greenCP.prototype.runPlant=function(){
        /*卷轴*/
        var sodRoll = document.createElement("img");
        sodRoll.src="img/SodRoll.png"
        sodRoll.setAttribute("class","juanzhou");
        odal.appendChild(sodRoll);
        /*卷盖*/
        var sodRollCap = document.createElement("img");
        sodRollCap.src="img/SodRollCap.png"
        sodRollCap.setAttribute("class","caogai");
        odal.appendChild(sodRollCap);
        /*草坪移动*/
        sodRoll.style.animation="juan 0.7s linear both";
        sodRollCap.style.animation="gai 0.7s linear both";
    }
    /*植物对象*/
    function zhiwu(){
        this.zw=this.wanDou();
        this.blood=3;
    }
    /*创建植物*/
    zhiwu.prototype.wanDou=function(){
        var car = document.createElement("img");
        car.src = "img/Peashooter.gif";
        car.setAttribute("class", "cars");
        odal.appendChild(car);
        return car;
    }
    /*创建子弹*/
    zhiwu.prototype.zidan=function(){
        var pd = document.createElement("img");
        pd.src = "img/PB00.gif";
        pd.style.position ="absolute";
        pd.style.zIndex = 999;
        pd.style.left = this.zw.offsetLeft+30 + "px";
        pd.style.top = this.zw.offsetTop-3 + "px";
        odal.appendChild(pd);
        return pd;
    }
    /*子弹射击*/
    zhiwu.prototype.sheji=function(js){
        var This=this;
        This.stop=setInterval(function(){
            var pd=This.zidan();
            pd.time = setInterval(function () {
                pd.style.left = pd.offsetLeft + 11 + "px";
                if (pd.offsetLeft >=js.mjs.offsetLeft + 65) {
                    clearInterval(pd.time);
                    pd.time = null;
                    pd.src = "img/PeaBulletHit.gif";
                    setTimeout(function () {
                        odal.removeChild(pd);
                    }, 300)
                    js.blood--;

                }
                /*判断僵尸接近植物时的状态*/
                switch ((js.mjs.offsetLeft) <= (This.zw.offsetLeft-30)) {
                    case true:
                        clearInterval(pd.time);
                        pd.time = null;
                        This.blood--;
                        switch (js.blood) {
                            case 1:
                                js.lostHead();
                                js.noHeadEat();
                                js.stopWalk();
                            default :
                                switch(js.blood<=0){
                                    case true:
                                        This.stopzd();
                                        js.noWalkJs();
                                        setTimeout(function () {
                                            js.overJs();
                                            stopSun();
                                            This.over();
                                            end.style.display="block";
                                        }, 1700)
                                        break;
                                    default :
                                        js.HeadEat();
                                        break;
                                }
                                break;
                        }
                        switch (This.blood) {
                            case 0:
                                This.over();
                                stopSun();
                                switch (js.blood) {
                                    case 1:
                                        js.lostHead();
                                        js.walkJs();
                                        js.noHead();
                                        setTimeout(function () {
                                            js.overJs();
                                            end.style.display="block";
                                            endBorder();
                                        }, 1500)
                                        break;
                                    default :
                                        switch(js.blood<=0) {
                                            case true:
                                                js.noWalkJs();
                                                setTimeout(function () {
                                                    js.overJs();
                                                    end.style.display="block";
                                                    endBorder();
                                                }, 1500)
                                                break;
                                            default :
                                                js.headEatWalk();
                                                setTimeout(function () {
                                                    js.overJs();
                                                    end.style.display="block";
                                                    endBorder();
                                                }, 1500)
                                                break;
                                        }
                                        break;
                                }
                                break;
                        }
                        break;
                    /*僵尸未接近植物是的状态*/
                    default :
                        switch (js.blood) {
                            case 1:
                            	js.lostHead();
                                js.noHead();
                                js.stopWalk();
                                break;
                            case 0:
                                js.noWalkJs();
                                This.stopzd();
                                setTimeout(function(){
                                    js.overJs();
                                    stopSun();
                                    This.over();
                                    end.style.display="block";
                                },1700)
                                break;
                        }
                }
            }, 30)
        },1500)
    }
    /*停止射击*/
    zhiwu.prototype.stopzd=function(){
        clearInterval(this.stop);
        this.stop=null;
    }
    /*植物死亡*/
    zhiwu.prototype.over=function(){
        this.stopzd();
        odal.removeChild(this.zw);
    }
    /*透明植物*/
    function touMing(){
        var cars = document.createElement("img");
        cars.src = "img/Peashooter.gif";
        cars.setAttribute("class", "carss");
        odal.appendChild(cars);
        return cars;
    }

    /*开场草地平铺*/
    setTimeout(function() {
        jsBlock.style.visibility="hidden";
        otg.style.animation="back-pic 0.8s linear both";
        otg.style.webkitAnimation="back-pic 0.8s linear both";
        setTimeout(function() {
            var plant = new greenCP();
            plant.caodi();
            plant.runPlant();
           setTimeout(function(){
                one.style.display="block";
               setTimeout(function(){
                   one.style.display="none";
               },5000)
           },1000)
        },1000)
    },1500)

    /*开机显示5个僵尸*/
    setTimeout(function(){
        for (var i = 0; i < 5; i++) {
            var mj= new Js();
            mj.style.zIndex=1;
            mj.style.top=Math.random()*(jsBlock.offsetHeight-144)+"px";
            mj.style.left=Math.random()*(jsBlock.offsetWidth-166)+"px";
            jsBlock.appendChild(mj);
        }
    },800)
    /*调用阳光*/
    var sunDown=new sun();
    /*游戏结束时页面清除阳光*/
    function stopSun(){
        clearInterval(sunDown.sunRun)
        sunDown.sun.style.display="none";
    };

    setTimeout(function(){
        /*点击选项卡,创建植物,选项卡变黑*/
        dp.onclick = function () {
            var numa=document.getElementById("sSunNum").innerHTML;
            if(numa>=100) {
                var zhi = new zhiwu();
                var car = zhi.zw;
                var cars = new touMing();
                /*点击选项卡后图片变黑*/
                var pics = dp.getElementsByTagName("img");
                pics[1].style.display = "none";
                /*获取草地*/
                var plant = new greenCP();
                var sod = plant.caodi();
                /*植物随随鼠标移动*/
                document.onmousemove = function (ev) {
                    var e = ev || window.event;
                    car.style.top = e.clientY - car.offsetHeight / 2 + "px";
                    car.style.left = e.clientX - car.offsetWidth / 2 + "px";
                    /*判断显示透明植物的位置*/
                    if (e.clientY < sod.offsetTop || e.clientY > sod.offsetTop + sod.offsetHeight) {
                        car.onclick = function () {
                            odal.removeChild(car);
                            odal.removeChild(cars);
                            pics[1].style.display = "block";
                        }
                        car.oncontextmenu = function () {
                            odal.removeChild(car);
                            odal.removeChild(cars);
                            pics[1].style.display = "block";
                        }
                    } else {
                        cars.style.top = sod.offsetTop + sod.offsetHeight / 2 - cars.offsetHeight / 2 - 10 + "px";
                        var sw = sod.offsetWidth / 9;
                        var sl = sod.offsetLeft;
                        /*种植植物位置*/
                        for (var i = 1; i < 10; i++) {
                            if (e.clientX > sl + sw * (i - 1) && e.clientX < sl + sw * i) {
                                cars.style.display = "block";
                                cars.style.left = sl + sw * i - sw / 2 - cars.offsetWidth / 2 + "PX"
                            }
                        }
                        /*点击种成植物*/
                        car.onclick = function () {

                            var sunNum = document.getElementById("sSunNum");
                            var num = parseInt(sunNum.innerHTML);
                            num -= 100;
                            sunNum.innerHTML = num;
                            car.style.top = cars.offsetTop + "px";
                            car.style.left = cars.offsetLeft + "px";
                            odal.removeChild(cars);
                            document.onmousemove = null;
                            pics[1].style.display = "block";
                            car.onclick = null;
                            car.oncontextmenu = null;
                            /*行走的僵尸*/
                            var js = new makeJs();
                            js.walkJs();
                            /*发射子弹*/
                            zhi.sheji(js);
                        }
                    }
                }
                dp.onclick=null;
            }else{
                two.style.display="block";
                setTimeout(function(){
                    two.style.display="none";
                },5000)
            }
        }
    },2000)
}
