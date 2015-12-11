// by dribehance <dribehance.kksdapp.com>
angular.module("Nearby").directive('banner', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var options = {
                autoPlay: 10000,
                singleItem: true,
                pagination: false
            }
            options = angular.extend({},options,scope.$eval($(element).attr('data-options')));
            scope.$on('repeat_done', function() {
                // carousel init
                $(element).owlCarousel(options);
            });
        }
    };
});
