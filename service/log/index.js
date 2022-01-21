const login = require('./login/index')

exports.main = async (event, context) => {
    switch (event.type) {
        case 'login':
            return await login.main(event, context);
    }
}