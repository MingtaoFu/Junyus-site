/**
 *
 * Created by mingtao on 12/8/15.
 */

app.
    animation('.viewContainer', function($rootScope) {
        return {
            addClass: function(ele, className, done) {
                if (className === 'down') {
                    $rootScope.isTran = true;
                    $(ele).animate({
                        'top': '-100%'
                    }, 800, function() {
                        $rootScope.isTran = false;
                        $rootScope.down = true;
                    });
                } else {
                    done();
                }
            },
            removeClass: function(ele, clsName, done) {
                if (clsName === 'down') {
                    $rootScope.isTran = true;
                    $(ele).animate({
                        'top': '0'
                    }, 800, function() {
                        $rootScope.isTran = false;
                        $rootScope.down = false;
                    });
                } else { done(); }
            }
        }
    })
    .directive("scroll", function ($window, $animate, $rootScope) {
        return function(scope, element, attrs) {
            angular.element('#viewContainer').on("mousewheel", function(e) {
                if($rootScope.isTran == true) {
                    e.preventDefault();
                    return;
                }

                if(angular.element(window).scrollTop() == 0) {
                        if ($rootScope.down == false && e.originalEvent.deltaY > 0) {
                            e.preventDefault();
                            $animate.addClass(angular.element('#viewContainer'), 'down');
                        } else if ($rootScope.down == true && e.originalEvent.deltaY < 0) {
                            e.preventDefault();
                            $animate.removeClass(angular.element('#viewContainer'), 'down');
                        }
                }

                scope.$apply();
            });
        };
    });