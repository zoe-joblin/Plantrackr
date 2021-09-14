const path = require('path')

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3')
    },
    pool: {
      afterCreate: (conn, cb) =>
        conn.run('PRAGMA foreign_keys = ON', cb)
    }
  },
}
