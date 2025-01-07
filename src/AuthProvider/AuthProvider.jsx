import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase";
import toast from "react-hot-toast";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);

    // handle email password login
    const EmailPassLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // create user with email and password
    const CreateUserWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // handle gmail login and signUp
    const gmailLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)

    }
    // handle Logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
            .then(res => {
                toast.success("Logout success!")
                setLoading(false)
                setUser(null)
            })
            .catch(err => {
                toast.error("Something went wromg!")
                setLoading(false)
            })
    }

    // handle auth state changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
                console.log("current user --> ", currentUser)
            }
            else {
                console.log("User not found!")
            }

        })
        return () => unSubscribe();
    }, [auth])

    const ContextData = { EmailPassLogin, CreateUserWithEmailPassword, gmailLogin, logOut, user, setUser }


    return (
        <AuthContext.Provider value={ContextData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;