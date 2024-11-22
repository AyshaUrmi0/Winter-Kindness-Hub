import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                return result.user; // Return user for chaining
            })
            .catch((error) => {
                console.error("Registration error:", error);
                throw error; // Pass error to caller
            })
            .finally(() => setLoading(false));
    };

    // User login
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                return result.user; 
            })
            .catch((error) => {
                console.error("Login error:", error);
                throw error; 
            })
            .finally(() => setLoading(false));
    };

  
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error("Logout error:", error);
            })
            .finally(() => setLoading(false));
    };

    // Google Sign-In
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                return result.user; 
            })
            .catch((error) => {
                console.error("Google Sign-In error:", error);
                throw error; 
            })
            .finally(() => setLoading(false));
    };

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createNewUser,
        userLogin,
        logOut,
        googleSignIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
