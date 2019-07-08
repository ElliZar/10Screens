const gulp = require("gulp");
const scss = require("gulp-sass");
const pug = require("gulp-pug");
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify-es").default;

const signIn = () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(scss())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 3 version"],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css/"))
        .pipe(browserSync.stream());
}

const templateSign = () => {
    return gulp.src("./src/templates/*.pug")
        .pipe(pug())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
}

const img = () => {
    return gulp.src("./src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
}

const minify = () => {
    return gulp.src("./src/javascript/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
}

const build = async () => {
    await signIn();
    await templateSign();
    await img();
    await minify();
}

const watch = () => {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "sign.html"
        }
    });
    gulp.watch("./src/scss/**/*.scss", signIn);
    gulp.watch("./src/templates/*.pug", templateSign);
    gulp.watch("./src/img/*", img);
    gulp.watch("./src/javascript/main.js", minify);
}
exports.signIn = signIn;
exports.templateSign = templateSign;
exports.img = img;
exports.build = build;
exports.watch = watch;
exports.minify = minify;