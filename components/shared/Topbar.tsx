import { OrganizationSwitcher, SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs"
import { Link } from "lucide-react"
import Image from "next/image"
import { dark } from "@clerk/themes"

const Topbar = () => {
  return (
    <nav className="topbar">
        <div className="flex items-center gap-4 justify-start">
            <Link href='/' className=''></Link>
            <div className="flex">
                <Image src='/assets/logo.svg' alt='logo' width={28} height={28}/>
                {/* <p className=' text-light-1 max-xs:hidden'>Threads</p> */}
            </div>
        </div>

        <div className='flex items-center gap-1'>
            <div className='block md:hidden'>
            <SignedIn>
                <SignOutButton>
                <div className='flex cursor-pointer '>
                    <Image
                    src='/assets/logout.svg'
                    alt='logout'
                    width={24}
                    height={24}
                    />
                </div>
                </SignOutButton>
            </SignedIn>
            </div>
        </div>
        
        <OrganizationSwitcher
            appearance={{
                baseTheme: dark,
            }}
        />
    </nav>
  )
}

export default Topbar