import {FC} from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
// @ts-ignore
import awsExports from '../../aws-exports.js'

Amplify.configure(awsExports);

export const AuthContainer: FC = () => {
    return (
        <Authenticator>
            {({signOut, user}) => {
                console.log(user);

                return (
                    <div>
                        <h1>Hello, {user?.signInDetails?.loginId}</h1>
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                );
            }}
        </Authenticator>
    );
}