import {createContext} from 'react';

export interface CookUpContextProps{
    selectedIngredients:string[],
    setSelectedIngredients:Function,
    selectedTags:string[],
    setSelectedTags:Function
}

const CookUpContext = createContext({
    selectedIngredients:new Array<string>(),
    setSelectedIngredients:new Function(),
    selectedTags:new Array<string>(),
    setSelectedTags:new Function()
});

export default CookUpContext;