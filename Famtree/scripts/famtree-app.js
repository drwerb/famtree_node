angular.module('FamtreeApp', ['ng', 'ngResource'])

    .controller('PersonsCtrl', ['$resource', function ($resource) {
        var personResource = $resource('/api/person/', {}, {
            query: { isArray: true },
            post: {
                method: 'POST',
            }
        });
        var me = this;

        me.persons = null;
        me.newFirstName = null;
        me.newLastName = null;
        me.newMiddleName = null;

        me.addPerson = function () {
            personResource.post({
                firstName: me.newFirstName,
                lastName: me.newLastName,
                middleName: me.newMiddleName,
            }, updatePersonList);
        };

        var
            init = function () {
                updatePersonList();
            },
            updatePersonList = function () {
                personResource.query(function (list) {
                    me.persons = list;
                });
            };

        init();
    }]);