module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/products',
          destination: 'https://admin-staylio.vercel.app/api/f42361f8-6ca5-484e-be8c-bc94ae612b79/products',
        },
      ]
    },
    images: {
        domains: ['res.cloudinary.com'],
      },
  }