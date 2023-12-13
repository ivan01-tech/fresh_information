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
      <div className="custom-shape-divider-top-1702328740">
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
      </div>
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <form
          className="w-full m-auto bg-white lg:max-w-lg"
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
    </>
  );
}
