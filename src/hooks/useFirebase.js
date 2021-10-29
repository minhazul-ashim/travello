import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import initializeAuth from "../firebase/firebase.init";


initializeAuth()

const useFirebase = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const googleSignIn = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const logOut = () => {

        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user)
                setLoading(false)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })
    }, [])

    return {
        user,
        loading,
        error,
        googleSignIn,
        logOut
    }
}

export default useFirebase;