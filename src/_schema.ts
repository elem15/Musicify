export default `type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}

type Query {
  books: [Book]
  authors: [Author]
}

type Mutation {
  addBook(title: String, author: String): Book
}

input BlogPostContent {
  title: String
  body: String
  media: [MediaDetails!]
}

input MediaDetails {
  format: MediaFormat!
  url: String!
}

enum MediaFormat {
  IMAGE
  VIDEO
}

type Mutation {
  createBlogPost(content: BlogPostContent!): Post
  updateBlogPost(id: ID!, content: BlogPostContent!): Post
}`