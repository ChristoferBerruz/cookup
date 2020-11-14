import React, { createContext,  useState, useEffect} from 'react';
import {auth} from '../../firebase';

export const UserContext = createContext({user:{}});

const UserProvider : React.FC = ({children}) => {
    const [user, setUser] = useState({user:{}});
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            userAuth? setUser({user:userAuth}) : setUser({user:{}})
        });
    },[] ); // Empty array so I am not caught in an infinite loop!

    return(
        <UserContext.Provider value={{user:user}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;