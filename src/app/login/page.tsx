"use client";
import { LoginButton } from "@/components/buttons.component";
import { Field } from "@/components/fields.component";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PhoneDemo from "../assets/phone-demo.png";
import InstaLogo from "../assets/instagram-logo.png";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { status } = useSession();
  const { push } = useRouter();
  console.log(status);

  useEffect(() => {
    if (status === "authenticated") {
      push("/");
    }
  }, [status, isDisabled]);
  return (
    <div className="flex justify-center m-auto items-center gap-5 mt-20">
      {/* <input
        type="email"
        placeholder="Email"
        className="text-black"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target?.value)
        }
      /> */}
      <Image src={PhoneDemo} alt="phone" className="h-fit w-fit" />
      <div className="flex flex-col justify-center px-10 w-[350px] border-gray-200 border h-[400px] items-center gap-2">
        <Image src={InstaLogo} alt="instagram logo" className="h-fit w-fit" />
        <Field
          placeholder="Username"
          type="text"
          value={username}
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          classNames="border-gray-200 border w-full text-sm py-2 pl-2"
        />
        <Field
          placeholder="Password"
          type="password"
          value={password}
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          classNames="border-gray-200 border w-full text-sm py-2 pl-2"
        />
        <button
          type="button"
          disabled={isDisabled}
          className="bg-lightblue rounded-md py-[6px] text-sm px-4 w-full text-white"
          onClick={() =>
            signIn("credentials", {
              username: username.trim(),
              password: password.trim(),
            })
          }
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
