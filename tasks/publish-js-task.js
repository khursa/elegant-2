const gulp = require('gulp'); // Подключение гульпа

const jsSources = './src/js/**/*.js';

/**
 * Это описание задачи, которая будет переносить наши фонты в папку dist
 * @returns {*}
 */
let publishJs = (destinationDir) => {
    gulp.src(jsSources).pipe(gulp.dest(destinationDir +'js'))
};

let PublishJsTask = () => {
    publishJs('./dist/')
};

module.exports = PublishJsTask;