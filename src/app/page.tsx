import AnotherSlider from "@/components/Slider/AnotherSlider";
import Footer from "../components/Footer";
import Join from "../components/Join";
import LatestPosts from "../components/LatestPosts";
import MainBlogs from "../components/MainBlogs";
import Navbar from "../components/Navbar";
import NewSlider from "../components/Slider/NewSlider";
import Trending from "../components/Trending";
import Latest from "@/components/Latest";
import { cachedClient } from "../../sanity/lib/client";
import { categoriesQuery, postsQuery } from "../../sanity/lib/queries";

export default async function Home() {

  const posts = await cachedClient(postsQuery)
  const categories = await cachedClient(categoriesQuery)

  return (
    <main>
      <Navbar />
        <div className="flex flex-col gap-10">
          <MainBlogs posts={posts}/>
          <Trending />
          <Join />
          <AnotherSlider />
          {/* <NewSlider /> */}
          <Latest posts={posts} categories={categories}/>
          <LatestPosts />
        </div>
      <Footer />
    </main>
  );
}
