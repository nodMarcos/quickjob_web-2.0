'use client'
import React, { useCallback, useMemo } from 'react'
import LogoImg from "@/assets/fox.svg"
import Image from 'next/image'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import signUpSchema from '@/schemas/signUp';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Lock, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Page() {
  const { push } = useRouter()
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema)
  })

  const canSubmit = useMemo(
    () => form.formState.isValid && !form.formState.isSubmitting,
    [form.formState.isValid, form.formState.isSubmitting]
  );

  const onSubmit = useCallback(
    async (data: z.infer<typeof signUpSchema>) => {
      console.log(data)
      // await handleLoginRequest(data);
    },
    [] // [handleLoginRequest]
  );

  return (
    <main className='flex h-screen justify-center items-center bg-primary-main'>
      <div className='flex relative flex-col items-center shadow bg-white md:border rounded-md gap-2 py-4 w-[400px]'>
        <div className='absolute left-4'>
          <ArrowLeft className='hover:cursor-pointer' onClick={() => push("/")} />
        </div>
        <Image
          src={LogoImg}
          alt={"Logo"}
          width={100}
          height={100}
        />
        <h1 className='font-bold'>Welcome!</h1>
        <Form {...form}>
          <form
            id="signup-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-2 w-full px-4'
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      icon={<User className="w-5 h-5 text-typography/60" />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      icon={<User className="w-5 h-5 text-typography/60" />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      icon={<Mail className="w-5 h-5 text-typography/60" />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      icon={<Lock className="w-5 h-5 text-typography/60" />}
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password Confirmation</FormLabel>
                  <FormControl>
                    <Input
                      icon={<Lock className="w-5 h-5 text-typography/60" />}
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2 items-center">
              <Button
                type="submit"
                className="w-full"
                disabled={!canSubmit}
                form="signup-form"
              >
                Sign Up
              </Button>
              <p>Already have an account? <Link href={"login"} className='text-primary-main'>Log in here!</Link></p>
            </div>
          </form>
        </Form>
      </div>
    </main>
  )
}
