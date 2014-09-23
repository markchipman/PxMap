/*global module:false*/
module.exports = function(grunt) {

    var BANNER_TEMPLATE = '/*! <%= pkg.title %> | <%= pkg.homepage %> | <%= grunt.template.today("yyyy-mm-dd") %> */\n';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: BANNER_TEMPLATE
            },
            dist: {
                src: [
                    
                ],
                dest: '<%= pkg.name %>.js'
            }
        },
        jshint: {
            files: [ 'gruntfile.js', 'js/*.js' ],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    PxTouch: true,
                    console: true
                }
            }
        },
        watch: {
            cj: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'concat', 'copy', 'uglfiy']
            }
        },
        uglify: {
            options: {
                banner: BANNER_TEMPLATE
            },
            dist: {
                src: ['<%= concat.dist.dest %>'],
                dest: '<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
