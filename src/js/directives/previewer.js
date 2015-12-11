// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby").directive('previewer', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var options = scope.$eval($(element).attr('data-options'));
            var rate = parseFloat(scope.$eval($(element).attr('data-rate')));
            var style = {
                position: "absolute",
                top: "50%",
                width: $(element).width() || $(window).width(),
                height: ($(element).width() || $(window).width()) / rate,
                "line-height": ($(element).width() || $(window).width()) / rate +"px",
                "margin-top": -($(element).width() || $(window).width()) / rate / 2
            }
            $(element).css(style)
            scope.$on('repeat_done', function() {
                // carousel init
                $(element).owlCarousel(options);
            });
        }
    };
});
