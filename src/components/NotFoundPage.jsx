import React from 'react'
import {Link} from 'react-router-dom'
import Header from "./Header"

function NotFoundPage() {
    return (
        <>
            <Header/>
            Page not Found. GoTo <Link to="/dashboard">Home Page</Link>
        </>
    )
}

export default NotFoundPage
