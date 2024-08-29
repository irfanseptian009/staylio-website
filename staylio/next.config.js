module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/products',
          destination: 'https://staylio-admin.vercel.app/api/b1924dd5-a5ca-4b13-858b-758d38d3bfb7/products',
        },
      ]
    },
    images: {
        domains: ['res.cloudinary.com'],
      },
  }