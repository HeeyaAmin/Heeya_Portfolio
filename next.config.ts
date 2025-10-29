// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/resume.pdf',
        headers: [
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
        ],
      },
    ];
  },
};
