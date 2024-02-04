"use client";
import { AlertDestructive } from "@/components/coustom/ErrorComp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, UserLoginType, UserModel } from "@/model/UserModel";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export default function SingUpAccount() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<UserLoginType>({
    resolver: zodResolver(UserModel),
  });

  const handlerSubmitHelper = (user: User) => {
    console.log("first form submission : ", user);
  };

  const onSubmit: SubmitHandler<UserLoginType> = (user) => {
    console.log("first form submission : ", user);
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-1/2 bg-forthColor hidden  text-white p-12 md:flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mt-2">Digital Campus</h1>
          </div>
          <div>
            <p className="text-lg italic">
              This library has saved me countless hours of work and helped me
              deliver stunning designs to my clients faster than ever before.
            </p>
            <p className="text-lg font-semibold mt-4">Sofia Davis</p>
          </div>
        </div>
        {/* <div className="custom-shape-divider-top-1702328740">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
        {/* <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden"> */}
        <form
          className="w-full m-auto bg-white lg:max-w-lg mx-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to login
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500 text-[.7rem]">*</span>
                </Label>
                <Input
                  {...register("email", { required: true })}
                  id="email"
                  type="email"
                  placeholder=""
                />
                {errors.email && (
                  <p className="text-red-500 text-[.7rem]">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                />
                {errors.password && (
                  <p className="text-red-500 text-[.7rem]">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button type="submit" className="w-full">
                Sign up
              </Button>
              <p className="mt-2 text-xs text-center text-gray-700">
                {"  Don't have an account? "}
                <Link
                  href={"/log-in"}
                  className=" text-primary hover:underline"
                >
                  Log in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </form>
      </div>
      {/* </div> */}
    </>
  );
}

function ChromeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
