$(document).ready(function(){
    $(".header").mousemove(function(e){
        //イベントオブジェクトからマウスの各座標を取得
        var cx = $(this).width()/2;
        var cy = $(this).height()/2;
		var mx = e.clientX;
		var my = e.clientY;
        var dx = cx-mx;
        var dy = cy-my;
        $('.wide_wrap div:nth-child(1)');

    　　console.log("dx:%s, dy:%s", dx, dy, , )
	});
})