$(document).ready(function() {
    (function() {
        var header = $(".header");
        var layer_1 = $('#wide_layer_1');
        var layer_2 = $('#wide_layer_2');
        var layer_3 = $('#wide_layer_3');
        var layer_4 = $('#wide_layer_4');
        var scl = -0.001;

        var fps = 10; // 30fpsに制限
        var frameTime = 1000 / fps;
        var isAnimating = false;
        var pageX = 0, pageY = 0;
        var lastX = 0, lastY = 0;

        $(document).mousemove(function(e){
            pageX = e.pageX, pageY = e.pageY;
            animation();
        });
        
        function animation() {
            if (isAnimating)
                return; 
            isAnimating = true;
            // 次のanimationを登録
            animating();
        }

        function animating() {
            var offset = header.offset();
            var cx = header.width()/2-pageX;
            var cy = header.height()/2-pageY;
            var dx = cx-offset.left;
            var dy = cy-offset.top;
            if (dx==lastX&&dy==lastY) {
                isAnimating = false;
                return;
            }
            lastX = dx, lastY = dy;
            
            layer_1.css('transform', 'translate3d('+dx*scl*-1+'px, '+dy*scl*-3+'px, 0)');
            layer_2.css('transform', 'translate3d('+dx*scl*1+'px, '+dy*scl*1+'px, 0)');
            layer_3.css('transform', 'translate3d('+dx*scl*3+'px, '+dy*scl*3+'px, 0)');    
            layer_4.css('transform', 'translate3d('+dx*scl*5+'px, '+dy*scl*5+'px, 0)');    
            
            // 次のanimationを登録
            setTimeout(animating, frameTime);
        }
    })(

    );

    (function() {
        var l = $("body"),
        r = $("main"),
        d = ($("#l-header"), $("#l-footer"), $("#l-wrap"), $("#l-intro"), $("#l-loading"), $("#js-slider__target"), $(".wide_wrap .wide_layer")),
        m = !1,
        h = !1,
        p = null,
        i = 0,
        _ = $("#main-intro"),
        v = ($("#sp-flg").css("display"), "is-loaded"),
        y = "is-active";
        M = ($(".js-calcWidth__target"), $(".js-bubble__target"));

        b = new TimelineMax({
            repeat: 300,
            onUpdate: f,
            delay: 1,
            yoyo: true
        });
        b.add([function(d) {
            TweenLite.set(d, {
                x: 0,
                y: 0
            });
            var e = new TweenMax(d, 120, {
                x: '-100%',
                y: 0,
                ease: Linear.easeNone
            });
            return e
        }($(".wide_wrap .wide_layer")),
        function(d) {
            TweenLite.set(d, {
                x: 0,
                y: 0
            });
            var e = new TweenMax(d, 120, {
                x: '100%',
                y: 0,
                ease: Linear.easeNone
            });
            return e
        }($(".wide_wrap"))]);
        
        function f() {
            $('#wide_ctrl_slider').slider("value", b.progress());
            var e = $("#wide_ctrl_slider").slider("value");
            "block" == $("#sp-flg").css("display")
            ? M.css("left", "0%")
            : M.css("left", 100 * e + "%"),
            e > 0 && .02 >= e
            ? ($("#control-bubble").removeClass(y),
            m = _.attr("data-facility-type", "0"))
            : e > .02 && .13 >= e
            ? ($("#control-bubble").addClass(y),
            m = _.attr("data-facility-type", "1"),
            h = M.find("dd").text("Table Cofun"),
            v = M.find("dt").text("テーブルコフン"),
            p = M.find("a").attr("href", "#facility-1"))
            : e > .13 && .3 >= e
            ? ($("#control-bubble").addClass(y),
            m = _.attr("data-facility-type", "3"),
            h = M.find("dd").text("Crater Cofun"),
            v = M.find("dt").text("すりばちコフン"),
            p = M.find("a").attr("href", "#facility-3"))
            : e > .3 && .5 >= e
            ? ($("#control-bubble").addClass(y),
            m = _.attr("data-facility-type", "5"),
            h = M.find("dd").text("Fuwafuwa Cofun"),
            v = M.find("dt").text("ふわふわコフン"),
            p = M.find("a").attr("href", "#facility-5"))
            : e > .5 && .75 >= e
            ? ($("#control-bubble").addClass(y),
            m = _.attr("data-facility-type", "2"),
            h = M.find("dd").text("Stage Cofun"),
            v = M.find("dt").text("ステージコフン"),
            p = M.find("a").attr("href", "#facility-2"))
            : e > .75 && .9 >= e
            ? ($("#control-bubble").addClass(y),
            m = _.attr("data-facility-type", "4"),
            h = M.find("dd").text("Info&Lounge Cofun"),
            v = M.find("dt").text("インフォ ＆ ラウンジコフン"),
            p = M.find("a").attr("href", "#facility-4"))
            : (m = _.attr("data-facility-type", "0"),
            $("#control-bubble").removeClass(y))
        }

        $('#wide_ctrl_slider').slider({
            range: !1,
            min: 0,
            max: 1,
            step: .001,
            slide: function(e, t) {
                b.pause(),
                b.progress(t.value),
                "block" == $("#sp-flg").css("display")
                ? M.css("left", "0%")
                : M.css("left", 100 * t.value + "%"),
                t.value > 0 && t.value <= .02
                ? ($("#control-bubble").removeClass(y),
                m = _.attr("data-facility-type", "0"))
                : t.value > .02 && t.value <= .13
                ? ($("#control-bubble").addClass(y),
                m = _.attr("data-facility-type", "1"),
                h = M.find("dd").text("Table Cofun"),
                v = M.find("dt").text("テーブルコフン"),
                p = M.find("a").attr("href", "#facility-1"))
                : t.value > .13 && t.value <= .3
                ? ($("#control-bubble").addClass(y),
                m = _.attr("data-facility-type", "3"),
                h = M.find("dd").text("Crater Cofun"),
                v = M.find("dt").text("すりばちコフン"),
                p = M.find("a").attr("href", "#facility-3"))
                : t.value > .3 && t.value <= .5
                ? ($("#control-bubble").addClass(y),
                m = _.attr("data-facility-type", "5"),
                h = M.find("dd").text("Fuwafuwa Cofun"),
                v = M.find("dt").text("ふわふわコフン"),
                p = M.find("a").attr("href", "#facility-5"))
                : t.value > .5 && t.value <= .75
                ? ($("#control-bubble").addClass(y),
                m = _.attr("data-facility-type", "2"),
                h = M.find("dd").text("Stage Cofun"),
                v = M.find("dt").text("ステージコフン"),
                p = M.find("a").attr("href", "#facility-2"))
                : t.value > .75 && t.value <= .9
                ? ($("#control-bubble").addClass(y),
                m = _.attr("data-facility-type", "4"),
                h = M.find("dd").text("Info&Lounge Cofun"),
                v = M.find("dt").text("インフォ ＆ ラウンジコフン"),
                p = M.find("a").attr("href", "#facility-4"))
                : ($("#control-bubble").removeClass(y),
                m = _.attr("data-facility-type", "0"));
                $("html, #wide_slider, .ui-slider-handle").one("mouseup", function(e) {
                    b.resume()
                });
            }
        });
        
        //"block" == $("#sp-flg").css("display") ? M.css("left", "0%") : M.css("left", 100 * e + "%"), e > 0 && .02 >= e ? ($("#control-bubble").removeClass(y), m = _.attr("data-facility-type", "0")) : e > .02 && .13 >= e ? ($("#control-bubble").addClass(y), m = _.attr("data-facility-type", "1"), h = M.find("dd").text("Table Cofun"), v = M.find("dt").text("テーブルコフン"), p = M.find("a").attr("href", "#facility-1")) : e > .13 && .3 >= e ? ($("#control-bubble").addClass(y), m = _.attr("data-facility-type", "3"), h = M.find("dd").text("Crater Cofun"), v = M.find("dt").text("すりばちコフン"), p = M.find("a").attr("href", "#facility-3")) : e > .3 && .5 >= e ? ($("#control-bubble").addClass(y), m = _.attr("data-facility-type", "5"), h = M.find("dd").text("Fuwafuwa Cofun"), v = M.find("dt").text("ふわふわコフン"), p = M.find("a").attr("href", "#facility-5")) : e > .5 && .75 >= e ? ($("#control-bubble").addClass(y), m = _.attr("data-facility-type", "2"), h = M.find("dd").text("Stage Cofun"), v = M.find("dt").text("ステージコフン"), p = M.find("a").attr("href", "#facility-2")) : e > .75 && .9 >= e ? ($("#control-bubble").addClass(y), m = _.attr("data-facility-type", "4"), h = M.find("dd").text("Info&Lounge Cofun"), v = M.find("dt").text("インフォ ＆ ラウンジコフン"), p = M.find("a").attr("href", "#facility-4")) : (m = _.attr("data-facility-type", "0"), $("#control-bubble").removeClass(y))
    })();
})