import { Button } from '@/components/ui/button'
import { UserContext } from '@/contexts/UserContext'
import { LogOut, User, UserRound } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import React, { useContext, useState } from 'react'

interface OptionProps {
  url?: string;
  label: string;
  icon: React.ReactNode;
  fn?: () => void;
}

export default function NavBarOptions() {
  const { push } = useRouter()
  const token = parseCookies()?.token
  const { removeToken } = useContext(UserContext)
  const [showOptions, setShowOptions] = useState(false)
  const logout = () => {
    removeToken()
    push('/login')
  }

  const options: OptionProps[] = [
    {
      url: "profile",
      label: "Profile",
      icon: <User size={20} />,
    },
    {
      label: "Logout",
      icon: <LogOut size={20} />,
      fn: logout
    }
  ];

  const Option: React.FC<OptionProps> = ({ url, label, icon, fn }) => {
    return (
      <>
        {url ?
          <Link className='flex gap-2' href={url}>
            {icon} {label}
          </Link>
          :
          <button className='flex gap-2' onClick={fn}>
            {icon} {label}
          </button>
        }
      </>
    )
  }

  return (
    <div className='flex gap-2'>
      {token ?
        <div className='relative pr-20'>
          <div className='border-2 rounded-full'>
            <UserRound color='white' size={30} onClick={() => setShowOptions(!showOptions)} />
          </div>

          {showOptions &&
            <div className='absolute min-w-32 bg-white rounded-md left-2/4 mt-1 transform -translate-x-3/4 border-2'>
              <ul className='p-1'>
                {options.map((option, index) => (
                  <li key={index} className='flex items-center py-1 gap-2'>
                    <Option {...option} />
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
        :
        <div className='gap-2'>
          <Button className='mr-2' onClick={() => push("/login")}>
            LOGIN
          </Button>
          <Button onClick={() => push("/signup")} variant={'secondary'}>
            SIGN UP
          </Button>
        </div>
      }
    </div>
  )
}
