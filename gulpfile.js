const gulp = require("gulp");
const scss = require("gulp-sass");
const pug = require("gulp-pug");
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const signIn = () => {
    return gulp.src("./src/scss/_sign_in/**/*.scss")
        .pipe(scss())
        .pipe(gulp.dest("dist/css/signIn"))
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

const build = async () => {
    await signIn();
    await templateSign();
    await img();
}

const watch = () => {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "sign.html"
        }
    });
    gulp.watch("./src/scss/_sign_in/**/*.scss", signIn);
    gulp.watch("./src/templates/*.pug", templateSign);
    gulp.watch("./src/img/*", img);
}
exports.signIn = signIn;
exports.templateSign = templateSign;
exports.img = img;
exports.build = build;
exports.watch = watch;