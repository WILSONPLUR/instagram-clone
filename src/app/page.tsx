"use client";

import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import PhoneDemo from "./assets/phone-demo.png";

export default function Home() {
  const { status } = useSession();
  const { push } = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      push("/login");
    }
  }, [status]);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div className="flex gap-10 items-center">
        {/* <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton /> */}
        <h1>You are successfully logged in</h1>
        <button className="text-black" onClick={() => signOut()}>
          log out
        </button>
      </div>
    </main>
  );
}
