'use client'
import Navbar from "@/components/Navbar";
import { robotoMono } from "@/fonts/robotoMono";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const {data: session} = useSession()
  const router = useRouter()
  useEffect(() => {
    const email = session?.user?.email
    const username = email?.split("@")[0]
    if(session) {
      router.push(`/dashboard/${username}`)
    }
  }, [session])
  
  return (
    <>
      <Navbar />
      <div className="bg-[#1C1C1E] pb-20">

        <div className=" pt-10 flex mx-auto items-center flex-col w-3/4">
          <div className="video p-10 bg-[#1B1A1D]">
            <video width={450} height={700} autoPlay loop muted playsInline className="bg-transparent">
              <source src="./vFileVideo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={`text-6xl ${robotoMono.className} font-bold mt-3 md:text-9xl`}>vFile</div>

          <Link href={'/login'}><button className={`my-14 hover:bg-[#B2B2B2] text-lg text-[#1C1C1E] bg-white py-2 px-12 rounded-full font-semibold ${robotoMono}`}>Sign In</button></Link>

          <div className="flex flex-col justify-center items-center ">
            <div className={`${robotoMono} text-2xl md:text-4xl font-semibold`}>The best place for all your</div>
            <div className={`${robotoMono} text-2xl md:text-4xl font-semibold`}>photos, files, notes, mail,</div>
            <div className={`${robotoMono} text-2xl md:text-4xl font-semibold`}> and more.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-20">
            <div className="px-10 shadow-2xl shadow-black p-10 rounded-lg flex flex-col items-center justify-center">
              <Image className="my-8 " alt="tp" src="/folders.png" width={300} height={200}></Image>

              <h2 className=" mt-5 font-bold text-xl text-wrap mb-3">Where Speed Meets Simplicity.</h2>

              <p className="text-justify">Tired of messy folders and sluggish file management? vFile is here to revolutionize the way you organize your digital world. Designed with speed and simplicity at its core, vFile ensures a seamless and hassle-free experience for users of all kinds. With its lightning-fast performance, you can search, sort, and organize your files in no time.</p>
            </div>

            <div className="px-10 shadow-2xl shadow-black p-10 rounded-lg flex flex-col items-center justify-center">
              <Image className="my-8 " alt="tp" src="/documents.png" width={300} height={200}></Image>

              <h2 className="mt-5 font-bold text-xl text-wrap mb-3">Your Files, Safer Than Ever.</h2>

              <p className="text-justify">vFile brings powerful tools for organizing, renaming, moving, and deleting files into one simple platform, ensuring that everything you need is just a tap away. Customizable settings allow you to tailor the app to your workflow, while its lightweight design ensures smooth performance without slowing down your device.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
