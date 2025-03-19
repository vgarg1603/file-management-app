'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Client, Databases, Query } from "appwrite";
import { useSession } from 'next-auth/react';
import FolderItem from './FolderItem';

const FolderList = ({parentfolderId}: {parentfolderId: string}) => {
    const { data: session } = useSession()
    const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("676ffe1f002efe9aedbb")

    const databases = new Databases(client);

    const [folderList, setfolderList] = useState<any[]>([])

    const getFolderList = async () => {
        let promise = await databases.listDocuments(
            "6770017500023bcdb7ee",
            "67793d02003928c16659",
            [
                Query.equal('username', session?.user?.email?.split('@')[0]!),
                Query.equal('parentfolderId', parentfolderId)
            ]
        )

        setfolderList(promise.documents)
    }

    useEffect(() => {
        if (session) {
            getFolderList()
        }
    }, [session, folderList])



    return (
        <div className="mt-5 px-5 py-3 bg-[#252529] mx-auto rounded-xl shadow-2xl">
            <div className="flex justify-between">
                <h2 className="text-xs md:text-base font-bold">Recent Folders</h2>
                <Link href="/folders">
                    <span className="text-xs hover:underline hover:text-blue-500 cursor-pointer">View All</span>
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                {folderList.length > 0 ? (
                    folderList.map((item) => <FolderItem key={item.$id} folder={item} />)
                ) : (
                    <p className="text-sm text-gray-400 col-span-full">No folders found.</p>
                )}
            </div>
        </div>
    );
}

export default FolderList;
