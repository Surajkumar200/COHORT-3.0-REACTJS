import React from 'react'
import { Navigate} from 'react-router'

const ProtecteRoute = ({ children }) => {
    let isAdmin = false
    
    if (!isAdmin) {
        console.log("hey im protected")
        return <Navigate to={"/"}/>
    }
    
    return children
}

export default ProtecteRoute