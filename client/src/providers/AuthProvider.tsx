import { createContext, useEffect, useState } from 'react';
interface AuthProviderProps {
    children: any;
}
import {
    getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider
} from "firebase/auth";
import app from '../firebase/firebase.config';

const googleProvidor= new GoogleAuthProvider()
const facebookProvidor=new FacebookAuthProvider()
export const AuthContext = createContext<any>(undefined);
const auth = getAuth(app)
const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const createUser = (email: any, password: any) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email: any, password: any) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvidor)
    }

    const facebookSignin=()=>{
        setLoading(true)
        return signInWithPopup(auth,facebookProvidor)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo: any = {
        user, loading, logOut, signIn, createUser,googleSignin,
        facebookSignin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
}

export default AuthProvider;