/**
 * Created by mingtao on 12/8/15.
 */

var status = 0;
var isMoving = false;
$(document).on('mousewheel', function(event, delta, deltaX, deltaY) {
    //在顶部的时候屏蔽默认的下滑动作
    if ( $(window).scrollTop() == 0) {

        if (deltaY == -1 && status == 0) {
            $('#viewContainer').addClass('down');
            event.preventDefault();
            isMoving = true;
            status = 1;
            //$(window).scrollTop(1);
        } else if (deltaY == 1 && status == 1) {
            $('#viewContainer').removeClass('down');
            event.preventDefault();
            status = 0;
            isMoving = true
        }
    }
});

$(document).swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        //$(this).text("You swiped " + direction );
        console.log(direction);
    },
    threshold:2
});

window.addEventListener('mousewheel', function(e) {
    console.log(e);
});
