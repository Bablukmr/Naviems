"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../assets/harinagarsugar.png'
import Link from 'next/link'
import NavLinks from './NavLinks'
import Button from './Button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [open,setOpen]=useState(false)
    return (
        <nav className='bg-white shadow-lg fixed top-0 w-full'>
            <div className='flex items-center font-semibold md:mx-10 text-base justify-between'>
                <div className='z-50 p-2 md:w-[15%] w-full flex justify-between'>
                    <Link href={'/'}><Image src={logo} width={180} alt='logo' className='md:cursor-pointer h-14' /></Link>
              <div className='p-1.5 bg-slate-300 m-3 rounded-md border-neutral-950 border-1 md:hidden' onClick={()=>setOpen(!open)}>
                     { open?<CloseIcon/>:<MenuIcon/>}
              </div>
                </div>
                <ul className='md:flex w-[90%] hidden uppercase justify-end items-center  font-[Montserrat]'>
                
                    <li>
                        <Link className='py-7 inline-block px-3 hover:text-blue-600' href={'/'}>About</Link>
                    </li>
                    <NavLinks />
                    <li>
                        <Link className='py-7 inline-block px-3 hover:text-blue-600' href={'/'}>Cogen</Link>
                    </li>
                    <li>
                        <Link className='py-7 inline-block px-3 hover:text-blue-600' href={'/'}>Fertilizer</Link>
                    </li>
                    <li>
                        <Link className='py-7 inline-block px-3 hover:text-blue-600' href={'/'}>Contact</Link>
                    </li>
                </ul>
                {/* <div className=' lg:block hidden'>
                    <Button />
                </div> */}
               
            </div>

             {/* Mobive nav */}
             <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 pt-40 pl-4 
                duration-500 ${open ? 'left-0':'left-[-100%]'}
                `}>
                    
                    <li>
                        <Link className='py-7 inline-block px-3 hover:text-blue-600' href={'/'}>About</Link>
                    </li>
                    <NavLinks />
                    <li>
                        <Link className='py-7 inline-block px-3 hover:text-blue-600' href={'/'}>Cogen</Link>
                    </li>
                    <li>
                        <Link className='py-7 inline-block px-3 hover:text-blue-600' href={'/'}>Contact</Link>
                    </li>
                   
                    {/* <div className='py-5'>
                        <Button/>
                    </div> */}
                </ul>
        </nav>
    )
}

export default Navbar