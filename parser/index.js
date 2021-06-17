const {
    getPage,
    getAds,
    dev_logHTML
} = require('./functions/common');

const BASE_URL = 'https://www.avito.ru/novorossiysk/nastolnye_kompyutery?geoCoords=44.723566%2C37.768678&radius=5';

(async function main() {
    try {
        const document = await getPage(BASE_URL);
        const ads = getAds(`${document}`);

        console.log(JSON.stringify(ads, null, '\t'));
        
    } catch (err) {
        console.log(`error occured:`);
        console.log(err);
    }
})();