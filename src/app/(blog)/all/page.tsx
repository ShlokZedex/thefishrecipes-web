import { SanityDocument } from "@sanity/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cachedClient } from "../../../../sanity/lib/client";
import { categoriesQuery, postPathsQuery, postsQuery } from "../../../../sanity/lib/queries";
import Category from "@/app/Category";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const categories = await cachedClient(postPathsQuery);
  return categories;
}

export default async function Page() {
  const categories = await cachedClient(categoriesQuery)
  const postsByCategory = await cachedClient<SanityDocument[]>(postsQuery);
  
     return(
      <>
        <Navbar categories={categories}/>
            <Category postsByCategory={postsByCategory} heading="All"/>
        <Footer />
      </>
     );
}