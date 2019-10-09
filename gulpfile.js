'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');

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
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(gulp.dest(path.dist.css));
    done();
});

gulp.task('images', (done) => {
    gulp.src(path.src.img + '/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img));
    done();
});

gulp.task('js', (done)=>{

    done();
});

gulp.task('watcher', () => {
    gulp.watch(path.src.scss, gulp.series('scss'));
    gulp.watch(path.src.img + '/*', gulp.series('images'));
});

gulp.task('build', gulp.series('scss', 'images', done => {
    done()
}));

gulp.task('default', gulp.series('scss', 'images', 'watcher'), done => {
    done();
});
