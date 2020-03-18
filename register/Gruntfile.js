module.exports = function(grunt) {
    grunt.initConfig({

        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: "index.html",
                dest: "dist/index.html"
            }
        },
        cssmin: {
            "dist/layout.css": "layout.css"
        },
        uglify: {
            release: {
                files: {
                    "dist/varigate.js": "varigate.js",
                }
            }
        },
        copy: { 
            html: {
                src: "./index.html", 
                dest: "./dist/index.html"
            },
            css: {
                src: "./layout.css",
                dest: "./dist/layout.css"
            },
            js: {
                src: "./varigate.js",
                dest: "./dist/varigate.js"
            }
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("release", ['copy', 'htmlmin', 'cssmin', 'uglify']);
} 
