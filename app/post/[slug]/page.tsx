import { client } from '../../../sanity/lib/client';
import Image from 'next/image';

import { PortableText } from '@portabletext/react';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      "author": author->name,
      "mainImage": mainImage.asset->url,
      publishedAt,
      body
    }`,
    { slug: params.slug }
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container mx-auto lg:px-24 max-sm:p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        By {post.author} • {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      {post.mainImage && (
        <Image          
        width={5000}
        height={5000}
        src={post.mainImage}
        alt={post.title}
        className="w-full max-h-[500px] object-cover mb-4">
        </Image>
      )}
      <div>
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
