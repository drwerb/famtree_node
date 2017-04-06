var ModelHelper = function () { }

ModelHelper.prototype.lowercaseFirstLetter = function (obj) {
    var copy = {};
    for (var prop in obj) {
        if (!obj.hasOwnProperty(prop)) continue;
        copy[prop.charAt(0).toLowerCase() + prop.slice(1)] = obj[prop];
    }
    return copy;
}

ModelHelper.prototype.uppercaseFirstLetter = function (obj) {
    var copy = {};
    for (var prop in obj) {
        if (!obj.hasOwnProperty(prop)) continue;
        copy[prop.charAt(0).toUpperCase() + prop.slice(1)] = obj[prop];
    }
    return copy;
}

ModelHelper.prototype.createModelFromDB = function (modelClass, args) {
    var obj = new modelClass(),
        propertiesMapping = obj.getDbObjProprtiesMapping(),
        mappedArgs = {},
        modelPropName;

    for (var dbPropName in propertiesMapping) {
        modelPropName = propertiesMapping[dbPropName];
        mappedArgs[modelPropName] = args[dbPropName];
    }

    obj.initProperties(mappedArgs);
    return obj;
}

module.exports = new ModelHelper();