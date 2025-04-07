import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <div className='relative'>
            <Image
                width={150}
                height={150}
                src="/gchs-logo.png"
                alt='Logo'
                className='hidden lg:block' />
            <Image
                width={120}
                height={120}
                src="/gchs-logo.png"
                alt='Logo'
                className='lg:hidden' />
        </div>
    )
}
