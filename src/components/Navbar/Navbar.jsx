"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../assets/logos.png'
import Link from 'next/link'
import NavLinks from './NavLinks'
import Button from './Button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [open,setOpen]=useState(false)
    return (
        <nav className='bg-white'>
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 p-2 md:w-auto w-full flex justify-between'>
                    <Link href={'/'}><Image src={logo} width={180} alt='logo' className='md:cursor-pointer h-14' /></Link>
              <div className='p-4 md:hidden' onClick={()=>setOpen(!open)}>
              { open?<CloseIcon/>:<MenuIcon/>}
              </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
                    <li>
                        <Link className='py-7 inline-block px-3' href={'/'}>Home</Link>
                    </li>
                    <NavLinks />
                </ul>
                <div className='md:block hidden'>
                    <Button />
                </div>
                {/* Mobive nav */}
                <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
                duration-500 ${open ? 'left-0':'left-[-100%]'}
                `}>
                    <li>
                        <Link className='py-7 inline-block px-3' href={'/'}>Home</Link>
                    </li>
                    <NavLinks />
                    <div className='py-5'>
                        <Button/>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar