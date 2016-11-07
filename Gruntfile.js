module.exports=function(grunt){


	// Project configuration.
		grunt.initConfig({
		  concat: {
		    js: {
		      src: ['lib/js/app.js', 'lib/js/controller.js', 'lib/js/navbar.js'],
		      dest: 'build/js/scripts.js',
		    },
		    vendor:{
		    	src:['lib/angular/angular.min.js','lib/angular/angular-route.min.js'],
		    	dest:'build/js/vendorscripts.js',
		    },
		    css:{
		    	src: ['lib/css/index.css','lib/css/bootstrap.css'],
		     dest: 'build/css/styles.css',
		    },
		    partials:{
		    	src: ['index.html','partials/newUsers.html','/partials/users.html','viewUser.html'],
		        dest: 'build/html/partials.html',
		    },
		  },

		  // watch the files
		 watch: {
		  options:{
		  	livereload:true
		 	},
		  js: {
		    files: 'lib/js/**/*.js',
		    tasks: ['concat:js'],
		    },
		  css:{
		  	files:'lib/css/**/*.css',
		  	tasks:['concat:css','cssmin'],
		  },  
		  partials:{
		  	files: 'partials/**/*.html',
		    tasks: ['concat:partials'],
		  },
		},

		// mimmification
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'lib/css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'lib/css',
		      ext: '.min.css'
		    }]
		  }
		},
	    connect: {
    		server: {
      			options: {
      				hostname:'localhost',
        			port: 3000,
        			base: 'builds',
        			livereload:true
      			}
    	 	 }
  		},
  		karma: {
		  unit: {
		    configFile: 'karma.conf.js',
		    port: 9999,
		    singleRun: true,
		    browsers: ['PhantomJS'],
		    logLevel: 'ERROR',
		    configFile: 'karma.conf.js',
    		autoWatch: true,
		    files: [
				      { src: ['lib/js/tests/unit/**/*.js'], served: true },
				      { src: ['lib/**/*.js'], served: true, included: false }
				    ]
		  }
		},

	});
	// to concat the js files (partials)

	grunt.loadNpmTasks('grunt-contrib-concat');

	// to watch the files for changes

	grunt.loadNpmTasks('grunt-contrib-watch');

	//mimmification

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// to connect to the web browser
	grunt.loadNpmTasks('grunt-contrib-connect');
 
 	// testing
	grunt.loadNpmTasks('grunt-karma');

	// to start build intially

	grunt.registerTask('default',['cssmin','connect','concat','watch']);
		
		};

