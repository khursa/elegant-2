const gulp = require('gulp'); // Подключение гульпа
const {publishCssAndAddBrowserPrefixes, stylesheetsSources} = require('./publish-css-and-add-browser-prefixes');// Подключение SCSS плагина для компилирования файлов


let WatchTask = () => {
    let destinationDir = 'src/';
    publishCssAndAddBrowserPrefixes(destinationDir);
    return gulp.watch([stylesheetsSources], () => publishCssAndAddBrowserPrefixes(destinationDir))
};

module.exports = WatchTask;
