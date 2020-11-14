import React, {createContext, useReducer} from 'react';
interface ItemActionInterface{
    item:string,
    action:string
}

export interface CookUpContextProps{
    selectedIngredients:string[],
    setSelectedIngredients:Function,
    selectedTags:string[],
    setSelectedTags:Function
}

export const CookUpContext = createContext({
    selectedIngredients:new Array<string>(),
    setSelectedIngredients:new Function(),
    selectedTags:new Array<string>(),
    setSelectedTags:new Function()
});

function reducer(state:string[], itemAction:ItemActionInterface){
    const item = itemAction.item;
    const action = itemAction.action;
    switch(action){
        case "add":
            return [...state, item];
        case "remove":
            const update = [...state];
            update.splice(update.indexOf(item), 1);
            return update;
        default:
            return state
    }
}

function reducerArray(state:string[], items:string[]){
    return items;
}

const CookUpProvider:React.FC = ({children}) => {
    const [selectedIngredients, setSelectedIngredients] = useReducer(reducer, []);
    const [selectedTags, setSelectedTags] = useReducer(reducerArray, []);
    return(
        <CookUpContext.Provider value={{
            selectedIngredients, 
            setSelectedIngredients,
            selectedTags,
            setSelectedTags
        }} >
            {children}
        </CookUpContext.Provider>
    );
}

export default CookUpProvider;