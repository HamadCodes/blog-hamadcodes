
export const postsQuery = `
  *[_type == "post"]{
    title,
    "slug": slug.current,
    "author": author->name,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url,
    publishedAt,
    body
  } | order(publishedAt desc)
`;
