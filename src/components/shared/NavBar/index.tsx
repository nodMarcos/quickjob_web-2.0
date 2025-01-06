"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import LogoImg from "@/assets/fox.svg"
import NavBarOptions from '../NavBarOptions'
import { useRouter } from 'next/navigation'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export default function NavBar() {
  const { push } = useRouter()
  const [showOptions, setShowOptions] = useState(false)

  const options = [
    {
      url: "login",
      label: "Login"
    },
    {
      url: "signup",
      label: "Sign up"
    },
  ]

  return (
    <nav className="flex items-center justify-between pl-5 pr-10 bg-primary-main py-1.5">
      <div className='md:hidden relative'>
        <Menu color='#fff' onClick={() => setShowOptions(!showOptions)} />
        {showOptions && (
          <ul className='absolute bg-white p-2 border-2 border-slate-200 w-28 flex gap-2 flex-col'>
            {options.map(({ url, label }) => (
              <li key={url} className='text-center'>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Image
        src={LogoImg}
        alt={"Logo"}
        width={45}
        onClick={() => push("/")}
        className='cursor-pointer'
      />

      <div className='hidden md:block'>
        <NavBarOptions />
      </div>
    </nav>
  )
}
