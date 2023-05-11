import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


 export const  AuthContext = createContext();
 const auth = getAuth(app);


const AuthProvider = ({children}) => {

 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

//   email signup 

const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password );
    };
 
 // email signin 

 const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    };

   
  

  



 
 // observe user state change
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        setLoading(false);
      } 
    });
    return () => {
        return unsubscribe();
    }
  }, []);

 
 
 
 
 
 const authInfo = { user ,loading,signUpWithEmail,signInWithEmail};
    
    
    
    return (
       <AuthContext.Provider value={authInfo}>
         
              {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;