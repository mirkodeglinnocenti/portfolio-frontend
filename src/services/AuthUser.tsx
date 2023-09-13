import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
    const navigate = useNavigate();

    // Salva i dati nello store della sessione e fa il redirect alla dashboard
    const saveToken = (user:any, token:any) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }

    // Effettua il logout
    const logout =() => {
        sessionStorage.clear();
        navigate('/login');
    }

    // Prende i dati dalla sessione
    const getToken =() => {
        const tokenString:any = sessionStorage.getItem('token');
        const userToken:any = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        const userString:any = sessionStorage.getItem('user');
        const user_detail:any = JSON.parse(userString);
        return user_detail;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    
    const http = axios.create({
        baseURL: "http://127.0.0.1:8000/api/auth",
        headers: {
            "Content-type": "application/json"
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        logout,
        http
    }
}

// import axios from 'axios';

// const http = axios.create({
//     baseURL: "http://127.0.0.1:8000/api/auth",
//     headers: {
//         "Content-type": "application/json"
//     }
// });

// export default http;
