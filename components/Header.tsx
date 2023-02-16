import Image from "next/image"
import Link from "next/link";
import netflix from '../public/netflix.png'
import { IconUser,IconSearch,IconBell,IconQuestionCircle,IconPencil } from '@tabler/icons';
import { useEffect, useState } from "react";


function Header() {
    const[isScrolled,setIsScrolled]=useState(false)

    useEffect(()=>{ //? runs on one single mount
        const handleScroll =()=>{
            if (window.scrollY > 0){
                setIsScrolled(true)
            } else{
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll",handleScroll)
        
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }

    },[])



  return (
    <header className={`${isScrolled && 'bg-[#000000]'} transition-opacity transition-duration-200`} style={{ transition: 'background-color 0.5s ease-in-out' }}>
    {/* // <header className={`${isScrolled && 'bg-opacity-[90]-[#000000]'}`} style={{ transition: 'background-color 0.5s ease-in-out, opacity 0.5s ease-in-out' }}> */}
        <div className="flex items-center space-x-2 md:space-x-10">
            <Image className="cursor-pointer object-contain" src={netflix} width={100} height={100} alt="Netflix logo" />

            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink ">Home</li>
                <li className="headerLink ">Tv Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">My List</li>
                <li className="headerLink">Browse by languages</li>
            </ul>

        </div>

        {/*Right section of Navbar */}
        <div className="flex  items-center text-sm font-light underline space-x-4">
        <IconSearch className="hidden sm:inline cursor-pointer " >
            
        </IconSearch>
        
        <IconBell className="hidden sm:inline cursor-pointer">
        </IconBell>

        {/* <avatar>
            <ul></ul>
            <ul>
                <div className="flex">
                    <p>Manage Profile</p>
                    <Link href="/profiles/manage">
                        <IconPencil className="hidden sm:inline h-6 w-6 "> 
                        </IconPencil>
                    </Link>
                </div>
            </ul>
            <ul>
                <div className="flex">
                    <p>Transfer Profile</p>
                    <Link href="/account">
                        <IconUser className="hidden sm:inline h-6 w-6 "> 
                        </IconUser>
                    </Link>
                </div>
            </ul>

            <ul>
                <div className="flex">
                    <p>Account</p>
                    <Link href="/account">
                        <IconUser className="hidden sm:inline h-6 w-6 "> 
                        </IconUser>
                    </Link>
                </div>
            </ul>

            <ul>
                <div className="flex">
                    <p>Help Center</p>
                    <Link href="/helpcenter">
                        <IconQuestionCircle className="hidden sm:inline h-6 w-6 "> 
                        </IconQuestionCircle>
                    </Link>
                </div>
            </ul>
        </avatar> */}

        </div>
    </header>
  )
}

export default Header