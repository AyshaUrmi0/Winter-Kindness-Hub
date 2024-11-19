import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";





export const AuthContext = createContext();

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
   
    const [user, setUser] = useState(null);

    console.log("AuthProvider rendered. Current user:", user);

    
    console.log("Initial user state:", user);

    const createNewUser = (email, password) => {
        // console.log("Creating new user with email:", email); 
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log("User created successfully:", result.user);
                setUser(result.user); 
            })
            .catch((error) => {
                console.error("Error creating user:", error); 
            });
    };

    const authInfo = {
        user,
        setUser,
        createNewUser,
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setUser(user);
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
