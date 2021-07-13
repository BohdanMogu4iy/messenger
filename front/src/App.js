import React, {useRef} from 'react'


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
