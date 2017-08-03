let gulp = require('gulp');
let fileinclude = require('gulp-file-include');

let template = function (){
	gulp.src('./src/views/*.html').pipe(
			fileinclude({
				  prefix:"@@",
				})
			).pipe(gulp.dest('dist'));
	}

gulp.task('fileinclude',template);
