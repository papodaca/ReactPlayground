'use strict';

var gulp       = require('gulp');
var $          = require('gulp-load-plugins')();
var sync       = $.sync(gulp).sync;
var del        = require('del');
var browserify = require('browserify');
var watchify   = require('watchify');
var source     = require('vinyl-source-stream');
var useref     = require('gulp-useref');

var bundler = {
  w: null,
  init: function() {
    this.w = watchify(browserify({
      entries: ['./app/app.js'],
      insertGlobals: true,
      cache: {},
      packageCache: {}
    }));
  },
  bundle: function() {
    $.util.log('Bundle updated!');
    return this.w && this.w.bundle()
      .on('error', $.util.log.bind($.util, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(gulp.dest('dist/scripts/'));
  },
  watch: function() {
    this.w && this.w.on('update', this.bundle.bind(this));
  },
  stop: function() {
    this.w && this.w.close();
  }
};

gulp.task('scripts', function() {
  bundler.init();
  return bundler.bundle();
});

gulp.task('html', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('extras', function () {
  return gulp.src(['app/*.txt', 'app/*.json', 'app/*.ico'])
    .pipe(gulp.dest('dist/'))
    .pipe($.size());
});

gulp.task('serve', function() {
  gulp.src('dist')
    .pipe($.webserver({
      livereload: true,
      port: 9000
    }));
});

gulp.task('set-production', function() {
  process.env.NODE_ENV = 'production';
});

gulp.task('minify:js', function() {
  return gulp.src('dist/scripts/**/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/scripts/'))
    .pipe($.size());
});

gulp.task('minify', ['minify:js']);

gulp.task('clean', del.bind(null, 'dist'));

gulp.task('bundle', ['html', 'scripts', 'extras']);

gulp.task('clean-bundle', sync(['clean', 'bundle']));

gulp.task('build', ['clean-bundle'], bundler.stop.bind(bundler));

gulp.task('build:production', sync(['set-production', 'build', 'minify']));

gulp.task('serve:production', sync(['build:production', 'serve']));

gulp.task('default', ['build']);

gulp.task('watch', sync(['clean-bundle', 'serve']), function() {
  bundler.watch();
  gulp.watch('app/*.html', ['html']);
});
