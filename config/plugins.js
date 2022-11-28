module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          artist: {
            field: 'Slug',
            references: 'Name',
          },
          news: {
            field: 'Slug',
            references: 'Title',
          },
          program: {
            field: 'Slug',
            references: 'Name',
          },
        },
      },
    },
    graphql: {
      config: {
        endpoint: "/graphql",
        apolloServer: {
          introspection: true,
        },
      },
    },
    'performance': {
      enabled: true,
      resolve: './src/plugins/performance'
    },
    publisher: {
      enabled: true,
    },
    
  });