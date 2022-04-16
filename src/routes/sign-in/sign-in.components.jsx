// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import { async } from '@firebase/util';

const SignIn = () => {
    // useEffect(() => {
    //     async function getAuth(){
    //         const response = await getRedirectResult(auth);
    //         if(response)
    //         {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getAuth();
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}

        </div>
    )
}

export default SignIn;