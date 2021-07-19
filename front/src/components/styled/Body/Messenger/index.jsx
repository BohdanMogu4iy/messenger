import React, {useEffect, useState} from 'react'
import DesktopMessenger from "./Desktop";
import MobileMessenger from "./Mobile";


const Messenger = () => {
    const [media, setMedia] = useState()

    const resizeHandler = () => {
        setMedia(window.matchMedia("(min-width: 1040px)").matches)
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        window.addEventListener('load', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
            window.addEventListener('load', resizeHandler)
        }
    }, [])

    return (
        <>
            {
                media ? (
                    <DesktopMessenger/>
                ) : (
                    <MobileMessenger/>
                )
            }
        </>
    )
}

export default Messenger