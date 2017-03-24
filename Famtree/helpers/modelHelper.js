var ModelHelper = function () { }

ModelHelper.prototype.lowercaseFirstLetter = function (obj) {
    var copy = {};
    for (var prop in obj) {
        if (!obj.hasOwnProperty(prop)) continue;
        copy[prop.charAt(0).toLowerCase() + prop.slice(1)] = obj[prop];
    }
    return copy;
}

module.exports = new ModelHelper();