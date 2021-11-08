import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // auth 
    const auth = getAuth();
    // providers 
    const googleProvider = new GoogleAuthProvider();

    // signin with google here
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // sign in With Email And Password 
    const signInWithInput = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    // sign up with input here 
    const signUpWithInput = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setUserName(name);
                setError('')
            })
            .catch(error => setError(error.message))
    }

    // user name update here 
    const setUserName = name => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    // getting the current user 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    // signout user here 
    const signOutUser = () => {
        signOut(auth).then(() => { })
            .catch(error => setError(error.message))
            .finally(window.location.reload())
    }

    // return here 
    return {
        user,
        error,
        signInWithGoogle,
        signUpWithInput,
        signInWithInput,
        signOutUser,
        setError,
        setUser,
        isLoading
    }
}

export default useFirebase;