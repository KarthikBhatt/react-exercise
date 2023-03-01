import React from 'react'

const PlayPause = () => {
    let [authUser,  SetAuthUser] = React.useState(false)
    let AcceptedUser=()=>{
  return (
    <>
    <nav>
        <ol>
            <li>
                Logo
            </li>
            <li>
                Menu
            </li>
            <li>
                Contact
            </li>
            <li>
                Search
            </li>
        </ol>
    </nav>
    </>
  )
}
let NotAcceptedUser=()=>{
return (
    <>
    <nav>
        <ol>
            <li>
                Login
            </li>
            <li>
                Signup
            </li>
            <li>
                forgot password
            </li>
        </ol>
    </nav>
    </>
)
}
return<>{authUser ?<AcceptedUser/>:<NotAcceptedUser/>} </>
}

export default PlayPause