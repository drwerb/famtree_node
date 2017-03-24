var express = require('express');
var router = express.Router();
var modelHelper = require('./../helpers/modelHelper');
var Person = require('./../models/person');
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://famtree:famtree@localhost:5432/famtree");


router.get('/', function (req, res) {
    db.any('\
        SELECT         \
        p."PersonId",  \
        p."LastName",  \
        p."FirstName", \
        p."MiddleName" \
        FROM public."Persons" as p;')
    .then(function (data) {
        var list = data.map((p) => new Person(modelHelper.lowercaseFirstLetter(p)));
        res.json(list);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
        res.status(500).json({ message: "db error" });
    });

});

router.get('/[0-9]+', function (req, res) {
    res.json(new Person({
        firstName: 'Vova',
        lastName: 'Verb',
        middleName: 'Ihorevich'
    }));
});

module.exports = router;