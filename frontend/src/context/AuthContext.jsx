import axios from 'axios';
import React, { createContext, useState } from 'react'
import { toastErrorNotify, toastSuccessNotify } from '../helper/helper';
const url = 'http://mammedovblog.pythonanywhere.com/';

export const AuthContextProv = createContext();

const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("currentUser")) || false)
    const token = sessionStorage.getItem('token')
    const [myToken, setMyToken] = useState(token && window.atob(token))

    // const createUser = async (username, email, firstName, lastName, profile_pic, biography, password, password1) => {
    const createUser = async (userInfo, navigate) => {
        try {
            const res = await axios.post(`${url}auth/register/`, userInfo)
            console.log(res);

            if (res.data.token) {
                setMyToken(res.data.token)
                const userData = { ...res.data, token: '' }
                setCurrentUser({ ...res.data, token: '' })
                sessionStorage.setItem("currentUser", JSON.stringify(userData))
                const token = window.btoa(res.data.token)
                sessionStorage.setItem('token', token)
                toastSuccessNotify('Registered successfully')
                navigate('/')
            }
        } catch (error) {
            const errorString = Object.entries(error?.response?.data)
                .map(([key, value]) => `${key}: ${value[0]}`)
                .join(' ');

            toastErrorNotify(errorString);
        }
    }

    const signIn = async (userLoginInfo, navigate) => {
        try {
            const res = await axios.post(`${url}auth/login/`, userLoginInfo)
            if (res.data.key) {
                setMyToken(res.data.key)
                setCurrentUser(res.data.user)
                sessionStorage.setItem('currentUser', JSON.stringify(res.data.user))
                const token = window.btoa(res.data.key)
                sessionStorage.setItem('token', token)
                toastSuccessNotify('Logined successfully')
                navigate('/')
            }

        } catch (error) {
            toastErrorNotify(error?.response?.data?.error);
        }
    }
    const updateUser = async (updateInfo, id, navigate) => {
        // updateInfo = {
        //     "username": "string",
        //     "email": "user@example.com",
        //     "first_name": "string",
        //     "last_name": "string",
        //     "profile_pic": "string",
        //     "biography": "string"
        // }
        try {
            const res = await axios.patch(`${url}auth/update-profile/${id}`, updateInfo)
            setCurrentUser(res.data)
            sessionStorage.setItem("currentUser", JSON.stringify(res.data))
            toastSuccessNotify('Profile Updated successfully')
            navigate('/')
        } catch (error) {
            toastErrorNotify(error.message);
        }
    }

    const logout = async (navigate) => {
        try {
            const config = {
                method: 'post',
                url: `${url}auth/logout/`,
                headers: {
                    'Authorization': `Token ${myToken}`,
                }
            };
            const res = await axios(config)
            if (res.status === 200) {
                setCurrentUser(false)
                setMyToken("")
                sessionStorage.clear()
                toastSuccessNotify('User log out successfully.')
                navigate("/")
            }


        } catch (error) {
            toastErrorNotify(error.message);
        }
    }





    const value = {
        createUser,
        signIn,
        currentUser,
        logout,
        updateUser
    }
    return (
        <AuthContextProv.Provider value={value}>
            {children}
        </AuthContextProv.Provider>
    )
}

export default AuthContext