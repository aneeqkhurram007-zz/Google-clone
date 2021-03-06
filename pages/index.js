import Head from 'next/head'
import Avatar from '../components/Avatar/Avatar'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://th.bing.com/th/id/R.32e6a212271c3538521c191e1f9799b1?rik=i5dutFvFtu6j8w&pid=ImgRaw&r=0" type="image/x-icon" />
      </Head>
      <header className="flex w-full p-5 justify-between text-md text-gray-700">

        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://yt3.ggpht.com/yti/APfAmoHEWzJZy4EWMkoxS4ykj95fX8WZhFmFBjB1ocad8A=s88-c-k-c0x00ffffff-no-rj-mo" />
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center mt-44 w-4/5 flex-grow">
        <Image alt="Google Image" src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          width={300}
          height={100}
        />
        <div className="flex w-full border-gray-200 border mt-5 
        hover:shadow-lg focus-within:shadow-lg
        max-w-md rounded-full px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl
        ">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 " />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center
        mt-8 sm:space-y-0 sm:flex-row sm:space-x-4
        
        ">
          <button className="btn" onClick={search}>Google Search</button>
          <button className="btn" onClick={search}>I&apos;m Feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  )
}
