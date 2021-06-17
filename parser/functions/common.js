const axios = require('axios');
const cheerio = require('cheerio');
const {
    getInfo
} = require('../utils/common');

// const { getBody } = require('./../utils/common');

const defaultOptions = {
    adsQuantity: 10,
}

async function getPage(url) {
    return await axios({
            method: 'get',
            url: url,
        })
        .then(function (response) {
            return response.data
        })
        .catch((err) => {
            console.log('error occred');
            console.log(err);
        });
}

function getAds(document, options = defaultOptions) {
    const $ = cheerio.load(document);
    const latestAdsQuantity = options.adsQuantity;

    const latestAdsArr =
        $(`[data-marker="item"]`)
        .toArray()
        .slice(0, latestAdsQuantity)
        .map((adNode) => {
            return getInfo(adNode);
        });

    return latestAdsArr;
}

function doRequest(timeout) {

}

function trackNewAds() {

}

module.exports = {
    getPage,
    getAds,
    doRequest
}