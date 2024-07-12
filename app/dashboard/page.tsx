"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function Dashboard() {
  const { user } = useAuth();
  const [register, setRegister] = useState(false);

  const checkUser = async () => {
    if (!user) {
      return;
    }

    const db = getFirestore();
    const UserData = collection(db, "formData");
    const email = user?.email;
    console.log(email);

    const names = query(UserData, where("__name__", "==", email));
    const querySnapshot = await getDocs(names);
    console.log(querySnapshot);

    if (querySnapshot.empty) {
      setRegister(false);
    } else {
      setRegister(true);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, [user]);

  return (
    <>
      {register ? (
        <div className=" p-5">Wait for update</div>
      ) : (
        <div className=" p-5">You have not registered</div>
      )}
    </>
  );
}
