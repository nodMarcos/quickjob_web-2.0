'use client'
import NavBar from '@/components/shared/NavBar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserContext } from '@/contexts/UserContext'
import React, { useContext } from 'react'

export default function Page() {
  const { user } = useContext(UserContext)
  return (
    <main className="flex flex-col relative min-h-[100lvh] bg-[#fffefc]">
      <NavBar />
      <div className="flex flex-col lg:px-80">
        <div className='py-4'>
          <h1 className='font-medium text-2xl'>Welcome, {user?.first_name}!</h1>
        </div>
        <div className='bg-white flex flex-col items-center gap-4 w-full p-4 shadow-md border'>
          <div className='flex w-full gap-4 justify-between'>
            <div className='w-full'>
              <h1 className='font-medium'>What service are you looking for?</h1>
              <Input />
            </div>
            <div className='w-full'>
              <h1 className='font-medium'>Where do you need this service?</h1>
              <Input />
            </div>
          </div>
          <Button>Search</Button>
        </div>
      </div>
    </main>
  )
}
