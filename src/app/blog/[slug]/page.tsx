import { SanityDocument } from "@sanity/client";
import { LatestPostsQuery, categoriesQuery, postPathsQuery, postQuery } from "../../../../sanity/lib/queries";
import { cachedClient } from "../../../../sanity/lib/client";
import Post from "../../Post";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const posts = await cachedClient(postPathsQuery);
  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await cachedClient<SanityDocument>(postQuery, params);
  const categories = await cachedClient(categoriesQuery)
  const latestPosts = await cachedClient(LatestPostsQuery)
    
     return(
      <>
        <Navbar categories={categories}/>
          <Post post={post} categories={categories} latestPosts = {latestPosts}/>
        <Footer />
      </>
     ) ;
}