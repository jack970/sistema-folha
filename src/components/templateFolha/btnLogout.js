import React from 'react'
import { logout } from '../../services/auth'

const LogoutBtn = () => {

    const LogOut = () => {
        logout()
        window.location.reload()
    }

    return(
        <button className="btn btn-danger" onClick={() => LogOut()}>
            Logout
        </button>
    )
}

export default LogoutBtn