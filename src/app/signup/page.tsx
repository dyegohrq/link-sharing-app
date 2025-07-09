"use client";

import ContainerLogin from "@/components/containerLogin";
import LogoImg from "../../../public/assets/images/logo-devlinks-large.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { CheckoutFormData } from "../login/page";
import Input from "@/components/Input";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  function onSubmit() {
    alert("ok");
  }

  return (
    <ContainerLogin>
      <Image src={LogoImg} alt="Logo DevLinks" className="mb-[70px]" />
      <div className="w-full sm:bg-white rounded-[12px] p-10">
        <div className="mb-10">
          <h1 className="text-present-2 text-grey-900 mb-2">Create account</h1>
          <p className="text-present-3-regular text-grey-500 ">
            Let's get you started sharing your links!
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
              placeholder="At least 8 characters"
              label="Create password"
              icon={<RiLockPasswordFill />}
              id="createPassword"
              error={errors.createPassword?.message}
              register={register}
              requiredMessage="Please check again"
              pattern={{
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                message: "Wrong Format",
              }}
            />
          </div>
          <div>
            <Input
              placeholder="At least 8 characters"
              label="Confirm password"
              icon={<RiLockPasswordFill />}
              id="confirmPassword"
              error={errors.confirmPassword?.message}
              register={register}
              requiredMessage="Please check again"
              pattern={{
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                message: "Wrong Format",
              }}
            />
            <p className="text-present-4 mt-2 text-grey-500 " >Password must contain at least 8 characters</p>
          </div>
          <button type="submit" className=" bg-purple-600 w-full py-4 px-6 text-present-3-semibold text-white rounded-lg cursor-pointer ">Create new account</button>
        </form>
        <div className=" flex flex-col w-full items-center sm:flex-row justify-center gap-2 text-present-3-regular " >
          <p className="text-grey-500  " >Already have an account?</p>
          <Link href={"/login"} className="text-purple-600" >Login</Link>
        </div>
      </div>
    </ContainerLogin>
  );
}
