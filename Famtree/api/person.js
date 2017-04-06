var express = require('express');
var router = express.Router();
var modelHelper = require('./../helpers/modelHelper');
var Person = require('./../models/person');
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://famtree:famtree@localhost:5432/famtree");


router.get('/', function (req, res) {
    db.any('\
        SELECT         \
        p.personid,  \
        p.lastname,  \
        p.firstname, \
        p.middlename \
        FROM public.persons as p;'
    )
    .then(function (data) {
        var list = data.map((p) => modelHelper.createModelFromDB(Person, p));
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

router.post('/', function (req, res) {
    console.log(req.body);
    var newPerson = new Person(req.body);
    db.one(' \
            insert into public.persons(lastname, firstname, middlename) \
            values($1, $2, $3) \
            returning personid', [
                newPerson.lastName,
                newPerson.firstName,
                newPerson.middleName,
            ]
        )
        .then(data => {
            console.log(data); // print new user id;
            res.json({ personId: data.personid });
        })
        .catch(error => {
            console.log("ERROR:", error.message || error); // print error;
            res.status(500).json({ message: "ERROR: " + (error.message || error) })
        });
});

module.exports = router;