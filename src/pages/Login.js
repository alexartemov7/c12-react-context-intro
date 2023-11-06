import { useContext } from "react"
import { UserContext } from "../App"

export default function Login() {
    const {userState, setUserState} = useContext(UserContext)

    const handleFormSubmit = e => {
        e.preventDefault()
        
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        console.log('formData ->', formData)
    }
    
    console.log('userInfo in Login', userState)

    return (
        
        <form action="submit" onSubmit={handleFormSubmit}>
            <label htmlFor="">
                Email: 
                <input type="text" name="email" id="" />
            </label>
            <label htmlFor="">
                Password: 
                <input type="password" name="password" id="" />
            </label>
            <button type='submit'>Login</button>
        </form>
    )
}