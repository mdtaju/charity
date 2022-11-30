import {
      createUserWithEmailAndPassword,
      getAuth,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      signOut,
      updateProfile
} from 'firebase/auth';
import { useRouter } from 'next/router';
import {
      createContext,
      useContext,
      useEffect,
      useState
} from "react";
import app from '../SecureInfo/firebase.config';

const AuthContext = createContext();

export function useAuth() {
      return useContext(AuthContext);
}

export function AuthProvider({ children }) {
      const [loading, setLoading] = useState(true);
      const [currentUser, setCurrentUser] = useState();
      const router = useRouter();

      useEffect(() => {
            const auth = getAuth(app);
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                  setCurrentUser(user);
                  setLoading(false);
            })
            return unsubscribe;
      }, []);

      // signup function 
      async function signUp(email, password, userName) {
            const auth = getAuth(app);
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                  displayName: userName
            });
            const user = auth.currentUser;
            setCurrentUser({
                  ...user
            });
            router.replace(`/profile`);
      }

      // login function 
      async function login(email, password) {
            const auth = getAuth(app);
            await signInWithEmailAndPassword(auth, email, password);
            router.replace(`/profile`);
      }

      // logout function
      async function logout() {
            const auth = getAuth(app);
            await signOut(auth);
            router.replace('/');
      }

      const value = {
            currentUser,
            signUp,
            login,
            logout
      }
      return (
            <AuthContext.Provider value={value}>
                  {!loading && children}
            </AuthContext.Provider>
      )
}