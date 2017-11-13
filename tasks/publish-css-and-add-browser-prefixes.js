const gulp = require('gulp'); // Подключение гульпа
const postcss = require('gulp-postcss');// Подключение PostCSS
const sourcemaps = require('gulp-sourcemaps');// Подключение Sourcemaps
// https://www.npmjs.com/package/gulp-sourcemaps
const autoprefixer = require('autoprefixer');// Подключение Autoprefixer
// https://github.com/postcss/autoprefixer
//const cssnext = require('cssnext');// Подключение postcss-cssnext http://cssnext.io/
const cssnano = require('cssnano');// Подключение минификатора http://cssnano.co/
const sass = require('gulp-sass');// Подключение SCSS плагина для компилирования файлов
// https://github.com/vohof/gulp-livereload

const stylesheetsSources = './src/styles/**/*.scss';
const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
}; 


/**
 * Это описание задачи, которая будет переносить наш CSS из исходников в папку dist и при этом добавлять браузерные префиксы и мапы
 * @returns {*}
 */
let publishCssAndAddBrowserPrefixes = (destinationDir) => {
    let processors = [
        autoprefixer({
            remove: false, // указываем, что не нужно насильно удалять префиксы из нашего кода
            browsers: ['last 10 version'], // можем указать, какие браузеры поддерживать
        }),
        cssnano({
            discardUnused: {
                fontFace: false // отключаем удаление не используемых font-face
            }
        }),
    ];

    return gulp.src(stylesheetsSources)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destinationDir + 'styles'))
};

module.exports = {
    publishCssAndAddBrowserPrefixes,
    stylesheetsSources,
};
