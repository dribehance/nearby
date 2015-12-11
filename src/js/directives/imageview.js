angular.module("Nearby").directive('imageview', function() {
    return {
        restrict: 'E',
        scope: {
            src: "="
        },
        template: "<img ng-src='{{src}}' show-on-loaded>",
        link: function(scope, element, attrs) {
            var bg_image = "../images/default.jpg";
            var rate = parseFloat(scope.$eval($(element).attr('data-rate')));
            if (!rate) {
                console.log("unexpect rate")
                return;
            }
            var style = {
                display: "block",
                width: $(element).parent().width() || $(window).width(),
                overflow: "hidden",
                "text-align": "center",
                "background-color":"#F2F0F1",
                "background-image": "url(" + bg_image + ")",
                "background-size": "100%",
                "background-position": "center center",
                "line-height": ($(element).parent().width() || $(window).width()) / rate + "px",
                "height": ($(element).parent().width() || $(window).width()) / rate
            }
            $(element).css(style);
            $(element).parent().css({
                overflow: "hidden"
            });
        }
    };
});
