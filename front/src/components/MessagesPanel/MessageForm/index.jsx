import React from 'react'

const MessagesForm = () => {
    return (
        <form>
            <input type={'text'} placeholder={'message'}/>
            <input type={'submit'} value={'Sent message!'}/>
        </form>

    )
}

export default MessagesForm