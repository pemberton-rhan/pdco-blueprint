// Required plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const order = require('gulp-order');

// Task to concatenate all .scss and output to dist.css
gulp.task('sass', function() {
  return gulp
    .src('styles/**/*.scss') // get all SCSS files
    .pipe(order([
      'foundations/variables/variables.scss',
      '*.scss'
    ]))
    .pipe(sourcemaps.init())
    .pipe(sass()) // compile SCSS to CSS
    .pipe(concat('dist.css')) // concatenate all CSS files into one
    .pipe(cleanCSS({compatibility: 'ie8'})) // minify the CSS
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('styles')); // output the file to the dist folder
});

// Task to concatenate all .js and output to dist.css
gulp.task('scripts', function() {
  return gulp
    .src('scripts/custom/**/*.js')
    .pipe(concat('dist.js'))
    .pipe(uglify())
    .pipe(gulp.dest('scripts'));
});

// Run all gulp tasks on save
gulp.task('watch', function() {
  gulp.watch('**/*.scss', gulp.parallel('sass'));
  gulp.watch('scripts/custom/**/*.js', gulp.parallel('scripts'));
});