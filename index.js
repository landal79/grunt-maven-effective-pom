'use strict';

var cp = require('child_process');
var fs = require('fs');
var xml2js = require('xml2js');

module.exports = function (grunt) {

    var parser = new xml2js.Parser({explicitArray : false});
    var pom = null;
    parser.addListener('end', function(result) {
        pom = result;
    });
    cp.execSync('mvn help:effective-pom -Doutput=target/effective-pom.xml');
    parser.parseString(fs.readFileSync('target/effective-pom.xml', 'utf8'));

    grunt.config('pom',pom);

}