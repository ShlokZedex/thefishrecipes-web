"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function Category({ category }: { category: SanityDocument }) {
  return (
    <main className="container mx-auto">
      <h1>{category.title}</h1>
    </main>
  );
}