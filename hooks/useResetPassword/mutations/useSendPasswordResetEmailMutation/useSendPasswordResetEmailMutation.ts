import { gql, useMutation } from '@apollo/client'

const QUERY = gql`
	mutation SendPasswordResetEmail($username: String!) {
		sendPasswordResetEmail(input: { username: $username }) {
			clientMutationId
		}
	}
`

const useSendPasswordResetEmailMutation = () => {
  const [ mutation, mutationResults ] = useMutation( QUERY )

  const sendPasswordResetEmail = ( username: string ) => {
    return mutation( {
      variables: {
        username,
      },
    } )
  }

  return { sendPasswordResetEmail, results: mutationResults }
}

export default useSendPasswordResetEmailMutation