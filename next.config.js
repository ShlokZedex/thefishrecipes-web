/** @type {import('next').NextConfig} */

const { createClient } = require("next-sanity");

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-05-19",
  useCdn: process.env.VERCEL_ENV === "production",
});

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
    async redirects() {
      try {
        const redirects = await client.fetch('*[_type == "redirect"]');

        return redirects.map(({ source, destination, permanent }) => ({
          source,
          destination,
          permanent: !!permanent,
        }));
      } catch (error) {
        console.error(error);
        return [];
      }
    },
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
