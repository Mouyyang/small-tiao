const gamePass = require('./gamePass/index')
const getGameInfo = require('./getGameInfo/index')

exports.main = async (event, context) => {
    switch (event.type) {
        case 'gamePass':
            return await gamePass.main(event, context);
        case 'getGameInfo':
            return await getGameInfo.main(event, context);
    }
}