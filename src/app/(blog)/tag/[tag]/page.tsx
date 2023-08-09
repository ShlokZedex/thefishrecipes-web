import { SanityDocument } from "@sanity/client";
import { cachedClient } from "../../../../../sanity/lib/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categoriesQuery, postsByTagQuery, tagsPathsQuery } from "../../../../../sanity/lib/queries";
import Tag from "@/app/Tag";


export async function generateStaticParams() {
  const tags = await cachedClient(tagsPathsQuery);
  return tags;
}

export default async function Page({ params }: { params: any }) {
  const postsByTag = await cachedClient<SanityDocument[]>(postsByTagQuery, {slug:params.tag});
  const categories = await cachedClient(categoriesQuery)
  
     return(
      <>
        <Navbar categories={categories}/>
            <Tag postsByTag={postsByTag} heading={params.tag}/>
        <Footer />
      </>
     );
}