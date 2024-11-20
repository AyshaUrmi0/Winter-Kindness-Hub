import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";





export const AuthContext = createContext();

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
   
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log("AuthProvider rendered. Current user:", user);

    
    console.log("Initial user state:", user);

    const createNewUser = (email, password) => {
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log("User created successfully:", result.user);
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
    

    const authInfo = {
        user,
        setUser,
        createNewUser,
        userLogin,
        logOut,
        loading
       
        
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    } ,[])

   
    console.log("AuthProvider rendered. Current user:", user);

    return (
        <AuthContext.Provider value={authInfo}>
           
            {children}
        </AuthContext.Provider>
    );
    
};

export default AuthProvider;
