'use client'
import React, { useCallback, useContext, useMemo } from 'react'
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
import loginSchema from '@/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { UserContext } from '@/contexts/UserContext';

export default function Page() {
  const { handleLoginRequest } = useContext(UserContext);
  const { push } = useRouter()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema)
  })

  const canSubmit = useMemo(
    () => form.formState.isValid && !form.formState.isSubmitting,
    [form.formState.isValid, form.formState.isSubmitting]
  );

  const onSubmit = useCallback(
    async (data: z.infer<typeof loginSchema>) => {
      await handleLoginRequest({user: data});
    },
    [handleLoginRequest]
  );

  return (
    <main className='flex min-h-[100lvh] justify-center items-center bg-primary-main'>
      <div className='flex relative flex-col h-screen items-center py-5 w-full justify-center md:w-[400px] md:h-[500px] shadow bg-white md:border md:rounded-md gap-2 '>
        <div className='absolute left-4 top-5'>
          <ArrowLeft className='hover:cursor-pointer' onClick={() => push("/")} />
        </div>
        <Image
          src={LogoImg}
          alt={"Logo"}
          width={100}
          height={100}
        />
        <h1 className='font-bold'>Welcome back!</h1>
        <Form {...form}>
          <form
            id="login-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-2 w-full px-4'
          >
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
            <div className="flex flex-col gap-2 items-center">
              <Button
                type="submit"
                className="w-full"
                disabled={!canSubmit}
                form="login-form"
              >
                Log in
              </Button>
              <span className="text-typography/60">or join us with</span>
              <Button
                onClick={() => { }
                  // signIn("google", {
                  //   callbackUrl: "/",
                  // })
                }
                type="button"
                className="w-full text-red-500 bg-white border gap-2 hover:text-white"
              >
                Google
              </Button>
              <p>Doesn&apos;t have an account? <Link href={"signup"} className='text-primary-main'>Sign up here!</Link></p>
            </div>
          </form>
        </Form>
      </div>
    </main>
  )
}
