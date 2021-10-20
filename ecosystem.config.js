module.exports = {
  apps: [
    {
      name: `${process.env.name}`,
      script: './app.js',
      watch: process.env.watch === 'false' ? false : true,
      ignore_watch: ['node_modules', 'log', 'jenkins', 'dbFile', '.git', 'prettylist.js', 'prettylist.txt', 'port.js', 'portUsed.txt'],
      node_args: ['--inspect'],
      env_development: {
        PORT: 81,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 81,
        NODE_ENV: 'production'
      },
      env_online: {
        PORT: 80,
        NODE_ENV: 'production'
      }
    }
  ]
}
