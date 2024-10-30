import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NavBarOptions() {
  const { push } = useRouter()
  return (
    <div className='flex gap-2 pr-2'>
      <Button onClick={() => push("/login")}>
        LOGIN
      </Button>
      <Button onClick={() => push("/signup")} variant={'secondary'}>
        SIGN UP
      </Button>
    </div>
  )
}
