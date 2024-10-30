"use client"
import Image from 'next/image'
import React from 'react'
import LogoImg from "@/assets/fox.jpg"
import NavBarOptions from '../NavBarOptions'
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const {push} = useRouter()
  return (
    <nav className="flex items-center justify-between bg-primary-main py-1.5">
      <Image
        src={LogoImg}
        alt={"Logo"}
        width={150}
        onClick={() => push("/")}
      />
      <NavBarOptions />
    </nav>
  )
}
