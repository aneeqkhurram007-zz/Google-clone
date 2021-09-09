import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Avatar from '../Avatar/Avatar'
import HeaderOptions from './HeaderOptions/HeaderOptions';
function Header() {
    const router = useRouter();
    const ref = useRef(null)
    const search = (e) => {
        e.preventDefault();
        const term = ref.current.value;
        if (!term) {
            return
        }
        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    alt="Google Branding"
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push('/')}
                />
                <form className="flex border border-gray-200 rounded-full flex-grow
            shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5
            ">
                    <input type="text" ref={ref} className="flex-grow
                w-full focus:outline-none" />
                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100
                transform hover:scale-125
                " onClick={() => ref.current.value = ""} />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500
                border-l-2 pl-4 border-gray-300
                "/>
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url="https://yt3.ggpht.com/yti/APfAmoHEWzJZy4EWMkoxS4ykj95fX8WZhFmFBjB1ocad8A=s88-c-k-c0x00ffffff-no-rj-mo" />
            </div>
            {/* Header Options */}
            <HeaderOptions />
        </header>
    )
}

export default Header
