import { auth } from "@/lib/firebase/init";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signin: (email: string, password: string) => Promise<UserCredential>;
  signOutUser: () => Promise<void>;
};

interface Props {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>({
  user: null,
  loading: true,
  signin: async (email: string, password: string) => {
    throw new Error("Sign In Function not initiated");
  },
  signOutUser: async () => {
    throw new Error("SignOut Function not initized");
  },
});

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signin = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCredential.user);
    return userCredential;
  };

  const signOutUser = async (): Promise<void> => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signin, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
