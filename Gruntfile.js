/*global module:true*/
module.exports = function(grunt) {
    grunt.initConfig({
        htmlhint: {
            options: {
                htmlhintrc: '.htmlhintrc'
            },
            src: '*.html'
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: '*.css'
        },
        eslint: {
            options: {
                eslintrc: '.eslintrc.json'
            },
            target: ['*.js']
        },
        mocha: {
            test: {
                src: ['test/index.html'],
            },
            options: {
                run: true,
                reporter: 'Dot'
            }
        },
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files: {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        cssmin: {
            'dist/rectangle.css': 'rectangle.css'
        },
        uglify: {
            release:{
                files: {
                    'dist/rectangle.js': 'rectangle.js',
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    
    grunt.registerTask('release', [ 'htmlhint', 'csslint', 'eslint','mocha','uglify', 'cssmin', 'htmlmin']);
};