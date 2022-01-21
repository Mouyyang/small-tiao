const getCredit = require('./getCredit/index')
const getCreditItem = require('./getCreditItem/index')

exports.main = async (event, context) => {
    switch (event.type) {
        case 'getCredit':
            return await getCredit.main(event, context);
        case 'getCreditItem':
            return await getCreditItem.main(event, context);
    }
}