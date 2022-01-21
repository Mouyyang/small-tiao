const getInfo = require('./getInfo/index')
const getSimpleInfo = require('./getSimpleInfo/index')

exports.main = async (event, context) => {
    switch (event.type) {
        case 'getInfo':
            return await getInfo.main(event, context);
        case 'getSimpleInfo':
            return await getSimpleInfo.main(event, context);
    }
}