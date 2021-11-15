module.exports = {
  env: {
    API_URL: process.env.API_URL,
    GITHUB_USERS: process.env.GITHUB_USERS,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_PROJECT_DATASET: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_TOKEN: process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    GITHUB_USERS: process.env.GITHUB_USERS,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_PROJECT_DATASET: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_TOKEN: process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: 'https://snio.dev' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ];
  }
};
