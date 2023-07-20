/** @type {import('next').NextConfig} */

const { createClient } = require("next-sanity");

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-05-19",
  useCdn: process.env.VERCEL_ENV === "production",
});

const nextConfig = {
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
