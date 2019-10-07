'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const src = './assets/sass';
const dest = './assets/css';


sass.compiler = require('node-sass');

gulp.task('sass', () => {
    gulp.src(`${src}/**/styles.scss`)
        .pipe(sass())
        .pipe(gulp.dest(dest))
});
gulp.task('watch', function() {
    gulp.watch(`${src}/**/*.scss`, gulp.series('sass'));
});
