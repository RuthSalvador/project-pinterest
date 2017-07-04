var gulp = require('gulp');
//agregando gulp-sass
var sass = require('gulp-sass');
//agregando dependecias
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
//agregando modulo requerido
var browserSync = require('browser-sync').create();

var config = {
  source: './src/',
  dist: './public/'
};

var paths = {
  assets: "assets/",
  img: "img/**",
  js: "js",
  html: "**/*.html",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  mainJS: "js/app.js"
};

var sources = {
  assets: config.source + paths.assets,
  img: config.source + paths.assets + paths.img,
  html: config.source + paths.html,
  sass: config.source + paths.assets + paths.sass,
  js: config.source + paths.assets +  paths.js,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS
};

//tareas independientes
gulp.task('html', ()=> {
  gulp.src(sources.html)
    .pipe(gulp.dest(config.dist));
});

gulp.task('img', ()=> {
  gulp.src(sources.img)
    .pipe(gulp.dest(config.dist + paths.assets + "img"));
});

gulp.task('sass', ()=> {
  gulp.src(sources.rootSass)
    .pipe(sass({
      outputStyle: "compressed"
    }).on ("error", sass.logError))
    .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('js', ()=> {
  gulp.src(sources.rootJS)
    .pipe(browserify())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(config.dist + paths.assets + paths.js));
});



//agregando tareas watch
gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("img-watch", ["img"], function (done) {
  browserSync.reload();
  done();
});


gulp.task("serve", ()=> {
  browserSync.init({
    server: {
      baseDir: config.dist
    }
  });


    gulp.watch(sources.sass, ["sass-watch"]);
    gulp.watch(sources.html, ["html-watch"]);
    gulp.watch(sources.rootJS, ["js-watch"]);
    gulp.watch(sources.img, ["img-watch"]);



});
