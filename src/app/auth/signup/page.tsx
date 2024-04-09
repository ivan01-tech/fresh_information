"use client";
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
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignUpType, dataSchema } from "@/model/UserSignupModel";
export default function SingUpAccount() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<UserSignUpType>({
    resolver: zodResolver(dataSchema),
  });

  const handlerSubmitHelper = (user: UserSignUpType) => {
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

        <form
          className="w-full m-auto bg-white lg:max-w-lg mx-4"
          onSubmit={handleSubmit(handlerSubmitHelper)}
        >
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to login
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-6 my-1">
                <div className="grid gap-2">
                  <Label htmlFor="first_name">
                    Nom <span className="text-red-500 text-[.7rem]">*</span>
                  </Label>
                  <Input
                    {...register("user.first_name", { required: true })}
                    id="first_name"
                    type="text"
                    placeholder=""
                  />
                  {errors.user?.first_name && (
                    <p className="text-red-500 text-[.7rem]">
                      {errors.user.first_name.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="last_name">
                    Prénom <span className="text-red-500 text-[.7rem]">*</span>
                  </Label>
                  <Input
                    {...register("user.last_name", { required: true })}
                    id="last_name"
                    type="text"
                    placeholder=""
                  />
                  {errors.user?.last_name && (
                    <p className="text-red-500 text-[.7rem]">
                      {errors.user.last_name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 my-1">
                <div className="w-full">
                  <Label htmlFor="email">
                    Email : <span className="text-red-500 text-[.7rem]">*</span>
                  </Label>
                  <Input
                    {...register("user.email", { required: true })}
                    id="email"
                    type="text"
                    placeholder=""
                  />
                  {errors.user?.email && (
                    <p className="text-red-500 text-[.7rem]">
                      {errors.user.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 my-1">
                <div className="w-full">
                  <Label htmlFor="matricule">
                    Matricule :{" "}
                    <span className="text-red-500 text-[.7rem]">*</span>
                  </Label>
                  <Input
                    {...register("user.matricule", { required: true })}
                    id="matricule"
                    type="text"
                    placeholder=""
                  />
                  {errors.user?.matricule && (
                    <p className="text-red-500 text-[.7rem]">
                      {errors.user.matricule.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 my-1">
                <div className="w-full">
                  <Label htmlFor="city">
                    Ville : <span className="text-red-500 text-[.7rem]">*</span>
                  </Label>
                  <Input
                    {...register("user.city", { required: true })}
                    id="city"
                    type="text"
                    placeholder=""
                  />
                  {errors.user?.city && (
                    <p className="text-red-500 text-[.7rem]">
                      {errors.user.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 my-1">
                <div className="w-full">
                  <Label htmlFor="phone">
                    Téléphone :{" "}
                    <span className="text-red-500 text-[.7rem]">*</span>
                  </Label>
                  <Input
                    {...register("user.phone", { required: true })}
                    id="phone"
                    type="text"
                    placeholder=""
                  />
                  {errors.user?.phone && (
                    <p className="text-red-500 text-[.7rem]">
                      {errors.user.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 my-1">
                <div className="w-full">
                  <Label htmlFor="phone">
                    Téléphone :{" "}
                    <span className="text-red-500 text-[.7rem]">*</span>
                  </Label>
                  <Input
                    {...register("user.phone", { required: true })}
                    id="phone"
                    type="text"
                    placeholder=""
                  />
                  {errors.user?.phone && (
                    <p className="text-red-500 text-[.7rem]">
                      {errors.user.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Se rappeller de moi
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
