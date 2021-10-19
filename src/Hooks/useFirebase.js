import { useEffect, useState } from "react"
import firebaseAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                // console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .catch((error) => {
            setError(error.message);
        });
    }
    
    const registerWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                // console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    };

    const logInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                // console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    });

    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        registerWithEmailPassword,
        logInWithEmailPassword
    }
}
export default useFirebase;