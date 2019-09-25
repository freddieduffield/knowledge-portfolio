# GraphQL queries

GraphQl is a query language that creates a graph of data

```graphql
query stuff {
  getStuff(stuffId: ID) {
    pizza {
      pepperoni
      cheese
      olives
    }
    motobike
  }
}
```

# Schemas

## typeDefs

Defining the type of the data. must be defined to recieve something back in query.

Some standards `String Int Boolean ID Float`

whilst you can also create custom ones

# Resolvers

Function that returns the data to the query

[GraphQL Query Language](https://egghead.io/courses/graphql-query-language) - egghead

[Scalable Offline-Ready GraphQL Applications with AWS AppSync & React](https://egghead.io/courses/scalable-offline-ready-graphql-applications-with-aws-appsync-react) - egghead

[GraphQL Data in React with Apollo Client](https://egghead.io/courses/graphql-data-in-react-with-apollo-client) - egghead

[Create Fullstack Applications with GraphQL and Apollo](https://egghead.io/playlists/create-fullstack-applications-with-graphql-and-apollo-794dc9c7) - egghead
