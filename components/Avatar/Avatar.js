import React from 'react'
const Avatar = ({ url, className }) => {
    return (
        <img
            className={`h-10 rounded-full 
            cursor-pointer transition duration-150 
            transform hover:scale-110"
            loading="lazy ${className}`}
            src={url}
            alt="Profile Pic"

        />

    )
}

export default Avatar