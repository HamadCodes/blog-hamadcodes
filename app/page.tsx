import { client } from '../sanity/lib/client'; // Sanity client setup
import { postsQuery } from '../sanity/lib/queries'; // GROQ query
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  const posts = await client.fetch(postsQuery);

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {post.mainImage && (
              <Image
                src={post.mainImage}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                By {post.author} •{' '}
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 line-clamp-3">
                {post.body?.[0]?.children?.[0]?.text || 'No preview available for this post.'}
              </p>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
