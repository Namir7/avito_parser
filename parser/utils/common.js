const cheerio = require('cheerio');

function getInfo(adNode) {
    const $ = cheerio.load(adNode);

    const name = $(`h3[itemprop="name"]`).text();
    const link = editLink(
        $('a').attr('href')
    );;
    const price = formatPrice(
        $(`meta[itemprop="price"]`).attr('content')
    );
    const imgLink = $(`img[itemprop="image"]`).attr('src');
    const date = $(`[data-marker="item-date"]`).text();

    return {
        name,
        link,
        price,
        imgLink,
        date
    };
}

function formatPrice(price) {
    if (typeof price !== 'string') throw new Error('TypeError: price arg should be string')

    return `${price} руб.`
}

function editLink(linkPath) {
    if (typeof linkPath !== 'string') throw new Error('TypeError: link arg should be string')

    const domain = 'avito.ru'

    return `${domain}/${linkPath}`
}

function checkNewAds(oldAds) {

}

function parseDate(date) {
    if (typeof date !== 'string') throw new Error('TypeError: date arg should be string')

    return date;
}

module.exports = {
    getInfo,
    checkNewAds
}