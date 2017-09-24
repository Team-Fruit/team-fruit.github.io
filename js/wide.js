---
---

$(document).ready(function() {
    (function() {
        var args = arguments;
        var header = $(".header");
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
            
            Array.prototype.forEach.call(args, function(node) {
                node.target.css('transform', 'translate3d('+dx*scl*node.scale+'px, '+dy*scl*node.scale+'px, 0)');
            });
            
            // 次のanimationを登録
            setTimeout(animating, frameTime);
        }
    }(
        { target: $('#wide_layer_1'), scale: -1 },
        { target: $('#wide_layer_2'), scale: 1 },
        { target: $('#wide_layer_3'), scale: 5 },
        { target: $('#wide_layer_4'), scale: 5 }
    ));

    (function() {
        var b = new TimelineMax({
            repeat: 300,
            onUpdate: function() {
                $('#wide_ctrl_slider').slider("value", b.progress());
            },
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
        }($(".wide-layer")),
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
        }($(".wide-wrap"))]);

        $('#wide_ctrl_slider').slider({
            range: !1,
            min: 0,
            max: 1,
            step: .001,
            slide: function(e, t) {
                b.pause(),
                b.progress(t.value),
                $("html, #wide_slider, .ui-slider-handle").one("mouseup", function(e) {
                    b.resume()
                });
            }
        });
    }());

    (function() {
        var i = null;
        var header = $(".wide-header");
        var ctrl = $(".wide-ctrl");
        header.on({
            'touchstart': function(e) {
                e.preventDefault();
                header.toggleClass('wide-shown');
                ctrl.on('touchstart touchmove touchend', function(e) {
                    e.preventDefault();
                });
            },
            'mousemove': function() {
                clearTimeout(i);
                header.addClass('wide-shown');
                header.css('cursor', 'auto');
                i = setTimeout(function () {
                    header.removeClass('wide-shown');
                    header.css('cursor', 'none');
                }, 1000);
            },
            'mouseleave': function() {
                clearTimeout(i);
                header.removeClass('wide-shown');
                header.css('cursor', 'none');
            }
        });
    }());

    (function() {
        var animData = {
            wrapper: $('#wide_layer_3')[0],
            animType: 'svg',
            loop: true,
            prerender: true,
            autoplay: true,
            path: '{{ "/img/entities/data.json" | prepend: site.baseurl }}'
        };
        var anim = bodymovin.loadAnimation(animData);
    })();
})