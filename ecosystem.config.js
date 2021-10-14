module.exports = {
  apps: [
    {
      script: './app.js',
      watch: true,
      ignore_watch: ['node_modules', 'log', 'dbFile', '.git'],
      node_args: ['--inspect'],
      env_development: {
        PORT: 81,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 81,
        NODE_ENV: 'production'
      }
    }
  ]
}
