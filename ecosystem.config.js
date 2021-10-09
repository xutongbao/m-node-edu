module.exports = {
  apps: [
    {
      name: 'app',
      script: './app.js',
      watch: true,
      ignore_watch: ['node_modules', 'log'],
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
