import React, {useRef} from 'react'
import {io} from "socket.io-client";

const SERVER_URL = 'ws://localhost:3000'
let socket = io(SERVER_URL, {})

socket.on('connected', socket => {
  console.log('front connected'+socket.id)
})

socket.emit("userEvent", {user: "vova"})

function App() {

  const activeUsersRef = useRef(null)
  const allUsersRef = useRef(null)


  return (
    <div className="App">
      <header className="App-header">
        <h2>Active Users</h2>
        <ul ref={activeUsersRef}>
          <li>Empty</li>
        </ul>
        <h2>All Users</h2>
        <ul ref={allUsersRef}>
          <li>Empty</li>
        </ul>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"/>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input type="text" id="message"/>
          </div>
          <input type={"submit"} value={"Send Message"}/>
        </form>
      </header>
    </div>
  )
}

export default App;
