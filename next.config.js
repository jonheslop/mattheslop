require("dotenv").config();

module.exports = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
  env: {
    CMS_DATOCMS_API_TOKEN: process.env.CMS_DATOCMS_API_TOKEN,
  },
};
