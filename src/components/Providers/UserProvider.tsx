import React, { createContext,  useState, useEffect} from 'react';
import {auth} from '../../firebase';

export const UserContext = createContext({user:{}, isLoggedIn:false});

const UserProvider : React.FC = ({children}) => {
    const [userAuth, setUserAuth] = useState({user:{}, isLoggedIn:false});
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            console.log(userAuth)
            userAuth? setUserAuth({user:userAuth, isLoggedIn:true}) : setUserAuth({user:{}, isLoggedIn:false})
        });
    },[] ); // Empty array so I am not caught in an infinite loop!

    return(
        <UserContext.Provider value={userAuth}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;