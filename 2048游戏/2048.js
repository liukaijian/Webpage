$.fn.make2048=function(option) {
    var defaultOption = {
        width: 4,
        height: 4,
        style: {
            background_color: "rgb(184,175,158)",
            block_background_color: "rgb(204,192,178)",
            padding: 18,
            block_size: 100,
            block_style: {
                "font-family": "微软雅黑",
                "font-weight": "bold",
                "text-align": "center"
            }
        },
        blocks: [
            {
                level: 0,
                value: 2,
                style: {"background-color": "rgb(238,228,218)", "color": "rgb(124,115,106)", "font-size": 58}
            },
            {
                level: 1,
                value: 4,
                style: {"background-color": "rgb(236,224,200)", "color": "rgb(124,115,106)", "font-size": 58}
            },
            {
                level: 2,
                value: 8,
                style: {"background-color": "rgb(242,177,121)", "color": "rgb(255,247,235)", "font-size": 58}
            },
            {
                level: 3,
                value: 16,
                style: {"background-color": "rgb(245,149,99)", "color": "rgb(255,250,235)", "font-size": 50}
            },
            {
                level: 4,
                value: 32,
                style: {"background-color": "rgb(244,123,94)", "color": "rgb(255,247,235)", "font-size": 50}
            },
            {
                level: 5,
                value: 64,
                style: {"background-color": "rgb(247,93,59)", "color": "rgb(255,247,235)", "font-size": 50}
            },
            {
                level: 6,
                value: 128,
                style: {"background-color": "rgb(236,205,112)", "color": "rgb(255,247,235)", "font-size": 42}
            },
            {
                level: 7,
                value: 256,
                style: {"background-color": "rgb(237,204,97)", "color": "rgb(255,247,235)", "font-size": 42}
            },
            {
                level: 8,
                value: 512,
                style: {"background-color": "rgb(236,200,80)", "color": "rgb(255,247,235)", "font-size": 42}
            },
            {
                level: 9,
                value: 1024,
                style: {"background-color": "rgb(237,197,63)", "color": "rgb(255,247,235)", "font-size": 34}
            },
            {
                level: 10,
                value: 2048,
                style: {"background-color": "rgb(238,194,46)", "color": "rgb(255,247,235)", "font-size": 34}
            },
            {
                level: 11,
                value: 4096,
                style: {"background-color": "rgb(61,58,51)", "color": "rgb(255,247,235)", "font-size": 34}
            }
        ],
        animateSpeed: 300
    }
    var state = [];
    option = $.extend({}, defaultOption, option);
    console.log("游戏配置", option);
    if (this.length > 1) throw"一次只能开始一个游戏";
    if (this.length == 0)throw"游戏未找到容器";
    var $this = $(this[0]);
    $this.css({
        "background-color": option.style.background_color,
        "border-radius": option.style.padding,
        "position": "relative",
        "-webkit-user-select": "none",
    })
    var getPosition = function (x, y) {
        return {
            "top": option.style.padding + y * (option.style.block_size + option.style.padding),
            "left": option.style.padding + x * (option.style.block_size + option.style.padding)
        }
    }
    var getEmptyBlockIndexs = function () {
        var emptyBlockIndexs = [];
        $(state).each(function (i, o) {
            if (o == null)emptyBlockIndexs.push(i);
        })
        return emptyBlockIndexs;
    }

    var getCoordinate = function (index) {
        return {
            x: index % option.width,
            y: Math.floor(index / option.width)
        }
    }

    var getIndex = function (x, y) {
        return x + y * option.width;
    }
    var getBlock = function (x, y) {
        return state[getIndex(x,y)];
    }
    var buildBackground = function () {
        var backgrounds = [];
        for (var x = 0; x < option.width; x++) {
            for (var y = 0; y < option.height; y++) {
                state.push(null);
                var bg_block = $("<div></div>");
                var position = getPosition(x, y);
                bg_block.css({
                    "width": option.style.block_size,
                    "height": option.style.block_size,
                    "background-color": option.style.block_background_color,
                    "position": "absolute",
                    "top": position.top,
                    "left": position.left,
                })
                backgrounds.push(bg_block);
            }
        }
        $this.append(backgrounds);
        $this.width((option.style.padding + option.style.block_size) * option.width + option.style.padding);
        $this.height((option.style.padding + option.style.block_size) * option.height + option.style.padding);
    }
    var buildBlock = function (level, x, y) {
        var emptyBlockIndexs = getEmptyBlockIndexs();
        if (emptyBlockIndexs.length == 0)return false;
        var putIndex;
        if (x != undefined && y != undefined) {
            putIndex = getIndex(x, y)
        } else {
            putIndex = emptyBlockIndexs[Math.floor(Math.random() * emptyBlockIndexs.length)];
        }
        var block;
        if (level !== undefined) {
            block = $.extend({}, option.blocks[level]);
        } else {
            block = $.extend({}, Math.random() >= 0.5 ? option.blocks[0] : option.blocks[1])
        }
        var coordinate = getCoordinate(putIndex);
        var position = getPosition(coordinate.x, coordinate.y);
        var blockDom = $("<div></div>");
        blockDom.addClass("block_" + coordinate.x + "_" + coordinate.y);
        blockDom.css($.extend(option.style.block_style, {
            "position": "absolute",
            "top": position.top + option.style.block_size / 2,
            "left": position.left + option.style.block_size / 2,
            "width": 0,
            "height": 0,
        }, block.style));
        $this.append(blockDom);
        state[putIndex] = block;
        blockDom.animate({
            "width": option.style.block_size,
            "height": option.style.block_size,
            "line-height": option.style.block_size + "px",
            "top": position.top,
            "left": position.left,
        }, option.animateSpeed, (function (blockDom) {
            return function () {
                blockDom.html(block.value);
            }
        })(blockDom));
        return true;
    }
    var lastMovedTime=0;
    var move = function(direction) {
        if(new Date()-lastMovedTime<option.animateSpeed+20)return;
        lastMovedTime=new Date();
        var startX,endX,startY,endY,modifyX,modifyY;
        var doActioned=false;
        switch (direction) {
            case "up":
            case "up":
                startX = 0;
                endX = option.width - 1;
                startY = 1;
                endY = option.height - 1;
                modifyX = 0;
                modifyY = -1;
                break;
            case "down":
                startX = 0;
                endX = option.width - 1;
                startY = option.height - 2;
                endY = 0;
                modifyX = 0;
                modifyY = 1;
                break;
            case "left":
                startX = 1;
                endX = option.width - 1;
                startY = 0;
                endY = option.height - 1;
                modifyX = -1;
                modifyY = 0;
                break;
            case "right":
                startX = option.width - 2;
                endX = 0;
                startY = 0;
                endY = option.height - 1;
                modifyX = 1;
                modifyY = 0;
                break;
        }
        for (var x = startX; x <=Math.max(startX,endX) && x>=Math.min(startX,endX);endX>startX? x++:x--) {
            for (var y = startY; y <= Math.max(startY, endY) && y >= Math.min(startY, endY); endY > startY ? y++ : y--) {
                var block = getBlock(x, y);
                if (block == null)continue;
                var target_coordinate = {x: x, y: y};
                var target_block;
                var moved = 0;
                do {
                    if (++moved > Math.max(option.width, option.height)) break;
                    target_coordinate.x += modifyX;
                    target_coordinate.y += modifyY;
                    target_block = getBlock(target_coordinate.x, target_coordinate.y);
                    if (direction == "up" || direction == "down") {
                        if (target_coordinate.y == 0 || target_coordinate.y == option.height - 1)break;
                    }
                    if (direction == "left" || direction == "right") {
                        if (target_coordinate.x == 0 || target_coordinate.x == option.width - 1)break;
                    }
                } while (target_block == null)

                var blockDom = $(".block_" + x + "_" + y);
                if (target_block == null) {
                    var position = getPosition(target_coordinate.x, target_coordinate.y);
                    state[getIndex(x, y)] = null;
                    state[getIndex(target_coordinate.x, target_coordinate.y)] = block;
                    blockDom.removeClass();
                    blockDom.addClass("block_" + target_coordinate.x + "_" + target_coordinate.y);
                    blockDom.animate({
                        "top": position.top,
                        "left": position.left,
                    }, option.animateSpeed);
                } else if (target_block.value == block.value && !target_block.justModified) {
                    var position = getPosition(target_coordinate.x, target_coordinate.y);
                    var updatedBlock = $.extend({}, option.blocks[block.level + 1]);
                    if (updatedBlock.level == option.blocks.length - 1) {
                        gameEnd();
                    }
                    updatedBlock.justModified = true;
                    state[getIndex(x, y)] = null;
                    state[getIndex(target_coordinate.x, target_coordinate.y)] = updatedBlock;
                    var target_blockDom = $(".block_" + target_coordinate.x + "_" + target_coordinate.y);
                    blockDom.animate({
                        "top": position.top,
                        "left": position.left,
                    }, option.animateSpeed, (function (blockDom, target_blockDom, target_coordinate, updatedBlock) {
                        return function () {
                            blockDom.remove();
                            target_blockDom.html(updatedBlock.value);
                            target_blockDom.css(updatedBlock.style);
                        };
                    }(blockDom, target_blockDom, target_coordinate, updatedBlock)));
                } else if (target_block.value != block.value || moved > 1) {
                    target_coordinate.x = target_coordinate.x - modifyX;
                    target_coordinate.y = target_coordinate.y - modifyY;
                    if (target_coordinate.x == x && target_coordinate.y == y)continue;
                    var position = getPosition(target_coordinate.x, target_coordinate.y);
                    state[getIndex(x, y)] = null;
                    state[getIndex(target_coordinate.x, target_coordinate.y)] = block;
                    blockDom.removeClass();
                    blockDom.addClass("block_" + target_coordinate.x + "_" + target_coordinate.y);
                    blockDom.animate({
                        "top": position.top,
                        "left": position.left
                    }, option.animateSpeed)
                } else {
                    continue;
                }
                doActioned = true;
            }
        }
        for(var x=0;x<option.width;x++){
            for(var y=0;y<option.height;y++){
                var block = getBlock(x, y);
                if (block == null)continue;
                delete block.justModified;
            }
        }
        if(doActioned){
            buildBlock();
        }
    }
    var keyClass=function (event) {
        switch (event.which) {
            case 38:
                move("up");
                break;
            case 40:
                move("down");
                break;
            case 37:
                move("left");
                break;
            case 39:
                move("right");
                break;
        }
    }

    var start=function() {
        alert("游戏规则：点击开始按钮开始游戏，请使用上下左右四键控制游戏运行，" +
            "相同数字值的方块相撞值会相加得到的和会成为一个新的方块的值，累计方块值达到到2048，游戏胜利")
        $this.html(" ");
        state=[];
        buildBackground();
        $(document).on("keydown",keyClass);
        buildBlock();
        buildBlock();
    }

    $(document).ready(function(){
        $("#bt1").click(start);
        buildBackground();

    })
}
