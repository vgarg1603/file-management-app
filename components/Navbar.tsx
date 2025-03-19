'use client'
import { robotoMono } from '@/fonts/robotoMono';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';


const Navbar = () => {
    const {data: session} = useSession()

    return (
        <div className='fixed top-0 left-0 w-full flex justify-between items-center bg-[#1c1c1e86] backdrop-blur-md  pt-1 px-2'>
            <Link href={session ? '/dashboard': '/'}><div className={`hover:cursor-pointer logo font-bold text-lg ${robotoMono.className} ml-2`}>
                vFile
            </div></Link>

            <div className=" flex items-center justify-center gap-2">
                <div className='hover:cursor-pointer px-2 py-4 flex gap-1 rounded-lg justify-center items-center hover:bg-[#3C3C41]'>
                    <div className='w-1 h-1 bg-white rounded-full'></div>
                    <div className='w-1 h-1 bg-white rounded-full'></div>
                    <div className='w-1 h-1 bg-white rounded-full'></div>
                </div>

                {session && <button type="button" onClick={() =>
                    signOut()
                } className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Log out</button>}
            </div>

        </div>
    );
}

export default Navbar;
