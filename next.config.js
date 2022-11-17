/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    BASE_URL:"http://localhost:3002",
    MONGODB_URL:'mongodb+srv://admin:admin@123@cluster0.hyhqgb0.mongodb.net/?retryWrites=true&w=majority',
    ACCESS_TOKEN_SECRET :'ewh^$sqI0AQe83ssuIEp4p^Npt1y4C7mCp%lxDwCLh3Ac@X&xV',
    REFRESH_TOKEN_SECRET:'NTzeQy8L0hYUDWSN!13pyk!sjcFrLZcrHg0l4Mi$hp%In9OMZ&'
  }
}

module.exports = nextConfig


