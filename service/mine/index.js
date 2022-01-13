const todo = require('./todo/index')

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'todo':
      return await todo.main(event, context);
  }
};
