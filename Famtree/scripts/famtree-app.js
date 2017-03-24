angular.module('FamtreeApp', ['ng', 'ngResource'])

    .controller('PersonsCtrl', ['$resource', function ($resource) {
        var personResource = $resource('/api/person/', {}, {
            query: { isArray: true }
        });
        var me = this;
        me.persons = null;

        var init = function () {
            personResource.query(function (list) {
                me.persons = list;
            });
        };

        init();
    }]);