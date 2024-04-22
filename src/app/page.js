'use client';

import Sidebar from "./components/Sidebar";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./login/page";
import Loading from "./components/Loading";

export default function Home() {

  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading/>;

  if (!user) return <Login/>;

  return (
    <Sidebar/>
  );
}
