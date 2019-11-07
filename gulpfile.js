'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const jpegrecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const connect = require('gulp-connect');

const src = './src';
const dist = './dist';

const path = {
    src: {
        scss: src + '/scss',
        img: src + '/img/*',
        js: src + '/js/*'
    },
    dist: {
        css: dist + '/css',
        img: dist + '/img',
        js: dist + '/js'
    }
};

gulp.task('connect', () => {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8888
    });
});

gulp.task('scss', (done) => {
    gulp.src(path.src.scss + '/styles.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(gulp.dest(path.dist.css))
        .pipe(connect.reload());
    done();
});

gulp.task('images', (done) => {
    gulp.src([path.src.img, path.src.img + '/*'])
        .pipe(plumber())
        .pipe(cache(imagemin([
            imagemin.gifsicle({interlaced: true}),
            jpegrecompress({
                progressive: true,
                max: 90,
                min: 80
            }),
            pngquant(),
            imagemin.svgo({plugins: [{removeViewBox: false}]})
        ])))
        .pipe(gulp.dest(path.dist.img));
    done();
});

gulp.task('js', (done) => {
    gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.dist.js))
        .pipe(connect.reload());
    done();
});

gulp.task('watcher', () => {
    gulp.watch(path.src.scss, gulp.series('scss'));
    gulp.watch(path.src.js, gulp.series('js'));
    gulp.watch(path.src.img + '/*', gulp.series('images'));
});

gulp.task('build', gulp.series('scss', 'js', 'images', done => done()));

gulp.task('clear', () =>
    cache.clearAll()
);

gulp.task('default', gulp.series('scss', 'js', 'images', gulp.parallel('connect', 'watcher')), done => done());
