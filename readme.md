Grunt Maven Effetive pom
=

It loads the effective maven pom as json object into grunt config.

    module.exports = function(grunt) {
    
       require('grunt-maven-effective-pom')(grunt);
       
        wiredep: {

            task: {
                src: [
                    '<%= pom.project.build.outputDirectory %>/app/index.html'
                ],
                options: {
                    directory : bowerLib
                }
            }
        }
       
    }


