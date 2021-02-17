const iDownloader = require('image-downloader');
const temp = require('temp');

class Utils {
    static async downloadPhoto(url) {
        temp.track(true);
        let path = await temp.path({suffix: '.png'});
        let info = await iDownloader.image({
            url: url,
            dest: path
        });
        return info.filename;
    }
}

module.exports = Utils;