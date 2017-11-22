var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var resolutions = require('browserify-resolutions');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var es = require('event-stream');
var path = require('path');
var zip = require('gulp-zip');

gulp.task('browserify', function () {
  var bundler = browserify({
    entries: ['./public/main.jsx'],
    extensions: ['.jsx', '.js'],
    paths: ['./node_modules','./public'],
    debug: true,
    // Required properties for watchify
    cache: {}, packageCache: {}, fullPaths: true
  })
  .transform('babelify', {
    presets: ['es2015', 'react'] 
  })
  .plugin(resolutions, '*')
    .on('time', function (time) {
      console.log('Bundle updated in ' + (time / 1000) + 's.');
    });

  var watcher = watchify(bundler);

  var bundle = function () {
    watcher
      .bundle()
      .on('error', function (err) {
        console.log(err.toString());
      })
      .pipe(source('main.js'))
      .pipe(gulp.dest('./public/build/'));
  };
  bundle();
  return watcher.on('update', function (filenames) {
    filenames.forEach(function (filename) {
      console.log(path.relative(__dirname, filename) + ' changed.');
    });
    bundle();
  });
});

gulp.task('default', ['browserify']);

var JS = [
  'public/**/*.jsx',
  'public/actions/*.js',
  'public/reducers/*.js',
  'public/main.jsx'
];

var BRUCE_FILES = [
  'compiled/**/*',
  'public/**/*'
];

var COMPILE_FILES = [
  'public/**/*.jsx',
  'public/actions/*.js',
  'public/reducers/*.js',
  'public/main.jsx',
  'public/*.js',
];

var OTHER_FILES = [
  'public/seeds/*.json'
];

gulp.task('js-compile', function () {
  return gulp.src(COMPILE_FILES, {base: 'public'})
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest('compiled'));
});

gulp.task('other-compile', function () {
  return gulp.src(OTHER_FILES).pipe(gulp.dest('compiled/seeds'));
});

gulp.task('compile', ['js-compile', 'other-compile']);

gulp.task('eslint', function () {
  return gulp.src(JS)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('zip', function () {
  return gulp.src(BRUCE_FILES, { base: '.' })
    .pipe(zip('files.zip'))
    .pipe(gulp.dest(''));
});
