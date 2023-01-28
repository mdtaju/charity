/** @type {import('next').NextConfig} */
const path = require('path')
const { i18n } = require('./next-i18next.config')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rhma.sa',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  // webpack: (config) => {
  //   /* PdfViewer : override defaults aliases */
  //   config.resolve.alias = Object.assign({}, config.resolve.alias, {
  //     "react-pdf": "react-pdf/dist/entry.noworker.js"
  //   });

  //   return config;
  //  }
}
