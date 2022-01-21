const addMap = require('./addMap/index')
const deleteMap = require('./deleteMap/index')
const getMap = require('./getMap/index')
const updateMap = require('./updateMap/index')

exports.main = async (event, context) => {
    switch (event.type) {
        case 'addMap':
            return await addMap.main(event, context);
        case 'deleteMap':
            return await deleteMap.main(event, context);
        case 'getMap':
            return await getMap.main(event, context);
        case 'updateMap':
            return await updateMap.main(event, context);
    }
}