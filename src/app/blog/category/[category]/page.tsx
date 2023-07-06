import { SanityDocument } from "@sanity/client";
import { cachedClient } from "../../../../../sanity/lib/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categoriesPathsQuery, categoryQuery } from "../../../../../sanity/lib/queries";
import Category from "../../../Category";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const categories = await cachedClient(categoriesPathsQuery);
  return categories;
}

export default async function Page({ params }: { params: any }) {
  const category = await cachedClient<SanityDocument>(categoryQuery, {slug:params.category});
    
     return(
      <>
        <Navbar />
            <Category category={category}/>
        <Footer />
      </>
     ) ;
}