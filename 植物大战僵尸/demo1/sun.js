function sun(){
    var This=this;
    var time=5000+Math.random()*5000;
    This.sunRun=setInterval(suntest,time);
    function suntest() {
        /*创建阳光 随机掉落*/
        var autoPick=false;
        var dall = document.getElementById("window-dall");
        var sun = document.createElement("img");
        sun.src = "img/Sun.gif";
        sun.setAttribute("class", "suns");
        dall.appendChild(sun);
        sun.style.left = Math.random() * (dall.offsetWidth - 78) + "px";
        var h = Math.random() * (dall.offsetHeight - 78);
        var y = 2;
        var sunRun = setInterval(function () {
            sun.style.top = sun.offsetTop + y + "px";
            if (sun.offsetTop >= h) {
                clearInterval(sunRun);
                sunRun = null;
                /*自动收集阳光或者阳光消失*/
                setTimeout(function(){
                    if(autoPick==true){
                        sun.onclick();
                    }else{
                        /*dall.removeChild(sun);*/
                        sun.style.display="none"
                    }
                },3000);
            }
        }, 30)
        /*收集阳光*/
        sun.onclick = function () {
            if (sunRun != null) {
                clearInterval(sunRun);
            }
            /*点击阳光 飞*/
             sun.setAttribute("id","sun-collected")
          /*  var a = sun.offsetLeft - 80 + sun.offsetWidth / 2;
            var b = sun.offsetTop - 20 + sun.offsetHeight / 2;
            var c = Math.sqrt(a * a + b * b);
            var speedx = a / c;
            var speedy = b / c;
            var speed = 20;
            var sunTime = setInterval(function () {
                sun.style.left = sun.offsetLeft - speed * speedx + "px";
                sun.style.top = sun.offsetTop - speed * speedy + "px";*/
               /* if (sun.offsetLeft <= 80 || sun.offsetTop <= -20) {
                    clearInterval(sunTime);
                    sunTime = null;
                    sun.style.left = "80px";
                    sun.style.top = "-20px";*/
                    setTimeout(function () {
                        dall.removeChild(sun);
                        var sunNum = document.getElementById("sSunNum");
                        var num = parseInt(sunNum.innerHTML);
                        num += 25;
                        sunNum.innerHTML = num;
                    }, 1000)
              /*  }*/
          /*  }, 20)*/

        }
        This.sun=sun;
    }
}
/*setTimeout(function(){
    sun()
},5000)*/
