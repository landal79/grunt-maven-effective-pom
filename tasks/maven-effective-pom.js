/*
 * grunt-maven-effective-pom
 *
 * Copyright (c) 2015 Alex Landini, contributors
 * Licensed under the MIT license.
 */

//'use strict';

var cp = require('child_process');
var fs = require('fs');
var xml2js = require('xml2js');

module.exports = function (grunt) {

    grunt.registerMultiTask('mavenEffectivePom', 'Loads effective maven pom', function () {

        var options = this.options({
            file : "target/effective-pom.xml",
	    varName : 'pom'
        });

        grunt.verbose.writeflags(options, "Options");

        var parser = new xml2js.Parser({explicitArray: false});
        var pom = null;
        parser.addListener('end', function (result) {
            grunt.config.set(options.varName, result);
            grunt.verbose.writeln('loaded maven pom for project: ' + grunt.config('pom.project.artifactId'));
        });

        cp.execSync('mvn help:effective-pom -Doutput=' + options.file);
        parser.parseString(fs.readFileSync(options.file, grunt.file.defaultEncoding));

    });

};

