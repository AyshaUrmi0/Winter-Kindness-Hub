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

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create new user
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false)); // Reset loading state
    };

    // User login
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false)); // Reset loading state
    };

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => setUser(null))
            .finally(() => setLoading(false)); // Reset loading state
    };

    // Google sign-in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                };
                setUser(userData);
                return userData; // Return user data for chaining
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
                throw error; // Re-throw error for caller to handle
            })
            .finally(() => setLoading(false)); // Reset loading state
    };

    // Authentication state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createNewUser,
        userLogin,
        logOut,
        googleSignIn,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
