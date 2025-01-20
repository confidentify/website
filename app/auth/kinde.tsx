import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const KindeStuff = () => {
    const { user, isAuthenticated, logout, login, register } = useKindeAuth();

    return <>
        {isAuthenticated ? <>
            Name: {user?.given_name} {user?.family_name}
            <button onClick={() => logout()} type="button">Log out</button>
        </> : <>
            <button onClick={() => register()} type="button">Register</button>
            <button onClick={() => login()} type="button">Log In</button>
        </>}
    </>
}