import { robotoMono } from '@/fonts/robotoMono';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import UploadFolderModal from './folder/UploadFolderModal';
import UploadfileModal from './file/UploadFileModal';


const SideNavbar = ({parentfolderId}: {parentfolderId: string}) => {
    const {data: session} = useSession()
    return (
        <div className='w-24 md:w-56 h-screen bg-[#252529] shadow-2xl px-3'>
            <Link href={`/dashboard/${session?.user?.email}`}><div className={`text-2xl ${robotoMono.className} font-bold md:text-2xl text-center pt-3 mb-5 `}>vFile</div></Link>

            <UploadFolderModal parentfolderId={parentfolderId}/>

            <UploadfileModal parentfileId={parentfolderId}/>

            
        </div>

        
    );
}

export default SideNavbar;
