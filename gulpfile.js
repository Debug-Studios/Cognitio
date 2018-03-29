const gulp = require('gulp');
const html = require('gulp-html');
const htmlclean = require('gulp-htmlclean');
const imagemin = require('gulp-imagemin');
const imageresize = require('gulp-image-resize');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('html', function(){
    return gulp
        .src('./src/views/*.html')
        .pipe(htmlclean())
        .pipe(gulp.dest('./'));
});

gulp.task('scss', function () {
    var plugins = [autoprefixer({ browsers: ['> 5%'] }), cssnano()];
    return gulp
      .src('./src/scss/*.scss')
      .pipe(sass())
      .pipe(postcss(plugins))
      .pipe(gulp.dest('./dist/css'));
  });
  
  gulp.task('js', function () {
    return gulp
      .src('./src/js/*.js')
      .pipe(
        babel({
          presets: ['env']
        })
      )
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
  });
  
  gulp.task('images', function () {
    return gulp
      .src('./src/images/*')
      .pipe(
        imageresize({
          width: 900,
          height: 600,
          crop: true
        })
      )
      .pipe(
        imagemin([
          imagemin.jpegtran({
            progressive: true
          })
        ])
      )
      .pipe(gulp.dest('./dist/img'));
  });
  
  gulp.task('watch', function () {
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./src/scss/*.scss', ['scss']);
    gulp.watch('./src/images/*', ['images']);
    gulp.watch('./src/views/*.html', ['html']);
  });
  
  gulp.task('default', ['html', 'scss', 'js', 'images']);
  
