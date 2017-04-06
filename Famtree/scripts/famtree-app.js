angular.module('FamtreeApp', ['ng', 'ngResource'])

    .controller('PersonsCtrl', ['$resource', function ($resource) {
        var personResource = $resource('/api/person/', {}, {
            query: { isArray: true },
            post: {
                method: 'POST',
            },
            remove: {
                method: 'DELETE',
                url: '/api/person/:id'
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

        me.removePerson = function (person) {
            personResource.remove({ id: person.personId },
                updatePersonList,
                function () {
                    alert('Error while person remove');
                });
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