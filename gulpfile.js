'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

const src = './src';
const dist = './dist';

const path = {
    src: {
        scss: src + '/scss',
        img: src + '/img'
    },
    dist: {
        css: dist + '/css',
        img: dist + '/img'
    }
};

gulp.task('scss', (done) => {
    gulp.src(path.src.scss + '/**/styles.scss')
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(gulp.dest(path.dist.css));
    done();
});

gulp.task('compress', (done) => {
    gulp.src(path.src.img + '/*')
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img));
    done();
});

gulp.task('watcher', () => {
    gulp.watch(path.src.scss, gulp.series('scss'));
    gulp.watch(path.src.img + '/*', gulp.series('compress'));
});

gulp.task('build', gulp.series('scss', 'compress', done => {
    done()
}));

gulp.task('default', gulp.series('scss', 'compress', 'watcher'), done => {
    done();
});
