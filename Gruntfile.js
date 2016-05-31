module.exports = function(grunt) {
        grunt.initConfig({
            shell: {
                pythonServer: {
                    options: {
                        stdout: true
                    },
                    command: 'python -m SimpleHTTPServer'
                }
        },

        less: {
              development: {
                options: {
                  compress: true,
                  yuicompress: true,
                  optimization: 2
                },
                files: {
                  "app/dist/styles/main.css": "less/main.less" // destination file and source file
                }
              }
            },
            watch: {
                      styles: {
                        files: ['less/**/*.less'], // which files to watch
                        tasks: ['less'],
                        options: {
                          nospawn: true
                        }
                      }
              }
        });






        grunt.loadNpmTasks('grunt-shell');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('default', ['shell:pythonServer']);

        grunt.registerTask('gen-less', ['watch']);
        grunt.registerTask('build', ['less']);
};
