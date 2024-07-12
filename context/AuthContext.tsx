"use client";
import { auth } from "@/lib/firebase/init";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
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
import nookies from "nookies";
import { useRouter } from "next/navigation";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signInWithGooglePopup: () => Promise<User | null>;
  signOutUser: () => Promise<void>;
};

interface Props {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>({
  user: null,
  loading: true,
  signInWithGooglePopup: async () => {
    throw new Error("SignInWithGooglePopup Function not initized");
  },
  signOutUser: async () => {
    throw new Error("SignOut Function not initized");
  },
});

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const route = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        nookies.set(undefined, "token", token, { path: "/" });
        setUser(user);
      } else {
        nookies.set(undefined, "token", "", { path: "/" });
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const provider = new GoogleAuthProvider();

  const signInWithGooglePopup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const signedInUser = result.user;

      if (signedInUser) {
        setUser(signedInUser);
        route.push("/register");
        return signedInUser;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      return null;
    }
  };

  const signOutUser = async (): Promise<void> => {
    try {
      await signOut(auth);
      setUser(null);
      route.push('/');
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signInWithGooglePopup, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
