const publishRootFiles = require('./publish-root-files.js');
const publishFonts = require('./publish-fonts.js');
const publishImages = require('./publish-images.js');
//const publishJs = require('./publish-js-task.js');
const {publishCssAndAddBrowserPrefixes, stylesheetsSources} = require('./publish-css-and-add-browser-prefixes');
/**
 * Это описание задачи, которая будет переносить наши ассеты из исходников в папку dist
 * @returns {*}
 */
let publishApplication = () => { 
    let destinationDir = './dist/';
    publishRootFiles(destinationDir);
    publishFonts(destinationDir);
    publishImages(destinationDir);
    //publishJs(destinationDir);
    publishCssAndAddBrowserPrefixes(destinationDir)
};

let PublishApplicationTask = () => {
    return publishApplication();
};

module.exports = PublishApplicationTask;
