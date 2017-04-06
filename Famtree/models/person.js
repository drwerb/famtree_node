var
    Person = function (args) {
        initProperties.call(this, args);
    },

    initProperties = function (args) {
        if (args !== undefined) {
            this.personId = args.personId;
            this.firstName = args.firstName;
            this.lastName = args.lastName;
            this.middleName = args.middleName;
        }
    };

Person.prototype.getDbObjProprtiesMapping = function () {
    return {
        personid: 'personId',
        firstname: 'firstName',
        lastname: 'lastName',
        middlename: 'middleName',
    };
}

Person.prototype.initProperties = function (args) {
    initProperties.call(this, args);
}

module.exports = Person;