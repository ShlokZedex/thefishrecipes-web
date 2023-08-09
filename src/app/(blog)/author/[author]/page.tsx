import { SanityDocument } from "@sanity/client";
import { cachedClient } from "../../../../../sanity/lib/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { authorsPathsQuery, categoriesQuery, postsByAuthorQuery } from "../../../../../sanity/lib/queries";
import Author from "@/app/Author";


export async function generateStaticParams() {
  const authors = await cachedClient(authorsPathsQuery);
  return authors;
}

export default async function Page({ params }: { params: any }) {
  const postsByAuthor = await cachedClient<SanityDocument[]>(postsByAuthorQuery, {slug:params.author});
  const categories = await cachedClient(categoriesQuery)
  
     return(
      <>
        <Navbar categories={categories}/>
            <Author postsByAuthor={postsByAuthor} />
        <Footer />
      </>
     );
}