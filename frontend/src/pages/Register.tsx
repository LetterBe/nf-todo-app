import {useState} from "react";

export default function Register() {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[toke, setToken] = useState("")

    const register = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/user`, {
            method:"POST",
            body: JSON.stringify({
                "email":email,
                "password": password,
            }),
            headers: {
                "Content-Type":"application/json"
            }
            })
            .then(response => {
                return response.json()
            })

    }

    return (
        <div>
            <input type={"text"} placeholder={"E-mail"} value={email} onChange={e => setEmail(e.target.value)}/><br/><br/>
            <input type={"text"} placeholder={"Password"} value={password} onChange={e => setPassword((e.target.value))}/><br/>
            <button onClick={register}>Register!</button>
        </div>
    )
}