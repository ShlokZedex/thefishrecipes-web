/** @type {import('next').NextConfig} */
// import {cachedClient} from './sanity/lib/client'

// get redirects from Sanity for Vercel

// async function fetchSanityRedirects() {
//   const data = await cachedClient(
//     `*[_type == "redirect"]{ from, to, isPermanent }`
//   )
//   const redirects = data.map((redirect) => {
//     return {
//       source: `/${redirect.from}`,
//       destination: `/${redirect.to}`,
//       permanent: redirect.isPermanent,
//     }
//   })

//   return redirects
// }

const nextConfig = {
  // async redirects() {
  //   const sanityRedirects = await fetchSanityRedirects()
  //   return sanityRedirects
  // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
      },
}

module.exports = nextConfig
