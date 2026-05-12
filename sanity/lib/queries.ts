export const postsListQuery = `*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt
}`

export const recentPostsQuery = `*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) [0...3] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt
}`

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage {
    asset->{
      _id,
      url,
      metadata { dimensions }
    },
    alt
  },
  body
}`
