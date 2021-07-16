import {ContextMessenger} from "../ContextMessenger";
import React, {useEffect, useState} from "react";

const BodyContext = ({children, parentRef}) => {
    const [messengerHeight, setMessengerHeight] = useState()

    const resizeHandler = e => {
        setMessengerHeight(parentRef.current.clientHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        window.addEventListener('load', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
            window.removeEventListener('load', resizeHandler)
        }
    }, [])

    return (
        <ContextMessenger.Provider value={messengerHeight}>
            {children}
        </ContextMessenger.Provider>
    )
}

export default BodyContext