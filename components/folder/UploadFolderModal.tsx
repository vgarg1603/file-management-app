import { Client, Account, Databases, ID } from 'appwrite';
import { useSession } from 'next-auth/react';
import React, { ReactHTMLElement, useState } from 'react';

const UploadFolderModal = ({parentfolderId}: {parentfolderId: string}) => {
    const { data: session } = useSession()

    const client = new Client();
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('676ffe1f002efe9aedbb'); // Replace with your project ID

    const databases = new Databases(client);


    const [isModalOpen, setModalOpen] = useState(false);
    const [folder, setfolder] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (folder === '') {
            alert("Folder name cannot be empty");
            setfolder('');
            return;
        }
        // console.log(folder);
        const promise = databases.createDocument(
            '6770017500023bcdb7ee',
            '67793d02003928c16659',
            ID.unique(),
            {
                name: folder,
                parentfolderId: parentfolderId,
                username: session?.user?.email?.split('@')[0],
            }
        )
        promise.then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        closeModal();
    }

    const closeModal = () => {
        setModalOpen(false);
        setfolder('');
    };

    return (
        <div>
            {/* Button to open the modal */}
            <button
                onClick={() => setModalOpen(true)}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                New Folder
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" aria-hidden={!isModalOpen}
                >
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-md">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Create New Folder
                            </h3>
                            <button
                                onClick={closeModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSubmit} className="p-4 md:p-5">
                            <div className="mb-4">
                                <label
                                    htmlFor="folder"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Folder
                                </label>
                                <input
                                    type="text"
                                    id="folder"
                                    onChange={(e) => setfolder(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Upload Folder
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadFolderModal;
