import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };
  const handleSignOut = () => {
      signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });

  }
  

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } 
        });

    })



  return {
      user, 
      signInWithGoogle,
      handleSignOut


  }
};

export default useFirebase;
