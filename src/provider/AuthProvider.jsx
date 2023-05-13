import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


 export const  AuthContext = createContext();
 const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();


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

 // signout 
 
 const logout = () => {
      setLoading(true);
      return signOut(auth);
      };
  
// google signin

const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
    };
  



 
 // observe user state change
 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
     setLoading(false);

     if(currentUser && currentUser.email )
     {
      const loggedInUser = { email: currentUser.email };
        // ...

        //jwt token

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedInUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("car-access-token", data.token);
          });
     } else {
      localStorage.removeItem("car-access-token");
     }
     
  


   });

   // stop observing while unmounting

   return () => {
     return unsubscribe();
   };
 }, []);
 
 
 
 
 
 const authInfo = { user ,loading,signUpWithEmail,signInWithEmail,logout,signInWithGoogle};
    
    
    
    return (
       <AuthContext.Provider value={authInfo}>
         
              {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;