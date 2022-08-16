import React, { useState, createContext, ReactNode, useEffect } from "react";
import { Annimal, CatsList, DogsList } from "../data";

interface ProviderProps{
    children: ReactNode;
}

export const Context = createContext({});

export function Provider({ children }: ProviderProps) {
    const [ catsList, setCatsList ] = useState<Annimal[]>();
    const [ dogsList, setDogsList ] = useState<Annimal[]>();

    const [ newAnnimalImage, setNewAnnimalImage ] = useState();

    useEffect(() => setCatsList(CatsList), []);
    useEffect(() => setDogsList(DogsList), []);

    return(
        <Context.Provider 
            value={{ 
                catsList, setCatsList, 
                dogsList, setDogsList, 
                newAnnimalImage, setNewAnnimalImage 
            }}>
            {children}
        </Context.Provider>
    )
}