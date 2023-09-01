module.exports = ({ env }) => ({
  'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: env('NEON_API_KEY', '1llpdu7rb1ki5eevh1d08jzblvuo69g17tpqtdzhd51wnjr1jt4l0mict655qt4t'), // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: env('NEON_PROJECT_NAME', 'neon-starter'), // the neon project under which your DB runs
      neonRole: env('NEON_ROLE'), // create it manually under roles for your project first
      //(gitBranch: "main") // branch can be pinned via this config option. Will not use branch from git then. Useful for preview/production deployment
    }
  },
  "users-permissions": {
    // Other user-permissions configurations
    // ...
    populateCreatorFields: true, // populate author/creator fields
  },
  ckeditor5: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor"
  },
})
