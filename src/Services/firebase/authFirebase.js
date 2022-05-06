import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";

export const auth = getAuth();

export const register = (email, password, name) => {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateUser(name);
                resolve();
            })
            .catch(error => reject(error));
    })
};

const updateUser = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name
    }).then(() => { })
        .catch((error) => {
            console.log("Error al actualizar Usuario", error)
        });
};

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
    return signOut(getAuth())
}

export const authenticationState = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            resolve(user);
        });
    });
}