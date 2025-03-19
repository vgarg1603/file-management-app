'use client';
import FileList from '@/components/file/FileList';
import FolderList from '@/components/folder/FolderList';
import SearchBar from '@/components/SearchBar';
import SideNavbar from '@/components/SideNavbar';
import React, { useEffect, useState } from 'react';
interface Params {
  slug: string;
}

export default function Page({ params }: { params: Promise<Params> }) {
  const [parentfolderId, setParentfolderId] = useState<string>('');
  const [slug, setSlug] = useState<string>('');

  useEffect(() => {
    // Resolve the promise to extract `slug`
    params.then(({ slug }) => {
      setSlug(slug);
      setParentfolderId(slug);
    });
  }, [params]);

  return (
    <div className="p-4 flex">
      <SideNavbar parentfolderId={parentfolderId} />

      <div className="flex w-full flex-col md:flex-row">
        <div className="w-[65%] mx-6">
          <SearchBar />
          <FolderList parentfolderId={parentfolderId} />
          <FileList parentfolderId={parentfolderId} />
        </div>

        <div>Storage</div>
      </div>
    </div>
  );
}
