'use client';

import FileList from "@/components/file/FileList";
import FolderList from "@/components/folder/FolderList";
import SearchBar from "@/components/SearchBar";
import SideNavbar from "@/components/SideNavbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {

    const slug = use(params).slug;
    const { data: session } = useSession()
    const [parentfolderId, setparentfolderId] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push('/')
        }
        setparentfolderId('0')
    }, [slug, session]);

    return (
        <div className="p-4 flex">
            <SideNavbar parentfolderId='0'/>

            <div className="flex w-full flex-col md:flex-row">
                <div className="w-[65%] mx-6">
                    <SearchBar />
                    <FolderList parentfolderId={parentfolderId}/>
                    <FileList parentfolderId={parentfolderId}/>
                </div>

                <div>Storage</div>
            </div>
        </div>
    );
}
