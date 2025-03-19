import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FolderItem = ({ folder }: { folder: any }) => {
    return (
        <Link href={`/folders/${folder.$id}`}>
            <div
                className="max-h-28 flex flex-col items-center justify-center p-4 hover:scale-105 hover:cursor-pointer hover:shadow-md transition-transform bg-[#1C1C1E] rounded-lg"
                role="button"
                aria-label={`Open folder ${folder.name}`}
            >
                <Image
                    alt="Folder icon"
                    className="mt-3"
                    width={35}
                    height={35}
                    src="/folderItem.png"
                />
                <h2 className="my-1 text-sm md:text-base text-center text-white md:w-[120px] break-words">
                    {folder.name || "Untitled Folder"}
                </h2>
            </div>
        </Link>
    );
}

export default FolderItem;