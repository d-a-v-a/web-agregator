import React, { createContext, useState, useContext } from 'react'


interface IContext {
    data?: any;
    setValues?: any;
}

const defaultState = {
};

const DataContext = createContext<IContext>(defaultState)

export const DataProvider = ({children}: {children?: any}) => {
    const [data, setData] = useState({});

    const setValues = (values: any) => {
        setData(prevData => ({
            ...prevData,
            ...values
        }))
    }

    return <DataContext.Provider value={{data, setValues}}>
        {children}
    </DataContext.Provider>
}

export const useData = () => useContext(DataContext)