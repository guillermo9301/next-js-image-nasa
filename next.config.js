/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //para poder usar imagenes desde un API externo usando el tag Image de next.js, se debe configurar esto:
  images: {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov'
      }
    ]
  }//de esta manera next.js protege nuestra app admitiendo imagenes solo de hosts o buckets conocidos
  //para mas info, revisar documentacion next/image
}

module.exports = nextConfig
