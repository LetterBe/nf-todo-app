import {useState} from "react";

export default function LoginPage(){

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [token, setToken] = useState(localStorage.getItem("token"))


    const login = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/login`, {
            method:"POST",
            body: JSON.stringify({
            "username":email,
             "password":password
            }),
            headers: {
            "Content-Type":"application/json",
                "Authorization": "Bearer" + token
            }
        })
            .then  (response => {
                return response.text()
            })
            .then((responseBody: string) => {localStorage.setItem("token", responseBody)})
    }

    return(
        <div>
           <input type="text" placeholder={'email'} value={email} onChange={ev => setEmail(ev.target.value)}/>
           <input type="text"  placeholder={'password'} value={password} onChange={ev => setPassword(ev.target.value)}/>
           <button onClick={login}>Login</button>
        </div>
    )

}
