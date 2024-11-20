import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";





export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();


const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
   
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createNewUser = (email, password) => {
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
               
                setUser(result.user); 
            })
            .catch((error) => {
                console.error("Error creating user:", error); 
            });
    };


    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };
    

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
                setLoading(false);
                return userData;
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
                setLoading(false);
            });
    };
    

    const authInfo = {
        user,
        createNewUser,
        userLogin,
        logOut,
        googleSignIn,
        loading,
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    } ,[])

  

    return (
        <AuthContext.Provider value={authInfo}>
           
            {children}
        </AuthContext.Provider>
    );
    
};

export default AuthProvider;
