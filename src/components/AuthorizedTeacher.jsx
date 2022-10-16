import React, { useState, useEffect } from 'react'
import { UserAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function AuthorizedTeacher({ children }) {

    const { currentUser, checkIfTeacher } = UserAuth()
    const [email, setEmail] = useState(currentUser?.email)
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('')
    useEffect(() => {
        checkIfTeacher(email)
            .then(res => {
                if (res)
                    setUser('teacher')
                else
                    setUser('student')
            })
            .catch(e => {

            })
            .finally(() => {
                setLoading(true);
            })
    }, [email]);

    if (loading) {
        if (user === 'teacher')
            return children
        return <Navigate to='/student-profile' />
    }

}
