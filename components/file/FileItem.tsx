'use client'
import { Client, Storage } from 'appwrite';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const fileItem = ({ file }: { file: any }) => {
    const [preview, setpreview] = useState<any>()
    const client = new Client()

    const storage = new Storage(client)

    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('676ffe1f002efe9aedbb') // Your project ID

    const previewFile = async () => {
        const result = await storage.getFilePreview('677bdadb0021f4cb038d', file.storage_id)
        setpreview(result)
    }

    return (
        <div>
            <div>
                <Link href={file.url} target='_blank'><div className='hover:cursor-pointer grid grid-cols-1 md:grid-cols-2 text-[13px] font-semibold border-b-[1px] pb-2 mt-3 border-gray-300 text-gray-400'>
                    <div>
                        {preview && preview !== "" && <Image src={preview} width={50} height={50} alt='fileImage' />}
                        <h2 className='text-white'>{file.name}</h2>
                    </div>
                    <div className='grid grid-cols-2'>
                        <h2>{file.createdAt}</h2>
                        <h2></h2>
                    </div>
                </div>
                </Link>

            </div>
        </div>
    );
}

export default fileItem;
