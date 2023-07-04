import AnotherSlider from "@/components/Slider/AnotherSlider";
import Footer from "../components/Footer";
import Join from "../components/Join";
import LatestPosts from "../components/LatestPosts";
import MainBlogs from "../components/MainBlogs";
import Navbar from "../components/Navbar";
import NewSlider from "../components/Slider/NewSlider";
import Trending from "../components/Trending";
import Latest from "@/components/Latest";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="grid gap-10">
        <MainBlogs />
        <Trending />
        <Join />
        <AnotherSlider />
        {/* <NewSlider /> */}
        <Latest />
        <LatestPosts />
        <Footer />
      </div>
    </main>
  );
}
