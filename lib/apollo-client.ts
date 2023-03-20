import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GQL_URL,
})

const authLink = setContext((_, { headers }) => {
  let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Ntcy50aGVnZW50bGVtYW5zam91cm5hbC5jb20iLCJpYXQiOjE2NzgzMTA2MTgsIm5iZiI6MTY3ODMxMDYxOCwiZXhwIjoxNjc4OTE1NDE4LCJkYXRhIjp7InVzZXIiOnsiaWQiOjkxMjksImRldmljZSI6IiIsInBhc3MiOiIzMmE3NzRkMmFjOGRmNDZmMWVhNGU3ZWI4MjM1M2E1NCJ9fX0.LpX6Lu2iGeTPNWpkPU4mrVZ1yelR5KzxZDkQo9SP74s'
  // if (typeof window !== 'undefined') {
  //   token = localStorage.getItem('gjToken')
  // }
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
