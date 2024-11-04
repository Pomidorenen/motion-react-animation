import {createContext, useContext} from 'react';

export const RootStoreContext = createContext(null);
export const useStore = ()=>{
    const context = useContext(RootStoreContext);
    if(useContext == null){
        throw new Error('useStore must be used within the store');
    }
    return context;
}