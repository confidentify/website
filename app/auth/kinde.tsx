import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const KindeStuff = () => {
    const { user, isAuthenticated, getToken, logout, login, register } = useKindeAuth();

    const callApi = () => {
        if (getToken !== undefined) {
            getToken().then(token => {
                console.log(token)
            })
        }
    }

    return <>
        {isAuthenticated ? <>
            Name: {user?.given_name} {user?.family_name}
            <button onClick={() => callApi()} type="button">Call API</button>
            <button onClick={() => logout()} type="button">Log out</button>
        </> : <>
            <button onClick={() => register()} type="button">Register</button>
            <button onClick={() => login()} type="button">Log In</button>
        </>}
    </>
}