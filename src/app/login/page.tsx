"use client";

import Image from "next/image";
import LogoImg from "../../../public/assets/images/logo-devlinks-large.svg";
import Input from "@/components/Input";
import ContainerLogin from "@/components/containerLogin";
import Link from "next/link";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form";

export type CheckoutFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CheckoutFormData>();

  function onSubmit() {
    alert("Ok");
  }

  return (
    <ContainerLogin>
      <Image src={LogoImg} alt="Logo DevLinks" className="mb-[70px]" />
      <div className="w-full bg-white rounded-[12px] p-10 " >
        <div className="mb-10">
          <h1 className="text-present-2 text-grey-900 mb-2">Login</h1>
          <p className="text-present-3-regular text-grey-500 ">
            Add your details below to get back into the app
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6 mb-6"
        >
          <div>
            <Input
              placeholder="e.g.alex@email.com "
              icon={<AiTwotoneMail />}
              label="Email address "
              id="email"
              error={errors.email?.message}
              register={register}
              requiredMessage="Can't be empty"
              pattern={{
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Wrong Format",
              }}
            />
          </div>
          <div>
            <Input
              placeholder="Enter your password"
              label="Password"
              icon={<RiLockPasswordFill />}
              id="password"
              error={errors.password?.message}
              register={register}
              requiredMessage="Please check again"
              pattern={{
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                message: "Wrong Format",
              }}
            />
          </div>
          <button type="submit" className=" bg-purple-600 w-full py-4 px-6 text-present-3-semibold text-white rounded-lg cursor-pointer ">Login</button>
        </form>
        <div className=" flex flex-col w-full items-center sm:flex-row justify-center gap-2 text-present-3-regular " >
          <p className="text-grey-500  " >Don't have an account?</p>
          <Link href={"/"} className="text-purple-600" >Create account</Link>
        </div>
      </div>
    </ContainerLogin>
  );
}
