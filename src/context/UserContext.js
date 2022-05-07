import { createContext, useEffect, useState } from "react";
import { useNotification } from "../Notification/Notification";
import { login, register, logOut as logOutService, authenticationState } from "../Services/firebase/authFirebase";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const { setNotification } = useNotification();
    useEffect(() => {
        getUser();
    }, [])

    const getUser = () => {
        authenticationState()
            .then(user => {
                if (user) {
                    const { email, photoURL, displayName, phoneNumber, uid } = user;
                    setUser({ email, photoURL, displayName, phoneNumber, uid });
                } else {
                    setUser(null);
                }
            })
            .catch(error => console.log(error));
    }

    const registerUser = (email, password, name, navigate) => {
        register(email, password, name)
            .then(() => {
                setNotification('success', 'Usuario registrado exitosamente');
                navigate();
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        setNotification('error', 'Debe ingresar un correo electrónico válido');
                        break;
                    case 'auth/weak-password':
                        setNotification('error', 'La contraseña debe poseer al menos 6 caracteres');
                        break;
                    case 'auth/email-already-in-use':
                        setNotification('error', 'El correo electrónico ya se encuentra registrado');
                        break;
                    default:
                        setNotification('error', 'Error al registrar Usuario');
                        break;
                }
                console.log(error.code)
            });
    }

    const loginUser = (email, password, navigate) => {
        login(email, password)
            .then(() => {
                getUser();
                setNotification('otherClass', 'Sesión iniciada', 'Info');
                navigate();
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        setNotification('error', 'Debe ingresar un correo electrónico válido');
                        break;
                    case 'auth/wrong-password':
                        setNotification('error', 'Usuario o contraseña invalidos');
                        break;
                    default:
                        setNotification('error', 'Error al Iniciar sesión');
                        break;
                }
                console.log(error.code);
            });
    }

    const logOut = (email, password) => {
        logOutService(email, password)
            .then(() => {
                getUser();
                setNotification('otherClass', 'Sesión cerrada', 'Info');
            })
            .catch(error => setNotification('error', error.code));
    }

    return (
        <UserContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext; 
