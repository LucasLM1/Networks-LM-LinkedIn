// process.env.DISABLE_NOTIFIER = true;
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-dart-sass');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');

function compileSass() {
    return gulp
        .src(['src/scss/**/*.scss'])
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass().on('error', sass.logError)) // Configuração de erro para gulp-dart-sass
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({
            message: 'CSS [COMPILADO] - <%= file.relative %>',
            onLast: true
        }));
}

function compileJs() {
    return gulp
        .src(['src/js/**/*.js'])
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({
            message: 'JS [COMPILADO] - <%= file.relative %>',
            onLast: true
        }));
}

function watch() {
    gulp.watch('src/js/**/*.js', compileJs);
    gulp.watch('src/scss/**/*.scss', compileSass);
}

// Tarefa padrão que compila JS, CSS e assiste alterações
gulp.task('default', gulp.parallel(compileJs, compileSass, watch));

// Tarefa para deploy que compila CSS e JS
gulp.task('deploy', gulp.series(compileSass, compileJs));
