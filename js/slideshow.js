---
---

$(document).ready(function(){
    jQuery.get("{{ '/img/slider/slider.html' | prepend: site.baseurl }}", { c: 'main_image' },
      function(data) {
        $('.bxslider').html(data);
        var slide = $('.bxslider').bxSlider({
            auto: true,
            pause: 7000,
            speed: 1000,
            responsive: true,
            pager: true,
            controls: false,
            mode: 'fade'
        });
      }
    );
  });