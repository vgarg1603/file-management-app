import { Client, Databases, Query } from 'appwrite';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import FileItem from './FileItem'

const FileList = ({parentfolderId}: {parentfolderId: string}) => {
    const { data: session } = useSession()

    
    const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("676ffe1f002efe9aedbb")

    const databases = new Databases(client);

    const [fileList, setFileList] = useState<any[]>([])
    const [result, setResult] = useState('')

    const getFileList = async () => {
        let promise = await databases.listDocuments(
            '6770017500023bcdb7ee',
            '677bdeb800336870242a',
            [
                Query.equal('username', session?.user?.email?.split('@')[0]!),
                Query.equal('parentfolderId', parentfolderId)
            ]
        )

        setFileList(promise.documents)
    }

    useEffect(() => {
      if(session) {
        getFileList()
      }
    }, [session, fileList])
    


    return (
        <div className='mt-3 md:mt-5 px-5 py-3 bg-[#252529] mx-auto rounded-xl shadow-2xl'>
            <h2 className='text-sm md:text-lg font-bold'>Recent Files</h2>



            <div className='grid grid-cols-1 md:grid-cols-2 text-[13px] font-semibold border-b-[1px] pb-2 mt-3 border-gray-300 text-gray-400'>
                <h2>Name</h2>
                <div className='grid grid-cols-2'>
                    <h2>Modified</h2>
                    <h2>Type</h2>
                </div>
            </div>

            {fileList && fileList.map((item) => (
                <div key={item.$id}>

                    <FileItem file={item}/>
                </div>

            ))}
        </div >
    );
}

export default FileList;
