Grunt Maven Effetive pom
=

It loads the effective maven pom as json object into grunt config.

     module.exports = function(grunt) {
    
        require('time-grunt')(grunt);
        require('load-grunt-tasks')(grunt);
    
        grunt.initConfig({
    
            pkg: grunt.file.readJSON('package.json'),
    
            mavenEffectivePom : {
                main : {
                    options : {
                        file : "target/effective-pom.xml",
                         varName : 'pom'
                    }
                }
            },
    
            config : {
                srcFolder : 'src/main/javascript',
                webappFolder : 'src/main/webapp',
                appFolder : '<%= pom.project.build.directory %>/<%= pom.project.build.finalName %>/app',
                destSrcFolder : '<%= config.appFolder %>/js',
                bowlerLib : 'target/<%= pom.project.build.finalName %>/app/lib'
            },
            ...                   
       
        });

        grunt.registerTask('dev', ['mavenEffectivePom','bower-install-simple:dev', 'copy','includeSource','wiredep']);      
    };


