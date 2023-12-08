import api from './api';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';

export const logIn = async (data) => {
    try {

        const response = await api.post("/auth/email/login", data)
        if (response.status < 200 || response.status >= 300) {
            toast.error('Wrong mail or password')
            throw new Error(response.errors)
        }

        Cookies.set("auth-token", response.data.token, { expires: 1 });
        return response.data.user;
        
        }

        catch (res) {
            toast.error('Wrong mail or password')
        }
}

export const getCurrentUser = async () => {
    const tokenData = Cookies.get("auth-token");

    if (tokenData) {
        try {

            const response = await api.get("/auth/me")
    
            if (response.status < 200 || response.status >= 300) {
    
                throw new Error(response.errors)
            }

            return response.data;
            
            }
    
            catch (error) {
                console.log(error)
            }
    }
}

export const logOut = async () => {
    try {
        const response = await api.post("/auth/logOut")
        
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.errors)
        }
        Cookies.remove("auth-token")
        return response;

    } catch (error) {
        console.log(error)
    }
}


export const registerNewUser = async (data) => {
    const {email, password, firstName, lastName} = data

    try {
        const response = await api.post("/auth/email/register", {email, password, firstName, lastName})
        
        if (response.status < 200 ||  response.status >= 300) {
            throw new Error(response.errors)
        }
        toast.success('Реэстрація успішна')
        return response;

    } catch (error) {
        console.log(error)
    }
}