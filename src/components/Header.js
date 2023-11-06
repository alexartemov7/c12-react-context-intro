import { useContext } from "react"

import { UserContext } from "../App"

export default function Header() {
    const { userState } = useContext(UserContext)

    console.log('userInfo ->', userState)
    return (
        <>
        <h2> this is Header {userState.userName} </h2>
        </>
    )
}