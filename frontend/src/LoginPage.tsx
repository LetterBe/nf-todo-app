import {useState} from "react";

export default function LoginPage(){

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const login = () => {
        /*hier wird über das backedn ein jwt tocken geholt*/
    }



    return(
        <div>
           <input type="text" placeholder={'email'} value={email} onChange={ev => setEmail(ev.target.value)}/>
           <input type="text"  placeholder={'password'} value={password} onChange={ev => setPassword(ev.target.value)}/>
           <button onClick={login}>Login</button>
        </div>
    )

}