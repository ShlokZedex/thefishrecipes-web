import AnotherSlider from "@/components/Slider/AnotherSlider";
import Footer from "../components/Footer";
import Join from "../components/Join";
import LatestPosts from "../components/LatestPosts";
import MainBlogs from "../components/MainBlogs";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Latest from "@/components/Latest";
import { cachedClient } from "../../sanity/lib/client";
import { LatestPostsQuery, categoriesQuery, postsQuery, trendingPostsQuery } from "../../sanity/lib/queries";

export default async function Home() {

  const posts = await cachedClient(postsQuery)
  const categories = await cachedClient(categoriesQuery)
  const trendingPosts = await cachedClient(trendingPostsQuery)
  const latestPosts = await cachedClient(LatestPostsQuery)

  return (
    <main>
      <Navbar categories={categories}/>
        <div className="flex flex-col gap-10">
          <MainBlogs posts={posts} />
          <Trending trendingPosts = {trendingPosts} categories={categories}/>
          <Join />
          <AnotherSlider posts={posts}/>
          <Latest latestPosts={latestPosts} categories={categories}/>
          <LatestPosts />
        </div>
      <Footer />
    </main>
  );
}
