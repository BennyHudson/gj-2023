import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GQL_URL,
})

const authLink = setContext((_, { headers }) => {
  const previewToken = process.env.PREVIEW_TOKEN

  return {
    headers: {
      ...headers,
      authorization: previewToken ? `Basic ${previewToken}` : '',
    },
    useGETForQueries: true,
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
