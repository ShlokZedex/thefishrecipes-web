import { SanityDocument } from "@sanity/client";
import { cachedClient } from "../../../../../sanity/lib/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categoriesPathsQuery, categoriesQuery, postsByCategoryQuery } from "../../../../../sanity/lib/queries";
import Category from "../../../Category";


export async function generateStaticParams() {
  const categories = await cachedClient(categoriesPathsQuery);
  return categories;
}

export default async function Page({ params }: { params: any }) {
  const postsByCategory = await cachedClient<SanityDocument[]>(postsByCategoryQuery, {slug:params.category});
  const categories = await cachedClient(categoriesQuery)
  
     return(
      <>
        <Navbar categories={categories}/>
            <Category postsByCategory={postsByCategory} />
        <Footer />
      </>
     );
}