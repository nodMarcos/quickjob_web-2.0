import { FacebookIcon, GithubIcon, Mail } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-primary-dark py-5 w-full h-60 flex justify-center text-white'>
      <div className='w-[70%] flex'>
        <div className='w-full flex flex-1  flex-col justify-between'>
          <h1 className='text-2xl'>Quick Job</h1>
          <h1>© 2024 Walk Corp. </h1>
        </div>
        <div className='flex flex-1 flex-col items-center w-full gap-2'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>Socials:</h1>
            <div className='flex flex-col items-center gap-3'>
              <Mail />
              <FacebookIcon />
              <GithubIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
