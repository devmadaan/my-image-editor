"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "./action/loginAction"


function LoginForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: object) => {
    // console.log("Data : ", data);
    await loginAction(data);
  };
  return (
    <div className="max-w-[416px] w-full mx-auto    rounded-lg min-h-[450px] p-10">
      <h1 className="text-3xl mb-7 font-bold">Sign in to Image Editor</h1>
      <div className="flex items-center justify-center border border-[#e7e7e9] rounded-full py-4 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          role="img"
          className="icon "
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z"
            fill="#4285F4"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z"
            fill="#34A853"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z"
            fill="#FBBC05"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
            fill="#EA4335"
          ></path>
        </svg>
        <span className="ml-2 text-sm font-semibold ">Sign in with Google</span>
      </div>
      <div className="flex items-center justify-center flex-row my-4">
        <hr className="border-t border-[#e7e7e9] w-full" />
        <span className="whitespace-nowrap mx-2 text-sm text-[#6e6d7a]">
          or sign in with email
        </span>
        <hr className="border-t border-[#e7e7e9] w-full" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col gap-3 w-full mb-3">
          <label className="text-[#0d0c22] font-semibold">Username</label>
          <input
            type="text"
            className="px-3 text-sm text-[#0d0c22] rounded-xl w-full min-h-[46px] border border-[#e7e7e9]"
            {...register("username", { required: true })}
          />
          {errors.username?.type == "required" && (
            <p className="text-sm text-red-600">Username Required</p>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-3 w-full mb-5">
          <label className="text-[#0d0c22] font-semibold">Password</label>
          <input
            type="password"
            className="px-3 text-sm text-[#0d0c22] rounded-xl w-full min-h-[46px] border border-[#e7e7e9]"
            {...register("password", { required: true })}
          />
          {errors.password?.type == "required" && (
            <p className="text-sm text-red-600">Password Required</p>
          )}
        </fieldset>
        <fieldset>
          <button
            type="submit"
            className="rounded-full py-4 px-2 bg-[#0d0c22] w-full text-white font-semibold"
          >
            Sign In
          </button>
        </fieldset>
        <div className="ml-2 text-sm text-[#3d3d4e] flex items-center justify-center flex-row my-4 ">
          Don't have an account?{" "}
          <a className="underline" href="">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
