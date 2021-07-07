import React from 'react'
import '../Css/Login.css'
import {auth,provider} from './firebase'
import {Button} from '@material-ui/core'
function Login() {
    const SignIn=()=>{
        auth.signInWithPopup(provider)
        .catch(error=>alert(error.message))
    }
    return (
        <div className='login' >
           <div className="login_logo">
               <img src="data:image/png;base64,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" alt="Not Found" />
           </div>
           <Button onClick={SignIn}>Sign In</Button>
        </div>
    )
}

export default Login
