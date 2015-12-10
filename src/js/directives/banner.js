// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby").directive('banner', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var options = scope.$eval($(element).attr('data-options'));
            scope.$on('repeat_done', function() {
                // carousel init
            	$(element).owlCarousel(options);
            });
        }
    };
});
