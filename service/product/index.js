const buy = require('./buy/index')
const getAllOrder = require('./getAllOrder/index')
const getOrderInfo = require('./getOrderInfo/index')
const getProductInfo = require('./getProductInfo/index')
const getSort = require('./getSort/index')
const getSortProduct = require('./getSortProduct/index')
const homeInfo = require('./homeInfo/index')
const search = require('./search/index')
const slideInfo = require('./slideInfo/index')

exports.main = async (event, context) => {
    switch (event.type) {
        case 'buy':
            return await buy.main(event, context);
        case 'getAllOrder':
            return await getAllOrder.main(event, context);
        case 'getOrderInfo':
            return await getOrderInfo.main(event, context);
        case 'getProductInfo':
            return await getProductInfo.main(event, context);
        case 'getSort':
            return await getSort.main(event, context);
        case 'getSortProduct':
            return await getSortProduct.main(event, context);
        case 'homeInfo':
            return await homeInfo.main(event, context);
        case 'search':
            return await search.main(event, context);
        case 'slideInfo':
            return await slideInfo.main(event, context);                            
    }
}