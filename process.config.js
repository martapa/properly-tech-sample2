module.exports = {
  apps: [
    {
      name: 'my-app',
      script: './api/server.js',
      watch: true,
      env: { NODE_ENV: 'development' },
      env_production: { NODE_ENV: 'production' }
    }
  ]
};
