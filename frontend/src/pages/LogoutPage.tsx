
export default function LogoutPage(){

    const logout = () => {
        localStorage.setItem("token","")
    }


    return (
        <div>
            <button onClick={logout}>Log out</button>
        </div>
    )
}